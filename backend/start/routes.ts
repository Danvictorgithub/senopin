/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
const AuthController = () => import('#controllers/auth_controller')
const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

router.get('/', async () => {
  return {
    message: 'Senopin API v1.0.0 by DV8',
  }
})
router
  .group(() => {
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
      .prefix('auth'),
      router
        .resource('users', UsersController)
        .apiOnly()
        .use(['index', 'store', 'update', 'destroy'], middleware.allow_development())
  })
  .prefix('api')
