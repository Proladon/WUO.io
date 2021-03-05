<template>
<h1>WUO.io</h1>
<p>Wut u ordering ?</p>
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
  background-color: rgb(222, 222, 222);
}
</style>
