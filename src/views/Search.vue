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
      
      <div class="order-form">
        <input type="text" v-model="userOrdering.data.username" placeholder="姓名">
        
          <h4>快速選項</h4>
        <div class="options-container">
          <div class="option" v-for="option in order.data.options" :key="option">{{option}}</div>
        </div>
        <textarea  cols="30" rows="2" v-model="userOrdering.data.ordering" placeholder="其他"></textarea>
        <textarea  cols="30" rows="2" v-model="userOrdering.data.ps" placeholder="備註"></textarea>
        <div class="update" @click="updateOrder">送出</div>
      </div>
      

    </div>
      <h2>訂單明細</h2>
      <p v-for="detail in order.data.orderings" :key="detail">{{detail}}</p>
  
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
// import OrderMenu from '@/components/OrderMenu.vue';
import db from '../db'

export default defineComponent({
  name: 'Guide',
  props: ['refKey'],
  // components: {OrderMenu},
  setup(){
    const inputRefKey = ref<string>('')
    const showOrder = ref<boolean>(false)
    const userOrdering = reactive({
      data:{
        username:'',
        ordering: '',
        ps: ''
      }
    })
    const order = reactive({
      data: Object
    })

    
    
    const searchOrder = (): void => {
      db.database().ref('orders/' + inputRefKey.value).on('value', snapshot =>{
        const orderData = snapshot.val()
        order.data = orderData
      })

      showOrder.value = true
    }

    const updateOrder = (): void => {
      const orderRef = db.database().ref('orders/' + inputRefKey.value)
      orderRef.get().then(snapshot=>{
        if (snapshot.val().orderings) {
          const data = snapshot.val().orderings
          data.push(userOrdering.data)
          orderRef.update({orderings: data})
        }
        else{
          const data = [userOrdering.data]
          orderRef.update({orderings: data})
        }
      })
    }
    
    return{
      showOrder,
      inputRefKey,
      searchOrder,
      order,
      updateOrder,
      userOrdering,
    }
  }

});
</script>
<style lang="scss" scoped>
  .order-container{
    border: solid 1px slategray;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;
  }

  .order-form{
    
  }

  .options-container{
    gap: 10px;
    margin-bottom: 15px;
    @include flexHorizontal();
  }

  .option{
    // width: 30%;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 5px;
    text-align: center;
    background: skyblue;
  }
</style>
