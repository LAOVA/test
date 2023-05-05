<template>
    <div class="bottom">
        <p>
            <router-link to="/first">社区管理</router-link>
            <router-link to="/second">节能分析</router-link>
        </p>
    </div>
    <router-view></router-view>
</template>

<style scoped>
#app {
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
}
.bottom {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
