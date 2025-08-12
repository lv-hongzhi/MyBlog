<script setup>
import { ref } from 'vue';

defineProps({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const isHovered = ref(false);
let hoverTimeout = null;

function handleMouseEnter() {
    clearTimeout(hoverTimeout);
    isHovered.value = true;
}

function handleMouseLeave() {
    hoverTimeout = setTimeout(() => {
        isHovered.value = false;
    }, 5000);
}
</script>

<template>
    <div class="about-me-card" :style="{ backgroundImage: `url(${imageUrl})` }" @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave">
        <div class="content-container" :class="{ 'active': isHovered }">
            <h1 class="title">{{ title }}</h1>
            <div class="content" :class="{ 'active': isHovered }">{{ content }}</div>
        </div>
    </div>
</template>

<style scoped lang="less">
.about-me-card {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    background-size: cover;
    background-position: center;
    transition: all 0.3s ease;
    overflow: hidden;
}

.content-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.3s ease;

    &.active {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
    }

    .title {
        color: white;
        margin-bottom: 1rem;
        text-align: center;
    }

    .content {
        color: white;
        text-align: center;
        padding: 0 2rem;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;

        &.active {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
</style>
