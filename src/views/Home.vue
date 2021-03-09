<template>
  <div class="home">
    <div class="block">
      <h1>Hello !</h1>
      <p>WUO.io 是一個線上即時團體點餐系統</p>
      <p>你可以創建一個即時訂單，並分享給你的夥伴們，如此夥伴們就可以同時點餐並即時統計品項囉!</p>
      <p></p>
    </div>

    <!-- <div class="block">
      <h1>Quick Start</h1>
      <p class="sub-title">你是招集人:</p>
      <p>點擊上方 <router-link class="nav-btn" to="/create">⚡ 快速建立訂單</router-link>   立即建立一份訂單</p>
    </div>

    <div class="block">
      <p class="sub-title">我想點餐:</p>
      <p>點擊上方 <router-link class="nav-btn" to="/search">🔎 搜尋訂單</router-link>   立即建立一份訂單</p>
    </div> -->
  
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';


export default defineComponent({
  name: 'Home',
  components: {
  },
});
</script>

<style lang="scss" scoped>
*{
  color: slategray;
}

p{
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;

  &.sub-title{
    font-size: 24px;
  }
}

.block{
  margin-bottom: 20px;
}

.nav-btn{
  color: skyblue;
}
</style>
