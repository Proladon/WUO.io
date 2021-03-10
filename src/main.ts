import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueFinalModal, { VfmOptions, VueFinalModalProperty } from 'vue-final-modal'


const app = createApp(App)

app
    .use(store)
    .use(router)
    .use(Toast)
    .use(VueFinalModal())
    .mount('#app')

router.afterEach((to, from, next)=>{
    window.scrollTo(0,1)
    window.scrollTo(0,0)
})

app.config.errorHandler = function (err, vm, info) {
    alert(err)
    console.log(err)
}
