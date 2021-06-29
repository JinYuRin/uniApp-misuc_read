<template>
	<view class="flex align-center justify-between m-3">
		<view class="font-lg font-lgbold "><slot name="left"></slot></view>
		<view class="text-light-muted font-md">
			<slot name="right">查看全部</slot>
			<!-- slot可以有默认值吗 -->
			<text class="iconfont icon-iconfonti"></text>
		</view>
	</view>
</template>

<script>
export default {
	name: 'list-header',
	data() {
		return {};
	}
};
</script>

<style></style>
