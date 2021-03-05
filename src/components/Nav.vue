<template>
  <div id="nav">
    <router-link class="nav-btn" to="/create"><span>⚡ 快速建立訂單</span></router-link>
    <router-link class="nav-btn" to="/search"><span>🔎 搜尋訂單</span></router-link>
    <router-link class="nav-btn" to="/guide"><span>📘 使用指南</span></router-link>
    <router-link class="nav-btn" to="/about"><span>📜 關於</span></router-link>
  </div>
</template>

<style lang="scss" scoped>
#nav{
    justify-content: center;
    text-align: center;
  @include flexHorizontal($wrap: wrap);
}

.nav-btn{
    color: slategrey;
    box-sizing: border-box;
    border: slategray solid 1px;
    padding: 20px;
    box-sizing: border-box;
    text-decoration: none;
    width:49%;
  }

</style>
