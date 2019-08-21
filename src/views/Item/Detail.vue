<template>
    <div class="item-detail">
        <van-swipe @change="onChange">
            <van-swipe-item v-for="image in item.images">
                <van-image style="width: 100vw;" :src="image"></van-image>
            </van-swipe-item>

            <div class="custom-indicator" slot="indicator">
                {{ current + 1 }}/{{ item.images.length }}
            </div>
        </van-swipe>

        <van-panel style="padding: 10px">
            <div slot="header">
                <span class="price"><small>￥</small>{{ item.price }}</span>
                <h3 class="item-title">{{ item.title }}</h3>
            </div>
        </van-panel>

        <van-cell-group style="margin-top: 10px;padding-bottom: 50px;">
            <van-cell title="已选" :value="chosenSku.color.name + '，' + chosenSku.size.name + '，' + chosenSku.count + '件'"
                      is-link @click="isChoosingSku = true"></van-cell>
            <van-cell title="送至" :value="chosenAddress" is-link @click="isChoosingAddress = true"></van-cell>
            <van-cell title="运费" value="免运费"></van-cell>
        </van-cell-group>

        <van-sku
                v-model="isChoosingSku"
                :sku="item.sku"
                :goods="{title:item.title, picture: item.images[0]}"
                :goods-id="item.id"
                :hide-stock="item.sku.hide_stock"
                @add-cart="addToCart"
                @buy-clicked="buyNow"
                @sku-selected="onSkuChange"
                @stepper-change="onCountChange"
        ></van-sku>

        <van-popup
                v-model="isChoosingAddress"
                position="bottom"
        >
            <van-address-list
                    v-model="chosenAddressId"
                    :list="addresses"
                    @add="$router.push({name: 'address.index'})"
                    @select="onAddressChange"
                    add-button-text="地址管理"
            ></van-address-list>
        </van-popup>

        <van-goods-action>
            <van-goods-action-icon
                    icon="chat-o"
                    text="联系客服"
            ></van-goods-action-icon>
            <van-goods-action-icon
                    icon="cart-o"
                    text="购物车"
                    @click="viewCart"
            ></van-goods-action-icon>
            <van-goods-action-icon
                    icon="apps-o"
                    text="同类商品"
            ></van-goods-action-icon>
            <van-goods-action-button
                    type="warning"
                    text="加入购物车"
                    @click="addToCart"
            ></van-goods-action-button>
            <van-goods-action-button
                    type="danger"
                    text="立即购买"
                    @click="buyNow"
            ></van-goods-action-button>
        </van-goods-action>
    </div>
</template>

<style lang="scss">
    .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 8px;
        padding: 2px 5px;
        color: #fff;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.1);
    }

    .price {
        font-size: 26px;
        color: #f44;

        small {
            font-size: 18px;
        }
    }

    .item-title {
        margin-top: 10px;
        margin-bottom: 0;
    }
</style>

<script>
    export default {
        name: 'item.detail',
        data() {
            return {
                current: 0,
                isChoosingSku: false,
                isChoosingAddress: false,
                chosenAddressId: 0,
                chosenAddress: '',
                chosenSku: {
                    color: {
                        id: '111',
                        name: '红色'
                    },
                    size: {
                        id: '121',
                        name: 'L'
                    },
                    count: 1
                },
                item: {
                    id: 1,
                    title: '夏天新款2019女学生 雪纺连衣裙 清新女装吊带连衣裙 红色 M',
                    description: '简短描述',
                    price: 998.00,
                    origin_price: 1024.00,
                    images: [
                        'https://via.placeholder.com/500x500.png?text=1',
                        'https://via.placeholder.com/500x500.png?text=2',
                        'https://via.placeholder.com/500x500.png?text=3',
                        'https://via.placeholder.com/500x500.png?text=4',
                        'https://via.placeholder.com/500x500.png?text=5',
                    ],
                    sku: {
                        tree: [
                            {
                                k: '颜色', // skuKeyName：规格类目名称
                                v: [
                                    {
                                        id: '111', // skuValueId：规格值 id
                                        name: '红色' // skuValueName：规格值名称
                                    },
                                    {
                                        id: '112',
                                        name: '蓝色'
                                    }
                                ],
                                k_s: 'color' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                            },
                            {
                                k: '尺寸',
                                v: [
                                    {
                                        id: '121',
                                        name: 'L'
                                    },
                                    {
                                        id: '122',
                                        name: 'M'
                                    }
                                ],
                                k_s: 'size'
                            }
                        ],
                        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                        list: [
                            {
                                id: '1-11-21', // skuId，下单时后端需要
                                price: 99800, // 价格（单位分）
                                color: '111', // 规格类目 k_s 为 s1 的对应规格值 id
                                size: '121', // 规格类目 k_s 为 s2 的对应规格值 id
                                stock_num: 110 // 当前 sku 组合对应的库存
                            },
                            {
                                id: '1-12-22',
                                price: 99800,
                                color: '112',
                                size: '122',
                                stock_num: 110
                            },
                            {
                                id: '1-11-22',
                                price: 99800,
                                color: '111',
                                size: '122',
                                stock_num: 110
                            },
                            {
                                id: '1-12-21',
                                price: 99800,
                                color: '112',
                                size: '121',
                                stock_num: 110
                            },
                        ],
                        price: 998, // 默认价格（单位元）
                        stock_num: 227, // 商品总库存
                        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                        none_sku: false, // 是否无规格商品
                        // messages: [
                        //     {
                        //         // 商品留言
                        //         datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
                        //         multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
                        //         name: '留言', // 留言名称
                        //         type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
                        //         required: '1', // 是否必填 '1' 表示必填
                        //         placeholder: '' // 可选值，占位文本
                        //     }
                        // ],
                        hide_stock: false // 是否隐藏剩余库存
                    }
                },
                addresses: [
                    {
                        id: 1,
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                    },
                    {
                        id: 2,
                        name: '李四',
                        tel: '1310000000',
                        address: '浙江省杭州市拱墅区莫干山路 50 号'
                    }
                ],
            }
        },
        methods: {
            onChange(index) {
                this.current = index;
            },
            viewCart() {
                this.$router.push({name: 'cart'});
            },
            addToCart() {
                this.$toast.success('已加入购物车');
            },
            buyNow() {
                this.$toast('直接创建订单');
            },
            onCountChange(count) {
                this.chosenSku.count = count;
            },
            onSkuChange(data) {
                let sku = data.skuValue;
                let s = {
                    id: sku.id,
                    name: sku.name
                };
                if (sku.skuKeyStr === 'color') {
                    this.chosenSku.color = s;
                } else {
                    this.chosenSku.size = s;
                }
            },
            onAddressChange(item, index) {
                this.chosenAddress = item.address;
            }
        },
        mounted() {
            this.chosenAddressId = this.addresses[0].id;
            this.chosenAddress = this.addresses[0].address;
        }
    }
</script>
