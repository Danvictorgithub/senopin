import vine from '@vinejs/vine'

const emailOrUsername = vine
  .group([
    vine.group.if((data) => 'email' in data, {
      email: vine.string().email(),
    }),
    vine.group.if((data) => 'username' in data, {
      username: vine.string().minLength(4).maxLength(32),
    }),
  ])
  .otherwise((_, field) => {
    field.report('Enter either the email or the phone number', 'email_or_phone', field)
  })

export const loginValidator = vine.compile(
  vine
    .object({
      password: vine.string().minLength(8),
    })
    .merge(emailOrUsername)
)
