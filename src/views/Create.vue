<template>
  <div id="create">

    <div class="quick-order" v-if="refKey === '' ">
      <h2>訂單建立</h2>
      <input class="std-input" type="text" v-model="orderName" placeholder="訂單名稱">


      <p><strong>建立快速選項</strong></p>
      <div class="input-container">
        <input class="std-input" type="text" v-model="optionInput" placeholder="品項名稱" @keypress.enter="addOption">
        <div class="add-btn" @click="addOption">新增</div>
      </div>

      <div class="ordering-options" v-for="(option, index) in orderOptions.options" :key="option">
        <p>{{option}} </p>
        <span class="remove-btn" @click="removeOption(index)">×</span>
      </div>
      
      <hr>

      <p v-if="customImg !== '' " class="cancel-upload" @click="cancelImg"><strong>取消圖片</strong></p>
      <label for="image-upload">
        <p v-if="customImg === '' "><strong>上傳圖片</strong></p>
        <input type="file"  id="image-upload" @change="uploadImg($event)">
      </label>
      <img class="custom-Img" :src="customImg">
      

      <p class="warn"><strong>注意: 訂單創建24小時後將自動刪除</strong></p>

      <div class="create-btn" @click="createOrder"><strong>創建訂單</strong></div>
    </div>

    <!-- After Create -->
    <div class="share" v-if="refKey !== '' ">
      <h2>分享訂單</h2>
      <img :src="qrcodeUrl">

      <div class="copy-btn" @click="copyToClipboard('key')">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
          <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
        </svg>
        複製訂單編號
      </div>

      <div class="copy-btn" @click="copyToClipboard('link')">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
          <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
        </svg>
        複製連結
      </div>
      <p class="link-btn" @click="$router.push('/search/'+refKey.trim())"><strong>前往訂單 ></strong></p>
    </div>
  
  </div>


    <div class="recent-ordering-container">
      <h2 align="center">最近建立的訂單</h2>
      <div class="recent-ordering-item" v-for="(ordering, index) in recent" :key="ordering.name">
        <div class="delete-btn" @click="deleteRecnt(index)"><span>×</span></div>
        <p><strong>名稱: </strong>{{ordering.name}}</p>
        <p><strong>編號: </strong>{{ordering.key}} <span class="copy-btn" @click="copyKey(ordering.key)">複製</span></p>
      </div>
    </div>

</template>

<script lang="ts">
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent, reactive, ref, computed } from 'vue';
import { useToast } from "vue-toastification";
import { useStore } from 'vuex'
import copy from 'copy-to-clipboard'
import db from '../db'
import axios from 'axios'



export default defineComponent({
  name: 'Create',
  setup(){
    const store = useStore()
    const recent = computed(()=>{
      return store.state.recent
    })
    const customImg = ref<string>('')
    const toast = useToast()
    const orderName = ref<string>('')
    const optionInput = ref<string>('')
    const orderOptions = reactive({
      options: Array<string>()
    })
    
    const refKey = ref<string>('')
    const qrcodeUrl =ref<string>('')
    
    const ordersRef = db.database().ref('orders')


    const createOrder = (): void => {
      if(orderName.value.trim() === ''){
        toast.error('請輸入訂單名稱')
        return
      }

      const newOrder = {
        name: orderName.value,
        create: (new Date()).toString(),
        image: '',
        options: orderOptions.options,
      }

      const pushDB = ()=>{
        const order = ordersRef.push(newOrder)
        refKey.value = (order.key as string);
  
        const base = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://proladon.github.io/WUO.io/%23/search/'
        
        qrcodeUrl.value = require('../assets/loading.gif')
        axios.get(base + refKey.value).then((res: any)=>{
          qrcodeUrl.value =  res.config.url
        })
  
        store.commit('ADD_RECENT', {
          name: newOrder.name,
          key: refKey.value
        })
      }
      
      const upload = (document.getElementById('image-upload') as any)
      
      if(customImg.value !== ''){
        const formData = new FormData();
        formData.append("image", upload.files[0]);
        axios.post('https://api.imgbb.com/1/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            params:{
              key:'56ba44899d75f86a7bf2ef5d371b0093',
              expiration: 86400
            }
        })
        .then(res=>{
          newOrder.image = res.data.data.display_url
          pushDB()
        })
        .catch(error=>{
          toast.error(error)
        })
      }
      else{
        pushDB()
      }
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
    

    const copyToClipboard = (type: string): void => {
      if(type === 'link'){
        copy('https://proladon.github.io/WUO.io/#/search/' + refKey.value)
      }
      else if (type === 'key'){
        copy(refKey.value)
      }
      toast.success("已複製到剪貼簿")
    }


    const deleteRecnt = (index: number): void => {
      store.commit('REMOVE_RECENT', index)
      store.commit('UPDATE_RECENT')
    }

    const copyKey = (key: string): void => {
      copy(key)
      toast.success('已複製訂單編號')
    }

    const uploadImg = async (e: Event | any) =>{
      const file = e.target.files[0]
      if(file){
        const toBase64 = (file: File) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })
        customImg.value = await toBase64(file) as string
      }
    }

    const cancelImg = (): void => {
      customImg.value = ''
    }

    return{
      recent,
      customImg,
      qrcodeUrl,
      orderName,
      refKey,
      createOrder,
      optionInput,
      orderOptions,
      addOption,
      removeOption,
      copyToClipboard,
      copyKey,
      deleteRecnt,
      uploadImg,
      cancelImg,
    }
  }
});
</script>

<style lang="scss" scoped>

hr{
  height: 0.5px;
  background: slategray;
  width: 100%;
}

label > p, .cancel-upload{
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  border: solid 1px slategray;

  &:hover{
    color: white;
    background: slategray;
  }
}

#image-upload{
  border: none;
  display: none;
}

.custom-Img{
  width: 100%;
}


#create{
  @include shadow();
}
.icon{
  margin-right: 10px;
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

  h2{
    color: slategray;
  }
  >img{
    max-width: 300px;
  }


  .copy-btn, .link-btn{
    @include flexHorizontal($wrap: nowrap);
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    color: white;
    width: 150px;
    padding: 10px;
    margin-top: 30px;
    background: slategray;
  }
  .copy-btn:active{
    color: slategray;
    background:skyblue;
  }

  .link-btn{
    color: slategrey;
    background: rgb(95, 250, 173);
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

.recent-ordering-item{
  position: relative;
  @include shadow();

  p{
    word-break: break-word;
  }
}

.delete-btn{
  justify-content: center;
  align-items: center;
  @include flexHorizontal();
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
}

.copy-btn{
  cursor: pointer;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-left: 5px;
  border-radius: 5px;
  border: solid 1px slategray;

  >.bi-link-45deg{
    margin-right: 5px;
  }
}

.warn{
  text-align: center;
  color: rgb(255, 105, 125);
  font-size: 14px;
}
</style>
