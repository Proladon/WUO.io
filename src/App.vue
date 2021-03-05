<template>
<h1>WUO.io</h1>
<p class="sub-title">Wut u ordering ?</p>
  <Nav />
  <router-view/>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import Nav from '@/components/Nav.vue'
export default defineComponent({
  components:{Nav}
})
</script>

<style lang="scss">
html{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: rgb(255, 255, 255);
}

body{
  padding: 20px;
}

h1{
  margin: 0;
}
.sub-title{
  margin-top: 5px;
  margin-bottom: 30px;
}
</style>
