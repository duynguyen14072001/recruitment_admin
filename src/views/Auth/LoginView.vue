<script lang="ts" setup>
import { useI18n } from 'vue3-i18n'
import LoginForm from './components/LoginForm.vue'

const { t } = useI18n()
</script>

<template>
    <section className="full-page section-image">
        <div className="content box">
            <h4 className="form-title">{{ t('login_admin') }}</h4>
            <LoginForm />
        </div>
        <div className="full-page-background" />
    </section>
</template>

<style lang="scss" scoped>
.full-page {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        position: fixed;
        z-index: 2;
        width: 100%;
        height: 100%;
        display: block;
        left: 0;
        top: 0;
        content: '';
        background-color: var(--vt-c-black-bold-v3);
    }

    .content {
        display: flex;
        align-items: center;
        flex-direction: column;
        row-gap: 10px;
        justify-content: center;
        min-width: 460px;
        border: 1px solid var(--vt-c-gray-v7);
        background-color: var(--vt-c-gray-v7);
        padding: 40px;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        z-index: 3;

        .form-title {
            color: var(--vt-c-white);
            font-size: 24px;
        }
    }
}
</style>
