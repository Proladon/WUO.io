<template>
  <div class="about">
    <h1>📜 關於</h1>

    <div class="block">
      <!-- <icons class="icon" name="dev" size="30px" color="slategray" /> -->
      <p><a href="https://github.com/Proladon" target="_blank">Proladon</a></p>

    </div>

    <div class="block">
      <!-- <icons class="icon" name="github" size="30px" color="slategray" /> -->
      <p>
        <a href="https://github.com/Proladon/WUO.io">
          https://github.com/Proladon/WUO.io
        </a>
      </p>
    </div>

    
    <div class="block">
      <p class="title">贊助 Sponsor</p>
      <p class="content">如果覺得此應用不錯的話，就發射點銀彈吧 (๑•̀ㅂ•́)و✧ !</p>

      <a href="https://www.buymeacoffee.com/Proladon"><img
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=Proladon&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff"></a>
    </div>

  </div>
</template>

<script lang="ts">
// import icons from "v-svg-icons";
import { defineComponent} from 'vue';


export default defineComponent({
  name: 'About',
  // components:{icons},

});
</script>

<style lang="scss" scoped>
#about{
  
}

p{
  &.content{
    color: slategray;
    font-size: 16px;
  }

  &.title{
    font-size: 30px;
  }

}

.block{
  margin-bottom: 20px;
  font-size: 20px;
  align-items: center;
  @include flexVertical();
  p{
    margin-top: 7px;
    margin-bottom: 7px;
  }
  a{
    font-weight: 500;
    color: skyblue;
  }

  .icon{
    margin-right: 10px;
  }
}
</style>

