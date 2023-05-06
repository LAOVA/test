<template>
    <div class="left">
        <Card :title="title[0]">
            <template #context>
                <div class="contain">
                    <div class="top-con">
                        <img src="../assets/png/img/title.png" />

                        <div class="title">
                            当前社区总人数
                            <h2>12530</h2>
                        </div>
                        <div style="height: 72px">
                            <span>黑名单</span>
                            <div style="background-color: transparent; margin-top: 4px;">25</div>
                        </div>
                    </div>
                    <NumBox :content="content"></NumBox>
                </div>
            </template>
        </Card>

        <Card :title="title[1]">
            <template #context>
                <div class="contain flex-box">
                    <ul>
                        <li v-for="i in 9" :key="i">
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
        <Card :title="title[2]">
            <template #context>
                <div class="right-top-box">
                    <img src="../assets/png/img/user.png">
                    <span class="title">近一个月出现黑名单次数</span>
                    <h1>758</h1>
                </div>
            </template>
        </Card>

        <Card :title="title[3]">
            <template #context>
                <div id="chart_zhu"></div>
            </template>
        </Card>
        <Card :title="title[4]">
            <template #context>
                <div id="chart_huan"></div>
            </template>
        </Card>
        <Card :title="title[5]">
            <template #context>
                <AreaBox :content="content2"></AreaBox>
            </template>
        </Card>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue'
import * as echarts from 'echarts'
import yz from '../assets/png/img/yz.png'

const title = ref(["安防概况", "报警讯息列表", "黑名单数据", "超时访客数据", "业主关怀", "报警数据"])
const content = reactive([
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
const content2 = reactive(
    {
        text: '近一个月报警次数',
        subText: '单位：次数/天',
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
    const Chart_zhu = echarts.init(document.getElementById('chart_zhu') as HTMLCanvasElement)
    Chart_zhu.setOption({
        title: {
            text: '近一周访客超时楼栋',
            textStyle: {
                color: '#4c81dd',
                fontSize: 14
            },
            left: 70
        },
        grid: {
            top: '14%',
            bottom: '1%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['6-27', '6-28', '6-29', '6-27', '6-27', '6-27', '6-27']
        },
        yAxis: {
            type: 'value',
            splitLine: { //网格线
                lineStyle: {
                    type: 'dashed',
                    color: '#ccc'
                },
            },
        },
        series: [
            {
                data: [
                    10,
                    {
                        value: 50,
                        itemStyle: {
                            color: '#38d9d0'
                        }
                    },
                    190,
                    {
                        value: 320,
                        itemStyle: {
                            color: '#38d9d0'
                        }
                    },
                    390,
                    {
                        value: 330,
                        itemStyle: {
                            color: '#38d9d0'
                        }
                    },
                    220
                ],
                type: 'bar'
            }
        ]
    })


    const Chart_huan = echarts.init(document.getElementById('chart_huan') as HTMLCanvasElement)
    const chartData = reactive({
        title: [
            {
                text: '业主关怀',
                textStyle: {
                    fontSize: 13,
                    color: "#5798c2",
                    fontWeight: 'normal',
                },

                textAlign: "center",
                left: '34%',
                top: '30%',
            },
            {
                subtext: '{a|}',
                subtextStyle: {
                    rich: {
                        "a": {
                            backgroundColor: {
                                image: yz
                            },
                            height: 25,
                            width: 25,
                        }
                    }
                },
                left: '31%',
                top: '40%',

            }

        ],
        tooltip: {
            trigger: 'item',
            formatter: function (parms) {
                // var str =  parms.seriesName+"</br>"+
                var str = parms.marker + "" + parms.data.legendname + "</br>" +
                    "数量：" + parms.data.value + " 个</br>" +
                    "占比：" + parms.percent + "%";
                return str;
            }
        },
        legend: {
            orient: 'vertical',
            left: '58%',
            align: 'left',
            top: 'middle',
            textStyle: {
                color: '#fff'
            },
            height: 90
        },
        series: [
            {
                type: 'pie',
                center: ['35%', '50%'],
                radius: ['65%', '90%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 10, legendname: '长期空置', name: "长期空置", itemStyle: { color: "#5e63fb" } },
                    { value: 20, legendname: '长期未外出', name: "长期未外出", itemStyle: { color: "#41e8d7" } },
                    { value: 30, legendname: '小孩独自出门超时', name: "小孩独自出门超时", itemStyle: { color: "#aa5ce7" } },
                    { value: 40, legendname: '老人独自出门超时', name: "老人独自出门超时", itemStyle: { color: "#a0ea66" } },
                ]
            }
        ]
    });
    Chart_huan.setOption(<Object>chartData)
}
</script>


<style lang="scss">
#chart_zhu {
    width: 100%;
    height: 180px;
}

#chart_huan {
    width: 100%;
    height: 120px;
}
</style>
