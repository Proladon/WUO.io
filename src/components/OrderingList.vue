<template>
  <div class="ordering-list">
    <div class="ordering-container"
      v-for="ordering in orderingList.orderings"
      :key="ordering.username"
    >
      <input type="text" :value="ordering.username" placeholder="姓名">
      <input type="text" placeholder="餐點">
      <input type="text" placeholder="備註">
      <input type="text" placeholder="備註" disabled>
    </div>
    <div class="btn" @click="addNew">+ Add New</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'OrderingList',
  setup(){
    
    interface OrderingList{
      orderings: Array<Ordering>;
    }

    interface Ordering{
      username: string;
      ordering: string;
      ps: string;
    }

    const orderingList: OrderingList = reactive({
      orderings: []
    })

    const addNew = (): void => {
      const ordering = {
        username: '',
        ordering: '',
        ps: '',
      }
      orderingList.orderings.push(ordering)
    }

    return {
      orderingList,
      addNew,
    }
  }
});
</script>

<style scoped lang="scss">

</style>
