import i18n from '@/lang'
import { MAX_STRING, MIN_STRING, validateEmail } from '@/helpers'
const { t } = i18n

export const ruleForm = {
    mail_address: [
        {
            required: true,
            message: t('validation.required', [t('mail_address')]),
        },
        {
            max: MAX_STRING,
            message: t('validation.max.string', [t('mail_address'), MAX_STRING]),
        },
        {
            validator: async (_: any, value: any) => {
                if (value && value.length <= MAX_STRING) {
                    return validateEmail(_, value, 'mail_address')
                }
            },
        },
    ],
    password: [
        {
            required: true,
            message: t('validation.required', [t('password')]),
        },
        {
            max: MAX_STRING,
            message: t('validation.max.string', [t('password'), MAX_STRING]),
        },
        {
            min: MIN_STRING,
            message: t('validation.min.string', [t('password'), MIN_STRING]),
        },
    ],
}

export const getChangePasswordRule: any = (ruleForm: any) => ({
    old_password: [
        {
            required: true,
            message: t('validation.required', [t('auth.change_password.label.old_password')]),
        },
        {
            max: MAX_STRING,
            message: t('validation.max.string', [
                t('auth.change_password.label.old_password'),
                MAX_STRING,
            ]),
        },
        {
            min: MIN_STRING,
            message: t('validation.min.string', [
                t('auth.change_password.label.old_password'),
                MIN_STRING,
            ]),
        },
    ],
    new_password: [
        {
            required: true,
            message: t('validation.required', [t('auth.change_password.label.new_password')]),
        },
        {
            max: MAX_STRING,
            message: t('validation.max.string', [
                t('auth.change_password.label.new_password'),
                MAX_STRING,
            ]),
        },
        {
            min: MIN_STRING,
            message: t('validation.min.string', [
                t('auth.change_password.label.new_password'),
                MIN_STRING,
            ]),
        },
    ],
    conf_password: [
        {
            required: true,
            message: t('validation.required', [t('auth.change_password.label.new_password')]),
        },
        {
            max: MAX_STRING,
            message: t('validation.max.string', [
                t('auth.change_password.label.new_password'),
                MAX_STRING,
            ]),
        },
        {
            min: MIN_STRING,
            message: t('validation.min.string', [
                t('auth.change_password.label.new_password'),
                MIN_STRING,
            ]),
        },
        {
            validator: async (rule: any, value: any) => {
                if (!value) return Promise.resolve()
                if (value.length > MAX_STRING) return Promise.resolve()
                if (value.length < MIN_STRING) return Promise.resolve()

                if (ruleForm.new_password && value !== ruleForm.new_password) {
                    return Promise.reject(new Error(t('validation.password.confirm')))
                }
            },
        },
    ],
})

export const ruleFormForgotPassword = {
    mail_address: [
        {
            required: true,
            message: t('validation.required', [t('mail_address')]),
        },
        {
            max: MAX_STRING,
            message: t('validation.max.string', [t('mail_address'), MAX_STRING]),
        },
        {
            validator: async (_: any, value: any) => {
                if (value && value.length <= MAX_STRING) {
                    return validateEmail(_, value, 'mail_address')
                }
            },
        },
    ],
}
