<template>
    <div id="auth">
        <h2>登入</h2>
        <h2>註冊</h2>
        <input type="email" v-model="email" placeholder="信箱">
        <input type="password" v-model="pass" placeholder="密碼">

        <div class="signup-btn" @click="signup">註冊</div>
        <div class="signin-btn" @click="signin">登入</div>

    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import { useToast } from "vue-toastification"
import db from '../db'

export default defineComponent({
    name: "Auth",
    setup(){
        const toast = useToast();
        const email = ref<string>('')
        const pass = ref<string>('')

        const signup = (): void => {
            if(email.value.trim()===''){
                toast.warning('請輸入信箱')
                return
            }
            else if( pass.value.trim()===''){
                toast.warning('請輸入密碼')
                return
            }
            const promise = db.auth().createUserWithEmailAndPassword(email.value, pass.value)
            promise.then(()=>{
                toast.info("註冊成功!")
            }).catch(err => {
                console.log(err)
                const e = err.code.split('/')[1]
                switch (e){
                    case 'invalid-email':
                        toast.warning('請輸入正確信箱')
                        break
                    case 'weak-password':
                        toast.warning('密碼至少需 6 位字符')
                        break
                }
            })
        }

        const signin = (): void => {
            const promise = db.auth().signInWithEmailAndPassword(email.value, pass.value)
            promise.then(()=>{
                toast.info("登入成功!")
            }).catch(err=>{
                toast.error(err)
                console.log(err)
            })
        }

        return{
            signup,
            signin,
            email,
            pass,
        }
    }
})
</script>

<style lang="scss">
#auth{
    @include shadow();
}
</style>