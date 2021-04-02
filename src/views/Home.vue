<template>
  <div class="home">
    <div class="block">
      <h1>Hello !</h1>
      <p>WUO.io 是一個線上即時團體點餐系統</p>
      <p>你可以創建一個即時訂單，並分享給你的夥伴們，如此夥伴們就可以同時點餐並即時統計品項囉!</p>
    </div>
    
    <hr>
    <div class="block">
      <h2>🔨 WIP</h2>
      
      <h4>私人訂單</h4>
      <ul>
        <li>✅ 使用者註冊、登入</li>
        <li>建立私人訂單</li>
        <li>私人訂單管理權限</li>
      </ul>
      <h4>一般訂單</h4>
      <ul>
        <li>是否允許使用者自定義輸入訂購內容</li>
        <li>快速選項 - 數量選擇</li>
      </ul>
      
      <hr>

      <h2>🔄 Update</h2>

      <h4>2021/03/10</h4>
      <ul>
        <li>創建訂單時，可上傳圖片</li>
        <li>訂單生命週期 (訂單創建後24小時會自動刪除)</li>
      </ul>

      <h4>2021/03/09</h4>
      <ul>
        <li>本地端紀錄使用者最近創建的訂單，方便記憶訂單編號</li>
        <li>Bug fix - 修正 IOS/MacOS Safari 無法正常顯示頁面</li>
      </ul>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';


export default defineComponent({
  name: 'Home',
})

</script>

<style lang="scss" scoped>
*{
  color: slategray;
}

p{
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;

  &.sub-title{
    font-size: 24px;
  }
}

li{
  margin-bottom: 5px;
}

.block{
  margin-bottom: 20px;
}

.nav-btn{
  color: skyblue;
}
</style>
