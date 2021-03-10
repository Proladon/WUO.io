<template>
  <div id="guide">
    
    <h1>使用指南</h1>
    <p>-- 🚧 待更新 --</p>
  
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import icons from "v-svg-icons";

export default defineComponent({
  name: 'Guide',
  props:['id'],
  // components: {icons},
});
</script>
<style lang="scss" scoped>
  *{
  color: slategray;
}

p{
  font-size: 20px;
}

.block{
  margin-bottom: 20px;
}
</style>
