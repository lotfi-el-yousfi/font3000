<template>

    <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer />
        <v-btn icon @click="logout" v-if="isloggedIn">
            <v-icon>mdi-logout</v-icon>
        </v-btn>
        <v-btn icon @click="login" v-else>
            <v-icon>mdi-login</v-icon>
        </v-btn>
        <v-btn icon @click="toggleTheme">
            <v-icon>{{ $vuetify.theme.dark ? 'mdi-brightness-7' : 'mdi-brightness-4' }}</v-icon>
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
            <v-list-item to="/" link>
                <template v-slot:prepend>
                    <v-icon>mdi-home</v-icon>
                </template>
                <v-list-item-title> Home </v-list-item-title>
            </v-list-item>
            <v-list-item v-for="(item, index) in EndPointsList" @click="selected_end_point(index)" :key="index">

                <template v-slot:prepend>
                    <v-icon>mdi-table</v-icon>
                </template>
                <v-list-item-title>
                    {{ item.http_verb }}
                    <v-chip size="x-small" color="green" variant="flat" style="margin-right: 4px">
                        {{ item.endpoint }}
                    </v-chip>
                    <v-chip v-if="item.require_auth" size="x-small" color="red" variant="flat">
                        <v-icon>mdi-lock</v-icon>
                    </v-chip>
                </v-list-item-title>

            </v-list-item>


        </v-list>
    </v-navigation-drawer>



</template>

<script setup lang="ts">


import { useAppConfigStore } from '@/stores/app';
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'


import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}



const router = useRouter()

const store = useAppConfigStore();
let EndPointsList = store.endpointsConfig
const drawer = ref(false)

const login = () => {
    router.push('/login')
}

const logout = () => {

    localStorage.removeItem('token')
    router.push({ name: "login" })
}
const selected_end_point = (index: number) => {
    store.selected_end_point = index
}

onUpdated(() => {
})
</script>
