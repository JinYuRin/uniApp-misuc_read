<template>
	<view class="border rounded-lg bg-light mx-3 mt-3 p-1 flex align-center">
		<!-- 这个icon需要引用组件了 -->
		<view class="iconfont icon-bofang text-light-muted mr-2"></view>
		<input type="text" :placeholder="placeholder" class="flex-1 text-light-muted" placeholder-class="text-light-muted" />
	</view>
</template>

<script>
export default {
	props: {
		placeholder: {
			type: String,
			default: '搜索你想听的节目'
		}
	},
	name: 'searchBox',
	data() {
		return {};
	}
};
</script>

<style></style>
