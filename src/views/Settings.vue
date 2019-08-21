<template>
    <div class="settings">
        <van-cell-group>
            <van-cell center title="sunxyw" label="用户名：jd)dwad" size="large" is-link>
                <van-image slot="icon" width="60" round src="http://q1.qlogo.cn/g?b=qq&nk=2496419818&s=640" style="margin-right: 10px;"></van-image>
            </van-cell>
            <van-cell title="地址管理" to="address" is-link></van-cell>
        </van-cell-group>

        <van-cell-group style="margin-top: 10px;">
            <van-cell title="账户与安全" is-link></van-cell>
        </van-cell-group>

        <van-cell-group style="margin-top: 10px;">
            <van-cell title="意见反顾" is-link></van-cell>
        </van-cell-group>
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
