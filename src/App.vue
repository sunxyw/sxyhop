<template>
    <div id="app">
        <van-nav-bar
                title="SXYHOP"
        >
            <div slot="right">
                <van-icon name="setting-o" size="1.4em" @click="$router.push({name: 'settings'})"></van-icon>
                <van-icon name="chat-o" size="1.4em" style="padding-left: 10px;" info="2"></van-icon>
            </div>
        </van-nav-bar>
        <!--        <van-notice-bar-->
        <!--                text="重要通知（全局）"-->
        <!--                left-icon="volume-o"-->
        <!--        ></van-notice-bar>-->
        <router-view style="padding-bottom: 50px;"/>

        <van-tabbar route>
            <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
            <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, Arial, sans-serif;
        background-color: #f8f8f8;
        line-height: 1;
    }

    .van-submit-bar, .van-goods-action {
        margin-bottom: 50px;
    }
</style>
