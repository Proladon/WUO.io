<template>
  <div id="search">
    
    <p>使用指南</p>
    <h1>{{id}}</h1>
  
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import db from '../db'

export default defineComponent({
  name: 'Search',
  props:['id'],
  components: {},
});
</script>
<style lang="scss" scoped>
  
</style>
