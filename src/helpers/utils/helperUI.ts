import { h } from 'vue'
import { notification } from 'ant-design-vue'
import {
  CheckCircleOutlined,
  InfoCircleOutlined,
  WarningOutlined,
  CloseCircleOutlined
} from '@ant-design/icons-vue'
import { REGEX_EMAIL, STATUS_CODE_SUCCESS } from '..'
import i18n from '@/lang'

const { t } = i18n
const typeIcon = {
  info: [InfoCircleOutlined, 'blue'],
  success: [CheckCircleOutlined, 'green'],
  warning: [WarningOutlined, 'orange'],
  error: [CloseCircleOutlined, 'red']
}

export type notifyType = 'success' | 'warning' | 'info' | 'error'
export const notify = (message?: string, description?: string, type: notifyType = 'success') => {
  const [icon, color] = typeIcon[type]
  notification[type]({
    message,
    description,
    duration: 3,
    placement: 'topRight',
    icon: () => h(icon, { style: `color: ${color}` })
  })
}

export const notifyStatus = (status: number, message: string) => {
  const type = status === STATUS_CODE_SUCCESS ? 'success' : 'error'
  const mes = status === STATUS_CODE_SUCCESS ? message : 'Error!'
  return notify(mes, '', type)
}

export const trim = (field: string, formState: any) => {
  if (formState[field]) {
    formState[field] = formState[field].trim()
  }
}

export const trimDynamic = (array: number[] | string[], form: any) => {
  const [field1, index, field2] = array
  form[field1][index][field2] = form[field1][index][field2].trim()
}

export const formatCurrency = (money: string) => {
  const result = unRoundFixed(money)
  return String(result).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const trimAndFormatCurrency = (field: string | number, formState: any) => {
  if (formState[field]) {
    formState[field] = formState[field].trim()
    formState[field] = formatCurrency(formState[field])
  }
}

export const unRoundFixed = (num: string) => {
  const unformattedNum = num.replace(/,/g, '')
  return parseFloat(unformattedNum)
}

export const formatter = (value: string) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const parser = (value: string) => value!.replace(/\$\s?|(,*)/g, '')

export const validateEmail = async (_: any, value: any, column: string) => {
  const regex = new RegExp(REGEX_EMAIL)
  if (value) {
    if (!regex.test(value)) {
      return Promise.reject(
        new Error(
          t('validation.email', {
            0: t(column)
          }) as string
        )
      )
    }
  }
  return Promise.resolve()
}

export const getFormikErr = (data: any) => {
  const errorData: any = {}
  data.forEach((v: any, k: any) => {
    errorData[k] = v + ''
  })
  return errorData
}
