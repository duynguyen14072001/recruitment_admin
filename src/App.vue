<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { LayoutVue } from '@/components/common'
import LoginView from './views/Auth/LoginView.vue'
import ja_JP from 'ant-design-vue/lib/locale/ja_JP'
import { getToken } from './helpers'
import { useAuthStore } from './stores'

const authStore = useAuthStore()
const isLogin = ref(!!getToken())
const config = {
    token: {
        colorPrimary: '#ff7789',
        borderRadius: 0,
    },
}

authStore.$subscribe(() => {
    isLogin.value = 'mail_address' in authStore.me
})

onMounted(() => {
    if (!getToken()) {
        isLogin.value = false
    }
})
</script>

<template>
    <a-config-provider :locale="ja_JP" :theme="config" :autoInsertSpaceInButton="false">
        <LayoutVue v-if="isLogin">
            <router-view />
        </LayoutVue>
        <template v-else>
            <LoginView />
        </template>
    </a-config-provider>
</template>

<style lang="scss" scoped></style>
