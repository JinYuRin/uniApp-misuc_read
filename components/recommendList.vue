<template>
	<!-- recommend需要封装 -->
	<view>
		<ListHeader>
			<template v-slot:left>
				猜你喜欢
			</template>
			<template v-slot:right>
				更多推荐
			</template>
		</ListHeader>
		<view class="flex w-100">
			<!-- 这三本书使用block或者template进行循环就行了,毕竟既不复杂也不重复使用 -->
			<view @click="navigateTo('bookDetail')" v-for="(i, index) in recommendBooks" :key="index" class="flex flex-column align-center justify-center">
				<image :src="i.img" style="height: 250rpx;width: 250rpx;"></image>
				<view class="text-light-muted font mt-1">{{ i.name }}</view>
			</view>
		</view>
	</view>
</template>

<script>
import ListHeader from './list-header.vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
	props: {
		recommendBooks: {
			type: Array
		}
	},
	components: { ListHeader },
	name: 'recommendList',
	data() {
		return {};
	},
	methods: {
		...mapActions(['navigateTo'])
	}
};
</script>

<style></style>
