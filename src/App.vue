<template>
  <router-link class="home-btn" to="/"><strong>WUO.io</strong></router-link>
  <router-link class="sign-in-btn" to="/auth"><strong>登入</strong></router-link>
  <p class="sub-title">Wut u ordering ?</p>
  <Nav />
  <Home v-if="$route.name === 'Home'" />
  <router-view v-if="$route.name !== 'Home'" />
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import {useStore} from 'vuex'
import Nav from '@/components/Nav.vue'
import Home from '@/views/Home.vue'
// import icons from "v-svg-icons";

export default defineComponent({
  components:{Nav, Home},
  setup(){
    const store = useStore()
    onMounted((): void => {
      store.commit('UPDATE_RECENT')
    })
  }
})
</script>

<style lang="scss" >
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

.home-btn{
  color: rgb(95, 250, 173);
  font-size: 50px;
  text-decoration: none;
}

.sign-in-btn{
  position: absolute;
  top: 40px;
  right: 30px;
  padding: 10px;
  border-radius: 5px;
  color: slategray;
  text-decoration: none;
}

.sub-title{
  letter-spacing: 4px;
  color: slategray;
  margin-top: 0px;
  margin-bottom: 30px;
}
</style>
