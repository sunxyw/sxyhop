<template>
    <div class="category">
        <van-tree-select
                :items="items"
                :main-active-index="mainActiveIndex"
                :active-id="activeId"
                height="100vh"
                @click-nav="onClickNav"
                @click-item="onClickItem"
        ></van-tree-select>
    </div>
</template>

<script>
    export default {
        name: 'category',
        data() {
            return {
                mainActiveIndex: 0,
                activeId: 1,
                items: [
                    {
                        text: '男装',
                        children: [
                            {
                                text: '外套',
                                id: 1,
                            },
                            {
                                text: 'T恤',
                                id: 2
                            },
                            {
                                text: '衬衫',
                                id: 3
                            }
                        ]
                    },
                    {
                        text: '女装',
                        children: [
                            {
                                text: '裙装',
                                id: 4
                            },
                            {
                                text: '外套',
                                id: 5
                            },
                            {
                                text: '裤装',
                                id: 6
                            }
                        ]
                    }
                ]
            }
                ;
        },
        methods: {
            onClickNav(index) {
                this.mainActiveIndex = index;
            },
            onClickItem(data) {
                this.activeId = data.id;
            }
        }
    }
</script>
