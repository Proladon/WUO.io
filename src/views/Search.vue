<template>
  <div id="search">
    <div class="search-container">
      <input type="text" v-model="inputRefKey" placeholder="訂單編號">
      <div id="input-refKey" class="search-btn" @click="searchOrder">Search</div>
    </div>
  
    <div class="nav-container" >
      <div class="nav-btn" :class="{active: view === 1 && order.data !== ''}" @click="view= 1">我要訂購</div>
      <div class="nav-btn" :class="{active: view === 2 && order.data !== ''}" @click="view = 2">訂單明細</div>
      
      
    </div>

    <div class="order-container"  v-if="view === 1 && order.data !== ''">
      <h2>訂單: {{order.data.name}}</h2>
      
      <div class="order-form">
        <input type="text" v-model="userOrdering.data.username" placeholder="訂購人 (選填)">
        
          <h4>快速選項</h4>
        <div class="options-container" >
          <div class="option" 
            v-for="(option, index) in order.data.options" 
            :key="option"
            @click="addToOrderings(index)"
            >{{option}}
          </div>
        </div>
        <textarea   
          v-model="userOrdering.data.ordering"
          placeholder="目前不支援選擇數量，請手動標記；例: 奶茶x2"
          ></textarea>
        <br>
        <textarea   v-model="userOrdering.data.ps" placeholder="備註 (選填)"></textarea>
        <div class="update-btn" @click="updateOrder">送出</div>
      </div>
    </div>

    <OrderingInfo v-show="view === 2 " 
      :orderData="order.data" :refKey="inputRefKey" />
  
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue';
import { useToast } from "vue-toastification";
import {useRouter} from 'vue-router'
import OrderingInfo from '@/components/OrderingInfo.vue';
import db from '../db'

export default defineComponent({
  name: 'Search',
  props: ['refKey'],
  components: {OrderingInfo},
  setup(props){
    const router = useRouter()
    const toast = useToast()
    const inputRefKey = ref<string>()
    const view = ref<number>(2)
    const userOrdering = reactive({
      data:{
        username:'',
        ordering: '',
        ps: ''
      }
    })
    const order = reactive({
      data: {
        name: 'None',
        options: ''
      }
    })

    
    
    const searchOrder = (): void => {
      router.push('/search/' + inputRefKey.value)
      db.database().ref('orders/' + inputRefKey.value).on('value', snapshot =>{
        if(!inputRefKey.value || inputRefKey.value?.trim() === ''){
          toast.warning('請輸入訂單編號')
          return
        }
        
        if (!snapshot.exists()){
          toast.error('查無此訂單')
          return
        }
        const orderData = snapshot.val()
        order.data = orderData
      })
    }

    const addToOrderings = (index: number): void=>{
      const selectOption = order.data.options[index]
      const orderings = userOrdering.data.ordering
      if (orderings.includes(selectOption))return
      userOrdering.data.ordering += selectOption + '、'
    }

    const updateOrder = (): void => {
      if(order.data.name === 'None') {
        toast.error('訂單不存在')
        return
      }

      if(userOrdering.data.ordering.trim() === '') {
        toast.error('訂購品項請勿留空')
        return
      }
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

        toast.success('已新增訂購!')

        userOrdering.data.username = ''
        userOrdering.data.ordering = ''
        userOrdering.data.ps = ''

        view.value = 2
      })
    }

    onMounted(()=>{
      if(inputRefKey.value === '') return
      inputRefKey.value = props.refKey
      if(props.refKey) searchOrder()
    })
    
    return{
      view,
      inputRefKey,
      searchOrder,
      order,
      updateOrder,
      userOrdering,
      addToOrderings,
    }
  }

});
</script>
<style lang="scss" scoped>

.active{
  color: aquamarine !important;
}

.search-container{
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @include shadow();

  >input{
    text-align: center;
  }

  .search-btn{
    cursor: pointer;
    padding: 5px;
    margin-left: 5px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px slategray;
  }
}

  .order-container{
    box-sizing: border-box;
    padding: 10px;
    @include shadow();

    input{
      width: 50%;
      padding: 10px;
    }


  }
  textarea{
    resize: vertical;
    width: 62vw;
    height: 10vh;
  }

 .nav-container{
   display: flex;
    justify-content: space-around;
   .nav-btn{
     cursor: pointer;
     text-align: center;
     width: 100%;
     color: white;
     padding: 10px;
     background: slategrey;
   }
 }

  .options-container{
    gap: 10px;
    margin-bottom: 15px;
    @include flexHorizontal();
  }

  .option{
    cursor: pointer;
    user-select: none;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 5px;
    text-align: center;
    background: skyblue;

    &:hover{
      color: white;
      background: slategray;
    }
  }

.update-btn{
  cursor: pointer;
  margin-top: 15px;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  background: rgb(95, 250, 173);

  &:hover{
    background: skyblue;
  }
}
</style>
