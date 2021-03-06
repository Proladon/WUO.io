<template>
  <div id="create">
    
    <div class="quick-order" v-if="refKey === '' ">
      <h2>訂單建立</h2>
      <input type="text" v-model="orderName" placeholder="訂單名稱">

      <p><strong>建立快速選項</strong></p>

      <div class="input-container">
        <input type="text" 
          v-model="optionInput" 
          placeholder="品項名稱"
          @keypress.enter="addOption"
        >
        <div class="add-btn" @click="addOption">新增</div>
      </div>
      
      <div class="ordering-options" 
        v-for="(option, index) in orderOptions.options" :key="option">
        <p>{{option}} </p>
        <span class="remove-btn" @click="removeOption(index)">×</span>
      </div>
      
      <div class="create-btn" @click="createOrder">創建訂單</div>
    </div>

    <div class="share" v-if="refKey !== '' ">
      <img :src="qrcodeUrl">

      <div class="copy-btn">📑 複製連結</div>
      <p class="link-btn" @click="$router.push('/search/'+refKey)"><strong>前往訂單 ></strong></p>

    </div>
  
  </div>
</template>

<script lang="ts">
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent, reactive, ref } from 'vue';
import { useToast } from "vue-toastification";
import db from '../db'

export default defineComponent({
  name: 'Create',
  setup(){
    const toast = useToast();
    const orderName = ref<string>('')
    const optionInput = ref<string>('')
    const orderOptions = reactive({
      options: Array<string>()
    })
    
    const refKey = ref<string>('')
    const qrcodeUrl =ref<string>('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif')
    
    const ordersRef = db.database().ref('orders')


    const createOrder = (): void => {
      if(orderName.value.trim() === ''){
        toast.error('請輸入訂單名稱')
        return
      }

      const newOrder = {
        id:'',
        name: orderName.value,
        create: (new Date()).toString(),
        options: orderOptions.options,
      }

      const order = ordersRef.push(newOrder)
      
      refKey.value = (order.key as string);

      const base = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://proladon.github.io/WUO.io/%23/search/'
      qrcodeUrl.value =  base + refKey.value
    }

    const addOption = (): void => {
      const option = optionInput.value.trim()
      if(orderOptions.options.includes(option)) toast.warning('品項已存在')
      if (option !== '' && !orderOptions.options.includes(option)) {
        orderOptions.options.push(option)
        optionInput.value = ''
      }
    }

    const removeOption = (index: number): void => {
      orderOptions.options.splice(index, 1)
    }




    return{
      qrcodeUrl,
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
#create{
  @include shadow();
}

iframe{
  border: none;
}

.quick-order {
  @include flexVertical($wrap:wrap);
  p{
    margin-bottom: 5px;
  }

  input{
    display: inline-block;
    width: 50%;
    padding: 10px;
  }
}

.input-container{
  @include flexHorizontal();
  .add-btn{
    cursor: pointer;
    color: white;
    border-radius: 5px;
    margin-left: 10px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background: slategray;

    &:hover{
      color: slategray;
      background: skyblue;
    }
  }
}

.share{
  justify-content: center;
  align-items: center;
  @include flexVertical();

  >img{
    max-width: 300px;
  }


  .copy-btn, .link-btn{
    cursor: pointer;
    text-align: center;
    color: white;
    width: 150px;
    padding: 10px;
    margin-top: 30px;
    background: slategray;
  }
  .link-btn{
    color: slategrey;
    background: rgb(95, 250, 173);
  }
  .copy-btn:active{
    color: slategray;
    background:skyblue;
  }
  .link-btn:active{
    color: slategray;
    background:skyblue;
  }
}

.create-btn{
  cursor: pointer;
  margin-top: 30px;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  background: rgb(95, 250, 173);

  &:hover{
    color: white;  
    background: slategray;
  }
}

.ordering-options{
  margin-top: 10px;
  >p{
    margin: 0;
  }
  justify-content: space-between;
  align-items: center;
  @include flexHorizontal();
}

.remove-btn{
  cursor: pointer;
  margin-left: 10px;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  background: rgb(240, 97, 123);
}
</style>
