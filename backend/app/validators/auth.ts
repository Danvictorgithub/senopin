import vine from '@vinejs/vine'
import { DateTime } from 'luxon'

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

export const signupValidator = vine.compile(
  vine.object({
    username: vine.string().minLength(4).maxLength(32),
    email: vine.string().email(),
    password: vine.string().minLength(8),
    full_name: vine.string().minLength(4).maxLength(32),
    image: vine
      .file({
        extnames: ['jpg', 'jpeg', 'png'],
        size: '2mb',
      })
      .optional(),
    // @ts-ignore
    birth_date: vine
      .date()
      // @ts-ignore
      .beforeOrEqual((field) => {
        return DateTime.now().minus({ years: 13 }).toISODate()
      })
      .transform((value) => DateTime.fromISO(value.toISOString()).toISODate()),
    bio: vine.string().minLength(4).maxLength(255).optional(),
  })
)
