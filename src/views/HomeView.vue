<script setup>

import HomeImgCarousel from '../components/HomeImgCarousel.vue';
import AboutMeCard from '../components/AboutMeCard.vue';

import imgs from '../assets/img/imgs.js';
import videos from '../assets/video/videos.js';

const item2Data = [
    {
        imgSrc: imgs.ChangShaHeZhao.src,
        title: '情侣合照',
        description: '文和友里的烟火长沙。'
    },
    {
        imgSrc: imgs.RuoHai.src,
        title: '若海',
        description: '若海，若水，若梦。'
    },
    {
        imgSrc: imgs.QiaoXiaWaJveJi.src,
        title: '桥下挖掘机',
        description: '光怪陆离的废土世界。'
    },

    {
        imgSrc: imgs.YeLiDaoFeiJi.src,
        title: '野狸岛',
        description: '北方人的第一张水墨山水图。'
    },
    {
        imgSrc: imgs.ShiTangBiXin.src,
        title: '食堂角落',
        description: '光和影，我和你。'
    },
    {
        imgSrc: imgs.YeLiDaoZhuaPai.src,
        title: '志愿采风',
        description: '平淡生活的点滴记录。',
    }

]
const item3Data = {
    title: '终于等到你',
    footer: '欢迎来到我的个人网站',
    cardData: [
        {
            imageUrl: imgs.advantage.brave.src,
            title: '勇气',
            content: '跨越2000公里求学，到翻过第一个空翻。'
        },
        {
            imageUrl: imgs.advantage.photographing.src,
            title: '摄影',
            content: '不会摄影的前端程序员不是好设计师。'
        },
        {
            imageUrl: imgs.advantage.outstanding.src,
            title: '优秀',
            content: '从高考到转专业，我坚信优秀是一种习惯。'
        },
        {
            imageUrl: imgs.advantage.energetic.src,
            title: '精力',
            content: '5小时100公里的骑行让我不惧任何挑战。'
        },
        {
            imageUrl: imgs.advantage.explore.src,
            title: '探索',
            content: '从后端到前端，从机器学习到区块链。'
        },
        {
            imageUrl: imgs.advantage.infp.src,
            title: '倾听',
            content: 'INFP人格让我善于洞察情绪变化。'
        }
    ]
};

</script>

<template>
    <div class="item1">
        <div class="video-player">
            <video autoplay loop muted class="video-element">
                <source :src="videos.headerAll.src" type="video/mp4" :poster="videos.headerAll.poster">
                您的浏览器不支持视频标签。
            </video>
        </div>
    </div>
    <div class="item2">
        <home-img-carousel :data="item2Data">
        </home-img-carousel>

    </div>
    <div class="item3">
        <h2>{{ item3Data.title }}</h2>
        <div class="about-me">
            <div class="item" v-for="item, index in item3Data.cardData" :key="index">
                <about-me-card :imageUrl="item.imageUrl" :title="item.title" :content="item.content">
                </about-me-card>
            </div>
        </div>
    </div>
    <div class="item4">
        <div class="invite-me">
            <h2>trust me</h2>
            <img :src="imgs.footer.src">
        </div>
    </div>




</template>

<style scoped lang="scss">
.item2,
.item3,
.item4 {
    width: 100%;
    height: auto;
    padding: 0px;
    margin: 0;
    position: relative;
}

.item2 {
    height: 56vw;
}

.item1 {
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;



    .video-player {
        position: relative;
        width: 100%;
        height: 45vw;
        max-height: 60vh;

        .video-element {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }


}

.item3 {
    background: rgb(246, 248, 250);

    h2 {
        text-align: center;
        font-size: clamp(1rem, 3vw, 4rem);
        margin: 0;
        padding: 5%;
    }

    .about-me {
        display: grid;
        gap: 10px;
        padding: 10%;
        padding-top: 0;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);


        .item {
            aspect-ratio: 1/1;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 3%;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            overflow: hidden;
            position: relative;

            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            }
        }
    }

    @media (min-width: 600px) {
        .about-me {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }
    }



}

.item4 {
    .invite-me {
        width: 100%;
        height: auto;
        margin: 0 auto;
        position: relative;
    }

    .invite-me img {
        width: 100%;
        display: block;
        margin: 0 auto;
        position: relative;
    }

    .invite-me h2 {
        text-align: center;
        color: white;
        opacity: 50%;
        font-size: clamp(1.5rem, 5vw, 5rem);
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
    }
}
</style>
