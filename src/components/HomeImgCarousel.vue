<template>
    <div class="carousel-container">
        <el-carousel height='56vw'>
            <el-carousel-item v-for="item in data" :key="item">

                <div class="item-container">
                    <div class="containt-item">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                    </div>
                    <div class="img-item">
                        <img :src="item.imgSrc" />
                    </div>

                </div>
            </el-carousel-item>
        </el-carousel>
    </div>



</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    }

});



</script>
<style scoped lang="less">
.carousel-container {
    width: 100%;
    height: 100%;
    position: relative;

    background-color: white;
}

.item-container {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .img-item {
        margin: 5%;


        img {
            max-width: 60vw;
            max-height: 50vw;
            width: auto;
            height: auto;
            object-fit: contain;
            border-radius: 10px;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.05);
            }
        }
    }

    .containt-item {

        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px;
        padding: 0;


        h3 {
            font-size: 24px;
            margin: 0;
            padding: 0;
            color: #333;
        }

        p {
            font-size: 16px;
            color: #666;
        }
    }
}

:deep(.el-carousel__button) {
    background-color: #c0c4cc;
    opacity: 0.5;
    transition: all 0.5s ease;
    width: 15px;
    height: 3px;
    border-radius: 2px;

}

:deep(.el-carousel__indicator.is-active .el-carousel__button) {
    background-color: #91959b;
    opacity: 0.8;
    width: 30px;
    height: 5px;
    border-radius: 3px;

}
</style>