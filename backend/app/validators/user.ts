import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    // full_name: vine.string().minLength(4).maxLength(32),
    // image: vine.file({
    //   extnames: ['jpg', 'jpeg', 'png'],
    //   size: '2mb',
    // }),
    username: vine.string().minLength(4).maxLength(32),
    password: vine.string().minLength(8),
    // birth_date: vine.date(),
  })
)
