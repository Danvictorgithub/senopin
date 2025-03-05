import vine from '@vinejs/vine'
import { DateTime } from 'luxon'

export const createProfileValidator = vine.compile(
  vine.object({
    full_name: vine.string().minLength(4).maxLength(32),
    image: vine
      .file({
        extnames: ['jpg', 'jpeg', 'png'],
        size: '2mb',
      })
      .optional(),
    birth_date: vine
      .date()
      // @ts-ignore
      .beforeOrEqual((field) => {
        return DateTime.now().minus({ years: 13 }).toISODate()
      })
      .transform((value) => DateTime.fromISO(value.toISOString()).toISODate()),
    bio: vine.string().minLength(4).maxLength(255).optional(),
    user_id: vine.number(),
  })
)

export const updateProfileValidator = vine.compile(
  vine.object({
    full_name: vine.string().minLength(4).maxLength(32).optional(),
    image: vine
      .file({
        extnames: ['jpg', 'jpeg', 'png'],
        size: '2mb',
      })
      .optional(),
    bio: vine.string().minLength(4).maxLength(255).optional(),
    // birth_date: vine.date(), // Birth Date is not updatable
    // user_id: vine.number(),
  })
)
