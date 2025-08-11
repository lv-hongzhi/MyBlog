<script setup>
import { RouterLink } from 'vue-router';
const data = [
    { name: '首页', path: '/' },
    { name: '博客', path: '/blog' },
    { name: '项目', path: '/project' },
    { name: '摄影', path: '/img' },

]

</script>

<template>
    <div class="header">
        <div class="item" v-for="item in data">
            <RouterLink :to="item.path">{{
                item.name }}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.header {
    background-color: #000000bf;
    font-family: sans-serif;
    height: 50px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.item {

    margin: 20px;
    font-size: 16px;
}

.item a {
    color: #ffffff;
    text-decoration: none;
}
</style>
