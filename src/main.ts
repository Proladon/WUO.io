import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";

createApp(App)
    .use(store)
    .use(router)
    .use(Toast)
    .mount('#app')

    router.afterEach((to, from, next)=>{
        // console.log("debug")
        alert("debug")
        window.scrollTo(0,1)
        window.scrollTo(0,0)
    })