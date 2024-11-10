<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { AppSidebarVue } from '.'

const route = useRoute()
const routeNoLayout = ['change-password', 'preview-detail']
</script>

<template>
    <a-layout>
        <a-layout-sider
            v-if="!routeNoLayout.includes(route.name as string)"
            width="160"
            :trigger="null"
        >
            <div class="logo">
                <a href="/manga"><img :src="Imgs.LoginImg" alt="" /></a>
            </div>
            <AppSidebarVue />
        </a-layout-sider>
        <a-layout class="ant-layout-body">
            <!-- <AppHeaderVue /> -->
            <a-layout-content>
                <slot />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
