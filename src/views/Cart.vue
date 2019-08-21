<template>
    <div class="home">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div v-if="items.length === 0" style="text-align: center;padding: 20px 0;">
                <van-icon size="80" name="cart-circle-o"></van-icon>
                <br>
                <span>购物车是空的</span>
                <br>
                <small>把我滑下去可以刷新哟</small>
            </div>

            <div v-else>
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
                        button-text="结算"
                        @submit="onSubmit"
                ></van-submit-bar>
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                isLoading: false,
                total_price: 0,
                items: [
                    {
                        img: 'https://img.alicdn.com/imgextra/i2/595412874/O1CN01m9aqw51X6KpKmi998_!!595412874.jpg_400x400.jpg',
                        title: '标题',
                        description: '简短描述',
                        price: 998.00,
                        origin_price: 1024.00,
                        count: 1
                    },
                    {
                        img: 'https://img.alicdn.com/imgextra/i2/595412874/O1CN01m9aqw51X6KpKmi998_!!595412874.jpg_400x400.jpg',
                        title: '标题',
                        description: '简短描述',
                        price: 188.00,
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
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                }, 500);
            },
            onSubmit() {
                this.$router.push({name: 'order.submit'});
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
