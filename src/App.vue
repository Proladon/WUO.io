<template>
<router-link class="home-btn" to="/"><strong>WUO.io</strong></router-link>
<p class="sub-title">Wut u ordering ?</p>
  <Nav />
  <Home v-if="$route.name === 'Home'" />
  <router-view v-if="$route.name !== 'Home'" />
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import Nav from '@/components/Nav.vue'
import Home from '@/views/Home.vue'
export default defineComponent({
  components:{Nav, Home}
})
</script>

<style lang="scss" >
html{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: $light;
  // background: $dark;
}

body{
  padding: 20px;
}

.home-btn{
  color: rgb(95, 250, 173);
  font-size: 50px;
  text-decoration: none;

}

.sub-title{
  letter-spacing: 4px;
  color: slategray;
  margin-top: 0px;
  margin-bottom: 30px;
}
</style>
