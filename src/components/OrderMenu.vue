<template>
  <h4>{{title}}</h4>
  <div class="order-menu">
    <div class="order-menu-container"
      v-for="(ordering, index) in OrderMenu.items"
      :key="ordering.username"
    >
      <input type="text" :value="ordering.username" placeholder="姓名">
      <!-- <textarea  cols="30" rows="2">餐點</textarea> -->
      <input type="text" placeholder="餐點">
      <input type="text" placeholder="備註">
      <input type="text" placeholder="備註" disabled>
      <span @click="deleteItem(index)">X</span>
    </div>
    <div class="btn" @click="addNew">+ Add New</div>
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

    const addNew = (): void => {
      const ordering = {
        username: '',
        ordering: '',
        ps: '',
      }
      OrderMenu.items.push(ordering)
    }

    const deleteItem = (index: number): void => {
      OrderMenu.items.splice(index, 1)
    }

    return {
      OrderMenu,
      deleteItem,
      addNew,
    }
  }
});
</script>

<style scoped lang="scss">
input, textarea{
  border: none;
}
</style>
