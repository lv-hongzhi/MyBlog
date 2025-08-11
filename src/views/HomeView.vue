<script setup>
import VideoCarousel from '../components/VideoCarousel.vue';
</script>

<template>
    <div class="home-view">
        <video-carousel title="aaa"></video-carousel>
        <!-- <div class="video-player">
            <video autoplay loop muted width="100%" class="video-element">
                <source src="../assets/video/1.mp4" type="video/mp4">

                您的浏览器不支持视频标签。
            </video>
        </div> -->
    </div>
</template>

<style scoped>
.home-view {
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
}
</style>
