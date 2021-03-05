<template>
  <h4>{{title}}</h4>
  <div class="order-menu">
    <div class="order-menu-container"
      v-for="(ordering, index) in OrderMenu.items"
      :key="ordering.username"
    >
      <!-- <input type="text" :value="ordering.username" placeholder="姓名"> -->
      <input  type="text" placeholder="姓名">
      <textarea  cols="30" rows="2" placeholder="訂購品"></textarea>
      <textarea  cols="30" rows="2" placeholder="備註"></textarea>
      <span @click="deleteItem(index)">X</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'OrderMenu',
  props:['title'],
  setup(){
    
    interface OrderMenu{
      items: Array<Ordering>;
    }

    interface Ordering{
      username: string;
      ordering: string;
      ps: string;
    }

    const OrderMenu: OrderMenu = reactive({
      items: []
    })

    const deleteItem = (index: number): void => {
      OrderMenu.items.splice(index, 1)
    }

    return {
      OrderMenu,
      deleteItem,
    }
  }
});
</script>

<style scoped lang="scss">
textarea{
  // width: 100px;
  border: none;
  vertical-align: top;
  resize: vertical;
}
</style>
