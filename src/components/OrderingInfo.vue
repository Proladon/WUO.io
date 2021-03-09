<template>
   <div id="ordering-info">
       <h2>訂單明細</h2>
       <p>{{orderData.name}}</p>
        <p>{{orderData.create}}</p>
        <img id="qrcode-img" v-if="orderData.name !== 'None'" :src="'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://proladon.github.io/WUO.io/%23/search/' + refKey.trim()" alt="">
        <hr>
      <div class="ordering-item" v-for="(ordering, index) in orderData.orderings" :key="ordering">
          <p><strong>{{ordering.username}}</strong></p>
          <span>{{ordering.ordering}}</span>
          <br>
          <span class="notice">備註: {{ordering.ps}}</span>
          <span class="delete" @click="removeOrdering(index)">×</span>
      </div>
   </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import db from '../db'
   export default defineComponent({
       name: 'OrderingInfo',
       props: ['orderData', 'refKey'],
       setup(props){

           const removeOrdering = (index: number): void => {
               const remove = confirm('確定刪除此筆訂購嗎')
               if(remove){
                   const orderRef = db.database().ref('orders/'+ props.refKey.trim())
                   const data = props.orderData.orderings
                   data.splice(index, 1)
                   orderRef.update({orderings: data})
               }
           }
           return{
               removeOrdering,
           }
       }
   })
</script>

<style scoped lang="scss">
    #ordering-info {
        position: relative;
        margin-top: 20px;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 5px 5px 12px 5px slategray;
        background: white;

        #qrcode-img{
            position: absolute;
            top: 55px;
            right: 30px;
            max-width: 70px; 
        }
        
    }

    .ordering-item{
        position: relative;
        margin-bottom: 20px;

        >p{
            margin-bottom: 3px;
        }

        .delete{
            cursor: pointer;
            position: absolute;
            text-align: center;
            width: 30px;
            height: 30px;
            top: 0;
            right: 0;

            
        }


    }

    .notice{
        color: slategray;
    }
</style>