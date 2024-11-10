import i18n from '@/lang'
import { REGEX_FLOAT, REGEX_NUMBER } from './regex'

const { t } = i18n

export const validateInteger = async (_: any, value: any, column: string, min = 0, max = 0) => {
  const regex = new RegExp(REGEX_NUMBER)
  if (!value) return Promise.resolve()
  if (!regex.test(value)) {
    return Promise.reject(
      new Error(
        t('validation.integer', {
          0: t(column)
        }) as string
      )
    )
  }
  if (value < min) {
    return Promise.reject(
      new Error(
        t('validation.min.numeric', {
          0: t(column),
          1: min
        }) as string
      )
    )
  }
  if (max > 0 && value > max) {
    return Promise.reject(
      new Error(
        t('validation.max.numeric', {
          0: t(column),
          1: max
        }) as string
      )
    )
  }
}

export const validateFloat = async (
  _: any,
  value: any,
  column: string,
  min = 0 as number,
  max = 1 as number
) => {
  const regex = new RegExp(REGEX_FLOAT)
  if (!value) return Promise.resolve()
  if (!regex.test(value)) {
    return Promise.reject(
      new Error(
        t('validation.numeric', {
          0: t(column)
        }) as string
      )
    )
  }
  if (value < min) {
    return Promise.reject(
      new Error(
        t('validation.min.numeric', {
          0: t(column),
          1: min
        }) as string
      )
    )
  }

  if (max > 0 && value > max) {
    return Promise.reject(
      new Error(
        t('validation.max.numeric', {
          0: t(column),
          1: max
        }) as string
      )
    )
  }
}
