/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import { throttlePasswordReset } from './limiter.js'
import { cuid } from '@adonisjs/core/helpers'
import drive from '@adonisjs/drive/services/main'
import fs from 'node:fs'

const AuthController = () => import('#controllers/auth_controller')
const UsersController = () => import('#controllers/users_controller')
const EmailsController = () => import('#controllers/emails_controller')

const ProfilesController = () => import('#controllers/profiles_controller')
router.get('/', async () => {
  return {
    message: 'Senopin API v1.0.0 by DV8',
  }
})
router
  .group(() => {
    // /api/auth
    router
      .group(() => {
        router.post('login', [AuthController, 'login'])
        router.post('signup', [AuthController, 'signup'])
        router
          .group(() => {
            router.post('logout', [AuthController, 'logout'])
            router.get('me', [AuthController, 'me'])
          })
          .use(
            middleware.auth({
              guards: ['api'],
            })
          )
      })
      .prefix('auth')
    // /api/email
    router
      .group(() => {
        router.get('verify-email/:userId/:hash', [EmailsController, 'verifyEmail'])
        router.post('send-email-verification', [EmailsController, 'sendEmailVerification']).use(
          middleware.auth({
            guards: ['api'],
          })
        )
        router
          .post('send-password-reset', [EmailsController, 'sendPasswordReset'])
          .use(throttlePasswordReset)
        router.get('reset-password/:userId/:hash', [EmailsController, 'verifyResetPassword'])
        router.post('reset-password/:userId/:hash', [EmailsController, 'resetPassword'])
      })
      .prefix('email')
    // /api/users
    router
      .resource('users', UsersController)
      .apiOnly()
      .use(['index', 'store', 'update', 'destroy'], middleware.allow_development())

    // /api/profiles
    router
      .resource('profiles', ProfilesController)
      .apiOnly()
      .use(['index', 'store', 'update', 'destroy'], middleware.allow_development())
    router.patch('profiles', [ProfilesController, 'updateUserProfile']).use(middleware.auth())
  })
  .prefix('api')

router
  .post('upload-test', async ({ request, response }) => {
    const file = request.file('file')
    if (!file) {
      response.abort({ message: 'No file uploaded' })
    }
    const filename = `${cuid()}.${file!.extname}`
    const fileBuffer = fs.readFileSync(file!.tmpPath!)
    fs.rmSync(file!.tmpPath!)
    await drive.use().put(filename, fileBuffer)
    return { message: 'File uploaded' }
  })
  .use(middleware.allow_development())

router
  .post('upload-test-new', async ({ request, response }) => {
    const file = request.file('file')
    if (!file) {
      response.abort({ message: 'No file uploaded' })
    }
    const filename = `${cuid()}.${file!.extname}`
    await file!.moveToDisk(filename, 's3', { moveAs: 'buffer' })
    return { message: 'File uploaded' }
  })
  .use(middleware.allow_development())
