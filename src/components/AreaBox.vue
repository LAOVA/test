<template>
  <div id="chart_Area"></div>
</template>

<script setup lang='ts'>
import { onMounted, reactive } from 'vue'
import * as echarts from 'echarts'

const props = defineProps(["content"])
const content = reactive(props.content)

onMounted(() => {
  initChart()
})
const initChart = () => {
  const chart_Area = echarts.init(document.getElementById('chart_Area') as HTMLCanvasElement)
  chart_Area.setOption(
    {
      title: [
        {
          text: content.text,
          textStyle: {
            color: '#4c81dd',
            fontSize: 14
          },
          left: "20%"
        },
        {
          subtext: content.subText,
          subtextStyle: {
            color: '#ffffff',
            fontSize: 13
          },
          top: "-5%",
          left: "70%"
        }

      ],
      grid: {
        top: '16%',
        bottom: '1%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: content.value.X,
        axisLine: {
          lineStyle: {
            color: "#87a0b9",
          }
        }

      },
      yAxis: {
        type: 'value',
        splitLine: { //网格线
          lineStyle: {
            type: 'dashed',
            color: '#87a0b9'
          },
        },
        axisLine: {
          lineStyle: {
            color: "#87a0b9",
          }
        }
      },
      series: [
        {
          data: content.value.Y,
          type: 'line',
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#67387c'  // 100% 处的颜色
              }, {
                offset: 1, color: '#0f455c' //   0% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
          lineStyle: {
            color: '#7e5493'
          }

        }
      ]
    }
  )
}

</script>

<style scoped lang='scss'>
#chart_Area {
  width: 100%;
  height: 180px;
}
</style>