<template>
  <div class="about">
    <h1>📜 關於</h1>

    <div class="block">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
      </svg>
      <p><a href="https://github.com/Proladon" target="_blank">Proladon</a></p>
    </div>

    <div class="block">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
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
import { defineComponent} from 'vue';


export default defineComponent({
  name: 'About',

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
    font-size: 25px;
  }

}

.profile{
  @include flexHorizontal();
}

.block{
  margin-bottom: 15px;
  font-size: 15px;
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

