<template>
    <div class="my">
        <van-panel
                style="color: #fff;padding: 10px;background-image: url(https://static.vecteezy.com/system/resources/previews/000/406/914/non_2x/fluid-gradient-wallpaper-design-vector.jpg)">
            <div slot="header">
                <van-row gutter="20">
                    <van-col>
                        <van-image width="70" round src="http://q1.qlogo.cn/g?b=qq&nk=2496419818&s=640"></van-image>
                    </van-col>
                    <van-col style="padding-top: 10px;">
                        <span style="font-size: 18px;">sunxyw</span>
                        <br>
                        <small style="font-size: 12px;">关注了 4 商品</small>
                    </van-col>
                </van-row>
            </div>
        </van-panel>

        <van-grid clickable>
            <van-grid-item icon="pending-payment" text="待付款"></van-grid-item>
            <van-grid-item icon="send-gift-o" text="待收货"></van-grid-item>
            <van-grid-item icon="after-sale" text="退换/售后"></van-grid-item>
            <van-grid-item text="我的订单" style="border-left: 2px solid #7d7e80">
                <i slot="icon" class="van-icon van-icon-orders-o van-grid-item__icon" style="color: #ed6a0c"></i>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    export default {
        name: 'my',
        data() {
            return {}
        }
    }
</script>
