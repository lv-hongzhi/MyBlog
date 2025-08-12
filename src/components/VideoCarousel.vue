<template>

    <div class="video-wrapper">
        <!-- 宽高比容器 -->

        <el-carousel height="56vw" autoplay="false" trigger="click" interval="5000">
            <el-carousel-item v-for="(item, index) in videos" :key="index">
                <div class="video-player">
                    <video autoplay loop muted class="video-element">
                        <source :src="item.src" type="video/mp4">
                        您的浏览器不支持视频标签。
                    </video>
                </div>
            </el-carousel-item>
        </el-carousel>

    </div>

</template>
<script setup>
import { videos } from '../assets/video/videos';



</script>
<style scoped>
.video-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;

}

/* 关键点：使用宽高比容器 */

.el-carousel {
    max-height: 70vh;
}


.el-carousel__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.video-player {
    position: relative;
    width: 100%;
    height: 100%;
}

.video-element {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>