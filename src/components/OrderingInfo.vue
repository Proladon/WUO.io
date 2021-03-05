<template>
   <div id="ordering-info">
       <h2>訂單明細</h2>
       <p>{{orderData.name}}</p>
        <p>{{orderData.create}}</p>
        <img id="qrcode-img" :src="'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://proladon.github.io/WUO.io/%23/search/' + refKey" alt="">
        <hr>
      <div class="ordering-item" v-for="ordering in orderData.orderings" :key="ordering">
          <p><strong>{{ordering.username}}</strong></p>
          <span>{{ordering.ordering}}</span>
          <br>
          <span class="notice">備註: {{ordering.ps}}</span>
          <span class="delete">×</span>
      </div>
   </div>
</template>

<script>
   export default {
       name: 'OrderingInfo',
       props: ['orderData', 'refKey']
   }
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
            position: absolute;
            text-align: center;
            width: 30px;
            height: 30px;
            top: 0;
            right: 0;

            &:hover{
                border-radius: 5px;
                background: rgb(240, 97, 123);
            }
        }


    }

    .notice{
        color: slategray;
    }
</style>