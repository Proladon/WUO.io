<template>
  <div class="home">
    
    <p>立即創建訂單</p>
    <div class="quick-order">
      <input type="text" placeholder="訂單名稱">
      <hr>
      <OrderingList />
      <div id="create-order-btn" class="btn action">創建訂單</div>
    </div>
  
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderingList from '@/components/OrderingList.vue'; // @ is an alias to /src
import db from '../db'

export default defineComponent({
  name: 'Home',
  components: {
    OrderingList,
  },
});
</script>
<style lang="scss" scoped>
  .quick-order {
    border: solid 1px #2c3e50;
    border-radius: 10px;
    padding: 30px;
    @include flexVertical($wrap:wrap);
  }
</style>
