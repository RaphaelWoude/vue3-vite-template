import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import { createPinia } from "pinia"

import App from "./App.vue"
import Home from "./views/Home/Home.vue"

createApp(App)
    .use(createRouter({
        history: createWebHistory(),
        routes: [
            { 
                path: "/", 
                component: Home 
            },
        ],
    }))
    .use(createPinia())
    .mount("#app")
