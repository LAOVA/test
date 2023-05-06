<template>
    <div class="left">
        <Card :title="title[0]">
            <template #context>
                <div class="contain">
                    <div class="top-con" style="justify-content: start;">
                        <img src="../assets/png/img/title.png" />

                        <div class="title" style="margin-left: 20px;">
                            摄像头总数
                            <h2>53</h2>
                        </div>
                    </div>
                    <NumBox :content="content1"></NumBox>
                </div>
            </template>
        </Card>

        <Card :title="title[1]">
            <template #context>
                <PieBox :content="content2" :isSwitch="isSwitch" :pieData="pieData"></PieBox>
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
                <div class="Second-right-box">
                    <div class="video">
                        <div class="video-item" v-for="i in 8" :key="i">
                            <video src="../assets/png/img/videoDemo.mp4" width="150" controls></video>
                            星关广场云台
                        </div>
                    </div>
                    <div class="line"></div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const title = ref(["摄像头概述总览", "摄像头覆盖占比", "报警讯息列表", "摄像头视频监控"])
const content1 = reactive([
    {
        title: '人脸识别摄像头',
        num: 8
    },
    {
        title: '可控制摄像头',
        num: 20
    },
    {
        title: '故障摄像头',
        num: 2
    },
])
const content2 = reactive([
    {
        name: '人脸识别区域',
        value: 32
    },
    {
        name: '可控摄像头区域',
        value: 53.685
    },
])
const pieData = reactive(
    {
        name: '覆盖区域',
        value: 80
    }
)
const isSwitch = ref(true)

</script>

<style lang="scss">
.Second-right-box {
    display: flex;

    .video {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 92%;
        padding: 20px 4px;

        .video-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 20px;
            width: 150px;
            height: auto;
            color: #fff;
            text-align: center;

            video {
                background-color: #000;
            }
        }
    }
}
</style>
