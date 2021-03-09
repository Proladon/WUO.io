import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueToastificationPlugin from 'vue-toastification';

const app = createApp(App)

app.use(store)
app.use(router)
app.use(Toast)
app.mount('#app')

router.afterEach((to, from, next)=>{
    window.scrollTo(0,1)
    window.scrollTo(0,0)
})

app.config.errorHandler = function (err, vm, info) {
    alert(err)
    alert(info)
    console.log(err)
}
