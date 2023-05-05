<template>
    <div class="main">
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
                                <span class="title">黑名单</span>
                                <div style="background-color: transparent; margin-top: 4px;">25</div>
                            </div>
                        </div>
                        <div class="Box">
                            <div class="numBox">
                                <div class="box">业主人数</div>
                                2318
                            </div>
                            <div class="numBox">
                                <div class="box">访客人数</div>
                                880
                            </div>
                            <div class="numBox">
                                <div class="box">外来人数</div>
                                174
                            </div>
                        </div>
                    </div>
                </template>
            </Card>

            <Card :title="title[1]">
                <template #context>
                    <div class="contain">
                        <ul>
                            <li v-for="i in 9" :key="i">
                                <div class="jiankong">
                                    <div class="jkName">监控1：大西门</div>
                                    <div class="tips"></div>
                                </div>
                                <div class="time">07:12:18</div>
                            </li>
                        </ul>
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
                    <div id="chart_1"></div>
                </template>
            </Card>
            <Card :title="title[4]">
                <template #context>
                    <div id="chart_2"></div>
                </template>
            </Card>
            <Card :title="title[5]">
                <template #context>
                    <div id="chart_3"></div>
                </template>
            </Card>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const title = ref(["安防概况", "报警讯息列表", "黑名单数据", "超时访客数据", "业主关怀", "报警数据"])


onMounted(() => {
    initChart()
})


const initChart = () => {
    const Chart_1 = echarts.init(document.getElementById('chart_1') as HTMLCanvasElement)
    Chart_1.setOption({
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
                        value: 30,
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

    const Chart_2 = echarts.init(document.getElementById('chart_2') as HTMLCanvasElement)
    Chart_2.setOption(
        {}
    )

    const Chart_3 = echarts.init(document.getElementById('chart_3') as HTMLCanvasElement)
    Chart_3.setOption(
        {
            title: {
                text: '近一个月报警次数',
                textStyle: {
                    color: '#4c81dd',
                    fontSize: 14
                },
                left: 70
            },
            grid: {
                top: '16%',
                bottom: '1%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['6-27', '6-27', '6-27', '6-27', '6-27', '6-27', '6-27', '6-27', '6-27']
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
                    data: [20, 28, 40, 32, 68, 55, 42, 32, 11],
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

<style lang="scss">
.main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

.left,
.right {
    width: 380px;
    padding: 40px 0 80px 0;
}

.left-top,
.left-bottom {
    display: flex;
    flex-direction: column;
    align-items: start;
    height: auto;
    width: 100%;
    padding: 14px 0;
    box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, 0.1);

    .tittle {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: rgb(125, 121, 165);

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

.contain {
    color: #8cceff;
    text-align: center;
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;

    .top-con {
        display: flex;
        justify-content: space-between;
        padding: 16px 0;

        h2 {
            margin: 0;
            font-size: 30px;
        }
    }

    .Box {
        display: flex;

        .numBox {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1;
            padding-bottom: 0;

            img {
                width: 70px;
                height: 70px;
            }

            .box {
                padding: 0 4px;
                color: #fff;
                font-size: 14px;
                text-align: center;
                // background: linear-gradient(rbg(21, 123, 165), rbg(78, 74, 157));
                background: linear-gradient(to right, #137da5, #4b4d9d);
            }

            .title {
                height: 72px;
                font-size: 14px;
            }

            &:nth-child(2) {
                padding: 0 30px;
            }
        }
    }



    ul {
        padding: 20px;
        width: 100%;
        box-sizing: border-box;



        li {
            border-left: 14px solid #11467c;
            color: #fff;
            width: 100%;
            margin-bottom: 4px;

            .jiankong {
                display: flex;
                justify-content: space-between;
                padding: 4px 16px;
                background-color: rgba(0, 0, 0, 0.3);

                .jkName,
                .tips {
                    display: inline-block;
                }

                .tips {
                    padding: 0 4px;
                    border-radius: 4px;
                    background-color: #673ab7;
                    font-size: 14px;

                    &::after {
                        content: "待派遣";
                    }
                }
            }

            .time {
                padding-left: 16px;
                margin-top: 4px;
                text-align: start;
            }

            &:nth-child(2n) {
                .tips {
                    background-color: #409eff;

                    &::after {
                        content: "已派遣";
                    }
                }
            }
        }
    }
}

.left-bottom {
    margin-top: 10px;
}

.right {

    .right-top-box {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        padding: 14px 12px 0;
        color: #fff;
        box-sizing: border-box;

        h1 {
            font-weight: 400;
            color: #25c7ff;
            margin: 0
        }
    }

    #chart_1 {
        width: 100%;
        height: 180px;
    }

    #chart_2 {
        width: 100%;
        height: 120px;
    }

    #chart_3 {
        width: 100%;
        height: 180px;
    }
}

span {
    background-color: #343651;
    height: auto;
    padding: 6px;
}
</style>
