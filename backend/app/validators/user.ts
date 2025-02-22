import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    full_name: vine.string().minLength(4).maxLength(32),
    username: vine.string().minLength(4).maxLength(32),
    password: vine.string().minLength(8),
  })
)
