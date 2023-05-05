<template>
    <div class="layout">
        <div class="left">
            <div class="left-top">
                <div class="tittle"><i></i>安防概况</div>
                <div class="contain">
                    <div class="numBox">
                        <img src="../assets/png/img/title.png" />
                        <div class="box">业主人数</div>
                        2318
                    </div>
                    <div class="numBox">
                        <div class="title">
                            当前社区总人数
                            <h2>12530</h2>
                        </div>

                        <div class="box">访客人数</div>
                        880
                    </div>
                    <div class="numBox">
                        <div style="height: 72px">
                            <span class="title">黑名单</span>
                            <h2 style="background-color: transparent">174</h2>
                        </div>

                        <div class="box">外来人数</div>
                        174
                    </div>
                </div>
            </div>
            <div class="left-bottom">
                <div class="tittle"><i></i>报警讯息列表</div>
                <div class="contain">
                    <ul>
                        <li>
                            <div class="jiankong">
                                <div class="jkName">监控1：大西门</div>
                                <div class="tips">待派遣</div>
                            </div>
                            <div class="time">07:12:18</div>
                        </li>
                        <li>
                            <div class="jiankong">
                                <div class="jkName">监控1：大西门</div>
                                <div class="tips">待派遣</div>
                            </div>
                            <div class="time">07:12:18</div>
                        </li>
                        <li>
                            <div class="jiankong">
                                <div class="jkName">监控1：大西门</div>
                                <div class="tips">待派遣</div>
                            </div>
                            <div class="time">07:12:18</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        first
        <div class="right">
            <div id="chart"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { onMounted } from 'vue'
import * as echarts from 'echarts'
onMounted(() => {
    const Chart = echarts.init(document.getElementById('#chart') as HTMLCanvasElement)
    Chart.setOption({
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    })
})
</script>

<style lang="scss">
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

    .contain {
        width: 100%;
        display: flex;
        justify-content: space-around;
        .numBox {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 1;
            height: 150px;
            padding: 16px;
            padding-bottom: 0;
            color: #8cceff;

            img {
                width: 70px;
                height: 72px;
            }

            .box {
                padding: 0 10px;
                color: #fff;
                font-size: 14px;
                // background: linear-gradient(rbg(21, 123, 165), rbg(78, 74, 157));
                background: linear-gradient(to right, #137da5, #4b4d9d);
            }

            .title {
                height: 72px;
                font-size: 14px;
            }

            &:nth-child(2) {
                padding: 16px 0;
                padding-bottom: 0;
            }

            h2 {
                margin: 0;
                font-size: 30px;
            }

            span {
                background-color: #343651;
                height: auto;
                padding: 6px;
            }
        }
    }
}

.left-bottom {
    margin-top: 10px;
    ul {
        padding: 20px;
        width: 100%;
        li {
            border-left: 14px solid #137da5;
            color: #cccccc;
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
                }
            }
            .time {
                padding-left: 16px;
                margin-top: 4px;
                text-align: start;
            }
        }
    }
}

.right {
    #chart {
        width: 100%;
        height: 400px;
    }
}
</style>
