<template>
    <div id="auth">
        <h2 v-if="mode === 'signin'">登入</h2>
        <h2 v-if="mode === 'signup'">註冊</h2>

        <div class="auth-container">
            <input class="std-input email" type="email" v-model="email" placeholder="信箱">
            <input class="std-input password" type="password" v-model="pass" placeholder="密碼">
        </div>

        <div class="btn signin-btn" v-if="mode === 'signin'" @click="signin">登入</div>
        <div class="btn signup-btn" v-if="mode === 'signup'" @click="signup">註冊</div>

        <div class="auth-option" v-if="mode === 'signin'">尚無帳戶<span class="btn" @click="mode = 'signup'">註冊</span></div>
        <div class="auth-option" v-if="mode === 'signup'">已有帳戶<span class="btn" @click="mode = 'signin'">登入</span></div>

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
        const mode = ref<string>('signin')
        const email = ref<string>('')
        const pass = ref<string>('')

        const errorHandle = (err: any): void => {
            const e = err.code.split('/')[1]
            switch (e){
                case 'invalid-email':
                    toast.warning('請輸入正確信箱')
                    break
                case 'weak-password':
                    toast.warning('密碼至少需 6 位字符')
                    break
                case 'user-not-found':
                    toast.error('查無此使用者，請確認信箱是否輸入錯誤')
                    break
                case 'wrong-password':
                    toast.error('密碼錯誤，請確認是否輸入錯誤')
                    break
            }
        }

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
                errorHandle(err)
            })
        }

        const signin = (): void => {
            const promise = db.auth().signInWithEmailAndPassword(email.value, pass.value)
            promise.then(()=>{
                toast.info("登入成功!")
            }).catch(err=>{
                errorHandle(err)
            })
        }

        return{
            mode,
            errorHandle,
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
    width: 20vh;
    margin: 0 auto;
    > h2{
        text-align: center;
    }
    @include shadow();
}

.auth-container{
    justify-content: center;
    align-items: center;
    @include flexVertical();
}

.title-container{
    justify-content: center;
    align-items: center;
    @include flexHorizontal();
}

.email, .password{
    width: 100%;
    margin-bottom: 10px;
}

.signin-btn, .signup-btn{
    background: $light-green;
    text-align: center;
    padding: 5px;
    margin-bottom: 10px;
    &:hover{
        color: snow;
        background: slategray;
    }
}

.auth-option{
    text-align: center;
    user-select: none;
    color: slategray;
    >span{
        color: $light-green;
    }

    
}

</style>