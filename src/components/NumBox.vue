<template>
  <div class="numBox">
    <div class="item" v-for="item in content" :key="item.title">
      <div class="box">{{ item.title }}</div>
      {{ item.num }}
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
const props = defineProps(["content"])
const content = reactive(props.content)

</script>

<style scoped lang='scss'>
.numBox {
  display: flex;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding-bottom: 0;

    .box {
      padding: 0 4px;
      color: #fff;
      font-size: 14px;
      text-align: center;
      background: linear-gradient(to right, #137da5, #4b4d9d);
    }

    &:nth-child(2) {
      padding: 0 20px;
    }
  }
}
</style>