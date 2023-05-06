<template>
  <div class="card">
    <div class="tittle"><i></i>{{ title }}</div>
    <slot name="context"></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps(["title"])
const title = ref(props.title)
</script>

<style scoped lang='scss'>
.card {
  display: flex;
  flex-direction: column;
  align-items: start;
  height: auto;
  width: 100%;
  margin-top: 10px;
  padding: 14px 0 0;
  box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, 0.1);

  .tittle {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #7d9fff;

    i {
      display: inline-block;
      margin: 0 20px;
      width: 24px;
      height: 24px;
      background: url('../assets/png/img/titleImg.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>