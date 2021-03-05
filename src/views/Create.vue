<template>
  <div class="home">
    
    <div class="quick-order">
      <h2>訂單名稱</h2>
      <input type="text" v-model="orderName" placeholder="訂單名稱">
      <hr>

      <p>訂購選項</p>
      <input type="text" v-model="optionInput" @keypress.enter="addOption">
      <div class="ordering-options" 
        v-for="(option, index) in orderOptions.options" :key="option">
        <p>{{option}} <span @click="removeOption(index)">X</span></p>
        
      </div>
      
      <div class="btn action" @click="createOrder">創建訂單</div>
    </div>


    <div class="share-url">
      <p>https://www.github.io/wuo.io/#/search/{{refKey}}</p>
      <div class="copy-btn"></div>
    </div>
  
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import db from '../db'

export default defineComponent({
  name: 'Home',
  components: {
  },
  setup(){
    const orderName = ref<string>('')
    const optionInput = ref<string>('')
    const orderOptions = reactive({
      options: Array<string>()
    })
    const refKey = ref<string>('')
    
    const ordersRef = db.database().ref('orders')


    const createOrder = (): void => {
      const newOrder = {
        id:'',
        name: orderName.value,
        create: (new Date()).toString(),
        options: orderOptions.options,
      }
      const order = ordersRef.push(newOrder)
      orderName.value = ''

      refKey.value = (order.key as string)
    }

    const addOption = (): void => {
      const option = optionInput.value.trim()
      if (option !== '' && !orderOptions.options.includes(option)) {
        orderOptions.options.push(option)
      }
    }

    const removeOption = (index: number): void => {
      orderOptions.options.splice(index, 1)
    }


    return{
      orderName,
      refKey,
      createOrder,
      optionInput,
      orderOptions,
      addOption,
      removeOption,
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
