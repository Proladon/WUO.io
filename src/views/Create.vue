<template>
  <div class="home">
    
    <div class="quick-order">
      <h2>訂單名稱</h2>
      <input type="text" v-model="orderName" placeholder="訂單名稱">
      <hr>
      <OrderMenu />
      <div class="btn action" @click="createOrder">創建訂單</div>
    </div>


    <div class="share-url">
      <p>https://www.github.io/wuo.io/#/search/{{refKey}}</p>
      <div class="copy-btn"></div>
    </div>
  
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import OrderMenu from '@/components/OrderMenu.vue';
import db from '../db'

export default defineComponent({
  name: 'Home',
  components: {
    OrderMenu,
  },
  setup(){
    const orderName = ref<string>('')
    const refKey = ref<string>('')
    
    const createOrder = (): void => {
      const ordersRef = db.database().ref('orders')
      const newOrder = {
        id:'',
        name: orderName.value,
        create: (new Date()).toString(),
        menu: [],
      }
      const order = ordersRef.push(newOrder)
      orderName.value = ''

      refKey.value = (order.key as string)
    }


    return{
      orderName,
      refKey,
      createOrder,
    }
  }
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
