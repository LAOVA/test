<template>
  <div class="pie-box">
    <div id="chart_pie"></div>
    <div class="pie-right-box">
      <div class="switch-box" v-if="isSwitch">覆盖区域显示&nbsp;<van-switch v-model="checked" size="18px" active-color="#0f9087"
          inactive-color="#32375f" /></div>
      <div class="name" v-for="item in content" :key="item.name">
        <div>{{ item.name }}：{{ item.value }}%</div>
        <div class="pie-line" :style="{ width: item.value + '%' }">{{ item.value }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, reactive } from 'vue'
import * as echarts from 'echarts'

const checked = ref<boolean>(false);
const props = defineProps(["content", "isSwitch", "pieData"])
const content = reactive(props.content)
if (props.isSwitch) {
  const isSwitch = ref(props.isSwitch)
}
const pieData = reactive(props.pieData)

onMounted(() => {
  initChart()
})

const initChart = () => {

  const chartData = reactive({
    title: [
      {
        text: pieData.name,
        textStyle: {
          fontSize: 13,
          color: "#5798c2",
          fontWeight: 'bold',
        },

        textAlign: "center",
        left: '48%',
        top: '34%',
      },
      {
        subtext: pieData.value + '%',
        subtextStyle: {
          fontSize: 16,
          color: "#27ddcb",
          fontWeight: 'bolder',
        },
        left: '38%',
        top: '40%',

      }

    ],
    color: [{
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
        offset: 0,
        color: '#247196'
      },
      {
        offset: 0.5,
        color: '#247196'
      },
      {
        offset: 1,
        color: '#4bf3f7'
      }],
      globalCoord: false
    }, 'transparent'],
    series: [{
      name: '完成',
      type: 'pie',
      radius: ['60%',
        '88%'],
      left: '0%',
      top: '-10%',
      avoidLabelOverlap: false,
      startAngle: pieData.value / 100 * 360 / 2 - 90,
      data: [pieData.value,
      100 - pieData.value],

      label: {
        show: false
      }
    }]
  })
  const chart_pie = echarts.init(document.getElementById('chart_pie') as HTMLCanvasElement)
  chart_pie.setOption(<Object>chartData)
}
</script>

<style scoped lang='scss'>
.pie-box {
  width: 100%;
  display: flex;
  padding: 0 20px;

  #chart_pie {
    width: 50%;
    height: 110px;
  }

  .pie-right-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    width: 50%;
    color: #fff;

    .switch-box {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .name {
      margin-top: 4px;
    }

    .pie-line {
      height: 16px;
      background-color: #0f9087;
      margin: 2px 0;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
    }
  }
}
</style>