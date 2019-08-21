<template>
    <div class="address-index">
        <van-address-list
                :list="list"
                :switchable="false"
                @add="onAdd"
                @edit="onEdit"
                v-if="!isEditing"
        ></van-address-list>
        <van-address-edit
                :area-list="areaList"
                show-delete
                show-search-result
                :address-info="list[editing]"
                @save="onSave"
                @delete="onDelete"
                v-else
        ></van-address-edit>
    </div>
</template>

<script>
    import area from '@/components/areas.js'

    export default {
        name: 'address.index',
        data() {
            return {
                areaList: area,
                isEditing: false,
                editing: null,
                list: [
                    {
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                        areaCode: '440309',
                        addressDetail: '文三路 138 号东方通信大厦 7 楼 501 室'
                    },
                    {
                        id: '2',
                        name: '李四',
                        tel: '13000000000',
                        address: '浙江省杭州市拱墅区莫干山路 50 号',
                        areaCode: '440309',
                        addressDetail: '文三路 138 号东方通信大厦 7 楼 501 室'
                    }
                ]
            }
        },
        methods: {
            onAdd() {
                this.isEditing = true;
                this.editing = this.list.length + 1;
            },
            onEdit(item, index) {
                this.isEditing = true;
                this.editing = index;
            },
            onSave(item) {
                this.isEditing = false;
                this.list[this.editing] = item;
            },
            onDelete() {
                this.isEditing = false;
                this.list.splice(this.editing, 1);
            }
        }
    }
</script>
