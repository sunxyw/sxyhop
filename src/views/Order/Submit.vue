<template>
    <div class="order-submit">
        <van-contact-card
                type="edit"
                name="张三"
                tel="13000000000"
                :editable="false"
        ></van-contact-card>

        <van-cell-group>
            <van-cell @click="pay_method_opt_show = true" title="支付方式" :value="pay_method" is-link></van-cell>
        </van-cell-group>

        <van-card
                v-for="item in items"
                :num="item.count"
                :price="item.price"
                :desc="item.description"
                :title="item.title"
                :thumb="item.img"
                :origin-price="item.origin_price"
        ></van-card>

        <van-submit-bar
                :price="total_price"
                button-text="提交订单"
                @submit="onSubmit"
        ></van-submit-bar>

        <van-action-sheet
                v-model="pay_method_opt_show"
                :actions="pay_methods"
                @select="onPayMethodSelect"
        ></van-action-sheet>
    </div>
</template>

<script>
    export default {
        name: 'order.submit',
        data() {
            return {
                isLoading: false,
                total_price: 0,
                pay_method: '在线支付',
                pay_method_opt_show: false,
                pay_methods: [
                    {name: '在线支付', subname: '支持支付宝、微信'},
                    {name: '货到付款', subname: '快递员上门收款'},
                ],
                items: [
                    {
                        img: 'https://img.alicdn.com/imgextra/i2/595412874/O1CN01m9aqw51X6KpKmi998_!!595412874.jpg_400x400.jpg',
                        title: '标题',
                        description: '简短描述',
                        price: 998,
                        origin_price: 1024,
                        count: 1
                    },
                    {
                        img: 'https://img.alicdn.com/imgextra/i2/595412874/O1CN01m9aqw51X6KpKmi998_!!595412874.jpg_400x400.jpg',
                        title: '标题',
                        description: '简短描述',
                        price: 188,
                        origin_price: null,
                        count: 3
                    }
                ]
            }
        },
        mounted() {
            this.getTotalPrice();
        },
        methods: {
            onPayMethodSelect(item) {
                this.pay_method_opt_show = false;
                this.pay_method = item.name;
            },
            onSubmit() {
                this.$toast('这时候应该调用支付页面');
            },
            getTotalPrice() {
                let tmp_price = 0;
                this.items.forEach(function (item) {
                    tmp_price = tmp_price + (item.price * item.count);
                });
                this.total_price = tmp_price * 100;
            }
        }
    }
</script>
