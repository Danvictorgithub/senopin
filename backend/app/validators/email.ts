import vine from '@vinejs/vine'
export const verifyEmailValidator = vine.compile(
  vine.object({
    userId: vine.number(),
    hash: vine.string(),
    expires: vine.number(),
    signature: vine.string(),
  })
)

export const createPasswordResetValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
  })
)

export const verifyPasswordValidator = vine.compile(
  vine.object({
    userId: vine.number(),
    hash: vine.string(),
    expires: vine.number(),
    signature: vine.string(),
  })
)

export const resetPasswordValidator = vine.compile(
  vine.object({
    userId: vine.number(),
    hash: vine.string(),
    expires: vine.number(),
    signature: vine.string(),
    password: vine.string().minLength(8).confirmed(),
  })
)
