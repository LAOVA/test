<template>
    <div class="layout">
        <div class="bottom">
            <ul>
                <li class="parallelogram" :class="{ isActive: index === 1 }" @click="to(1)">
                    <div class=" recover"><router-link to="/first">社区管理</router-link>
                    </div>
                </li>
                <li class="parallelogram" :class="{ isActive: index === 2 }" @click="to(2)">
                    <div class="recover"><router-link to="/second">安保监控</router-link></div>
                </li>
                <li class="parallelogram" :class="{ isActive: index === 3 }" @click="to(3)">
                    <div class="recover"><router-link to="/third">CIM平台</router-link></div>
                </li>
                <li class="parallelogram" :class="{ isActive: index === 4 }" @click="to(4)">
                    <div class="recover"><router-link to="/fourth">能源检测</router-link></div>
                </li>
                <li class="parallelogram" :class="{ isActive: index === 5 }" @click="to(5)">
                    <div class="recover"><router-link to="/fifth">节能分析</router-link></div>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
let index = ref(0)
const to = ((e: any) => index.value = e)



</script>

<style lang="scss">
.bottom {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);

    ul {
        display: flex;
        justify-content: space-between;
        align-items: end;

        li {

            margin: 0 14px;

            a:hover {
                color: #41e8d7 !important;
            }
        }
    }

}


.isActive {
    background-color: rgba($color: #000000, $alpha: .7) !important;

    a {
        color: #41e8d7 !important;
    }

}


.parallelogram {


    background-color: rgba($color: #000000, $alpha: .4);
    padding: 6px 14px;
    border-radius: 10px;
    border: 2px solid #4b5ccd;



    &:nth-child(1) {
        transform: skew(+30deg);

        .recover {
            transform: skew(-30deg);

            a {
                font-size: 18px;
            }
        }
    }

    &:nth-child(2) {
        transform: skew(+15deg);

        .recover {
            transform: skew(-15deg);
        }

        a {
            font-size: 18px;
        }
    }

    &:nth-child(4) {
        transform: skew(-15deg);

        .recover {
            transform: skew(+15deg);
        }

        a {
            font-size: 18px;
        }
    }

    &:nth-child(5) {
        transform: skew(-30deg);

        .recover {
            transform: skew(+30deg);
        }

        a {
            font-size: 18px;
        }
    }
}
</style>
