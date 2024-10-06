<script lang="ts" setup>
import { reactive } from 'vue'
import { useI18n } from 'vue3-i18n'
import { useRouter } from 'vue-router'
import { ruleForm } from '../shared'
// import { useAuthStore } from '@/stores/auth'
// import type { LoginDto } from '@/interface'
import { INITIAL_LOGIN } from '../shared'
import { STATUS_CODE_SUCCESS, notify } from '@/helpers'

const { t } = useI18n()
const router = useRouter()
// const authStore = useAuthStore()
// const formState = reactive<LoginDto>(INITIAL_LOGIN)

// const onFinish = async (values: any) => {
//     const { status_code, message } = await authStore.login({ ...values })
//     if (status_code !== STATUS_CODE_SUCCESS) {
//         return notify(t('unauthenticated'), '', 'error')
//     }

//     notify(message, t('success'), 'success')
//     router.push({ name: 'users' })
// }

const onFinishFailed = (errorInfo: any) => {
    console.error('Failed:', errorInfo)
}

const trim = (field: 'mail_address' | 'password') => {
    if (formState[field]) {
        formState[field] = formState[field].trim()
    }
}
</script>

<template>
    <a-form
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        ref="ruleFormRef"
        :model="formState"
        :rules="ruleForm"
        :colon="false"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
    >
        <a-form-item name="mail_address">
            <a-input
                v-model:value="formState.mail_address"
                @blur="trim('mail_address')"
                :placeholder="t('mail_address')"
            />
        </a-form-item>
        <a-form-item name="password">
            <a-input-password
                v-model:value="formState.password"
                autocomplete="on"
                @blur="trim('password')"
                :placeholder="t('password')"
            />
        </a-form-item>
        <a-button type="primary" html-type="submit">
            {{ t('login') }}
        </a-button>
    </a-form>
</template>
