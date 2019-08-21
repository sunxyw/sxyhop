<template>
    <div class="home">
        <van-search placeholder="请输入搜索关键词" v-model="keyword" show-action shape="round" @search="onSearch">
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>

        <van-swipe :autoplay="5000" height="200">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image"/>
            </van-swipe-item>
        </van-swipe>

        <van-grid :column-num="3" clickable>
            <van-grid-item
                    v-for="value in 6"
                    :key="value"
                    text="标题"
            >
                <van-image slot="icon" src="https://img.yzcdn.cn/vant/apple-1.jpg"></van-image>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                images: [
                    'https://via.placeholder.com/500x200.png?text=1',
                    'https://via.placeholder.com/500x200.png?text=2',
                    'https://via.placeholder.com/500x200.png?text=3',
                    'https://via.placeholder.com/500x200.png?text=4',
                    'https://via.placeholder.com/500x200.png?text=5',
                ],
                keyword: '',
            }
        },
        methods: {
            onSearch() {
                alert(this.keyword);
            }
        }
    }
</script>
