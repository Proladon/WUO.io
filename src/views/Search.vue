<template>
  <div id="guide">
    <!-- <p>{{$route.params.key}}</p> -->
    <h1>{{refKey}}</h1>
    
    <p>搜尋訂單</p>
    <input type="text" v-model="inputRefKey">
    <div id="input-refKey" class="btn" @click="searchOrder">Search</div>

    <div class="order-container" v-if="showOrder">
      <!-- <p v-for="data in order.data" :key="data">{{data}}</p> -->
      <h2>訂單: {{order.data.name}}</h2>
      <OrderMenu title="訂購列表" />

    </div>

  
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import OrderMenu from '@/components/OrderMenu.vue';
import db from '../db'

export default defineComponent({
  name: 'Guide',
  props: ['refKey'],
  components: {OrderMenu},
  setup(){
    const inputRefKey = ref<string>('')
    const showOrder = ref<boolean>(false)
    const order = reactive({
      data: Object
    })


    const searchOrder = (): void => {
      
      const orderRef = db.database().ref('orders/' + inputRefKey.value)

      orderRef.once('value', snapshot =>{
        const orderData = snapshot.val()
        order.data = orderData
      })

      showOrder.value = true
    }
    
    return{
      showOrder,
      inputRefKey,
      searchOrder,
      order
    }
  }

});
</script>
<style lang="scss" scoped>
  .order-container{
    border: solid 1px slategray;
  }
</style>
