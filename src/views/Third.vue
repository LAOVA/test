<template>
  <div class="left">
    <Card :title="title[0]">
      <template #context>
        <div class="contain">
          <div class="top-con" style="justify-content: start;">
            <img src="../assets/png/img/title.png" />

            <div class="title" style="margin-left: 20px;">
              当前社区总人数
              <h2>12530</h2>
            </div>
          </div>
          <NumBox :content="content1"></NumBox>
        </div>
      </template>
    </Card>
    <Card :title="title[1]">
      <template #context>
        <div class="Third-left-box">
          <div class="video">
            <div class="video-item" v-for="i in 3" :key="i">
              <video src="../assets/png/img/videoDemo.mp4" width="110" controls></video>
              星关广场云台
            </div>
          </div>
        </div>
      </template>
    </Card>
    <Card :title="title[2]">
      <template #context>
        <div class="contain flex-box">
          <ul>
            <li v-for="i in 6" :key="i">
              <div class="jiankong">
                <div class="jkName">监控1：大西门</div>
                <div class="tips"></div>
              </div>
              <div class="time">07:12:18</div>
            </li>
          </ul>
          <div class="line"></div>
        </div>
      </template>
    </Card>
  </div>
  <div class="right">
    <Card :title="title[3]">
      <template #context>
        <PieBox :content="content2" :pieData="pieData"></PieBox>
      </template>
    </Card>
    <Card :title="title[4]">
      <template #context>
        <div class="dataBox">
          <div class="data" v-for="items in datas" :key="items.name">
            {{ items.name }}
            <h2>{{ items.value }}</h2>
          </div>
        </div>
      </template>
    </Card>
    <Card :title="title[5]">
      <template #context>
        <AreaBox :content="content3"></AreaBox>
      </template>
    </Card>
    <Card :title="title[6]">
      <template #context>
        <div class="Third-last-box">
          <div class="outBox">
            <div id="chart_ZF">
            </div>
            <div class="Type">
              <span>1#冷站(1#主机)</span>
              <div class="type">
                开启状态
                <span>启动</span>
              </div>
              <div class="type">
                运行状态
                <span>启动</span>
              </div>
            </div>
          </div>
          <ul class="dot">
            <li v-for="i in 4" :key="i"></li>
          </ul>
        </div>
      </template>
    </Card>

  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, reactive } from 'vue'
import * as echarts from 'echarts'
const title = ref(["安防概况", "摄像头视频监控", "报警讯息列表", "舒适度数据统计", "能源数据概况", "系统能效统计", "机主运行情况"])
const datas = ref([
  {
    name: '本月总能耗(单位:kw.h)',
    value: 11787
  },
  {
    name: '本年总能耗(单位:kw.h)',
    value: 210688
  },
  {
    name: '本日总负荷(单位:kw.h)',
    value: 73779
  },
  {
    name: '本年平均能耗(单位:kw.h)',
    value: 10127
  },
  {
    name: '本日总电费(单位:元)',
    value: 5645
  },
  {
    name: '本年总电费(单位:元)',
    value: 203231
  },
])
const content1 = reactive([
  {
    title: '业主人数',
    num: 2318
  },
  {
    title: '访客人数',
    num: 880
  },
  {
    title: '外来人数',
    num: 174
  },
])
const content2 = reactive([
  {
    name: '室内空气',
    value: 32
  },
  {
    name: '室内湿度',
    value: 53.685
  },
])

const pieData = reactive(
  {
    name: '室内温度',
    value: 65
  }
)

const content3 = reactive(
  {
    text: '位数/时',
    subText: '单位：千/kw.h',
    value: {
      X: ["6-27", "6-27", "6-27", "6-27", "6-27", "6-27", "6-27", "6-27", "6-27"],
      Y: [20, 28, 40, 32, 68, 55, 42, 32, 11]
    }
  }
)

onMounted(() => {
  initChart()
})

const initChart = () => {
  const chartData = reactive(
    {
      legend: {
        data: [
          {
            name: '出水温度',
            textStyle: {
              color: '#fff'
            },
            itemStyle: {
              color: '#a207d4'
            }
          },
          {
            name: '进水温度',
            textStyle: {
              color: '#fff'
            },
            itemStyle: {
              color: '#0ca9d9'
            }
          }
        ]
      },
      grid: {
        top: '15%',
        left: '0%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: "#87a0b9",
            }
          },
          splitLine: { //网格线
            lineStyle: {
              type: 'dashed',
              color: '#ccc'
            },
          },
        }
      ],
      yAxis: [
        {
          type: 'category',
          axisTick: {
            show: false
          },
          data: ['蒸发器', '冷凝器'],
          axisLine: {
            lineStyle: {
              color: "#87a0b9",
            }
          }
        }
      ],
      series: [
        {
          name: '出水温度',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            color: '#fff'
          },
          emphasis: {
            focus: 'series'
          },
          data: [
            {
              value: -120,
              itemStyle: {
                color: '#a207d4'
              }
            },
            {
              value: -302,
              itemStyle: {
                color: '#a207d4'
              }
            }],
        },
        {
          name: '进水温度',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            color: '#fff'
          },
          emphasis: {
            focus: 'series'
          },
          data: [
            {
              value: 120,
              itemStyle: {
                color: '#0ca9d9'
              }
            },
            {
              value: 300,
              itemStyle: {
                color: '#0ca9d9'
              }
            }
          ],
          barCategoryGap: '50%'
        }
      ]
    }
  )
  const chart_ZF = echarts.init(document.getElementById('chart_ZF') as HTMLCanvasElement)
  chart_ZF.setOption(<Object>chartData)
}

</script>

<style scoped lang='scss'>
.Third-left-box {
  width: 100%;

  .video {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 2px 20px;
    box-sizing: border-box;

    &::after {
      content: '';
      width: 30%;
      height: 0;
      visibility: hidden;
    }

    .video-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      width: 30%;
      color: #fff;
      text-align: center;

      video {
        background-color: #000;
      }
    }
  }
}

.dataBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  text-align: center;
  color: #fff;

  .data {
    padding-top: 10px;
    width: 50%;

    h2 {
      margin: 0;
      line-height: 26px;
      font-size: 26px;
      font-weight: 400;
      color: #24c0f7;

    }
  }
}

.Third-last-box {
  width: 100%;
  position: relative;

  .outBox {
    width: 100%;
    display: flex;
    padding: 0 10px;

    #chart_ZF {
      width: 72%;
      height: 120px;
    }

    .Type {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 0 4px;
      width: 18%;
      text-align: center;

      span {
        display: inline-block;
        padding: 0 6px;
        box-sizing: border-box;
        text-align: center;
        font-size: 14px;
        color: #fff;
        background-color: #202856;
      }

      .type {
        margin-top: 4px;
        font-size: 14px;
        color: #fff;

        span {
          background-color: #00d6b8;
        }

        ;
      }
    }
  }

  ul {
    position: absolute;
    left: 50%;
    bottom: -5%;
    transform: translateX(-50%);

    li {
      float: left;
      width: 8px;
      height: 8px;
      margin: 0 8px;
      border-radius: 50%;
      background-color: #2e5a88;
      cursor: pointer;

      &:first-child {
        background-color: #409eff;
      }
    }
  }


}
</style>
