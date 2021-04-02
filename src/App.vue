<template>
  <div class="auth-btn-container">
    <p class="info">Hello <span class="username"><strong>Proladon</strong></span></p>
    <router-link class="btn auth" to="/auth"><strong>登入</strong></router-link>
    <router-link class="btn " to="/manage"><strong>我的訂單</strong></router-link>
  </div>

  <div class="app-title-container">
    <router-link class="title" to="/"><strong>WUO.io</strong></router-link>
    <p class="sub-title">Wut u ordering ?</p>
  </div>
  
  <Nav />
  <Home v-if="$route.name === 'Home'" />
  <router-view v-if="$route.name !== 'Home'" />
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import {useStore} from 'vuex'
import Nav from '@/components/Nav.vue'
import Home from '@/views/Home.vue'
import db from './db'
import { DateTime } from 'date-time-js'


export default defineComponent({
  components:{Nav, Home},
  setup(){
    const store = useStore()
    const ordersRef = db.database().ref('orders')

    onMounted((): void => {
      store.commit('UPDATE_RECENT')
      
      // 初始化: 獲取整個db資料，並銷毀過期訂單
      ordersRef.get( ).then(snapshot => {
        if(snapshot.exists()){
          const allData = snapshot.val()

          // 檢查所有訂單，過期(>1天)則銷毀
          for(const data in allData){
            const create = new DateTime(new Date(allData[data].create)).date()
            const today = new DateTime(new Date()).date()

            if (today - create >= 1){
              db.database().ref('orders/' + data).remove()
            }
          }
        }
      })

    })

  }
})
</script>

<style lang="scss">
html{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: $light;
  // background: $dark;
}

#app{
  color: slategray;
}

body{
  padding: 20px;
}

.app-title-container{
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 20px;
  
  .title{
    font-size: 2.5em;
    text-decoration: none;
    color: $light-green;
    margin: 0;
  }

  .sub-title{
    margin: 0;
  }
}


.auth-btn-container{
  display: flex;
  top: 40px;
  right: 30px;
  padding: 10px;
  border-radius: 5px;
  color: slategray;
  text-decoration: none;

  .info{
    flex: 2;
    margin: 0;
    margin-right: 10px;
  }

  .username{
    color: $light-green;
  }

  .btn{
    color: slategray;
    margin-left: 10px;
  }
}


@media screen and (min-width: 740px) {
  body{
    padding-right: 200px;
    padding-left: 200px;
  }
  
  .sign-in-btn{
    top: 40px;
    right: 100px;
  }
}
</style>
