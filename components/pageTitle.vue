<template>
	<view class="flex w-100 p-3 align-center">
		<!-- <view style="font-size: 20rpx;" class="iconfont "></view> -->
		<my-icon @click="$emit('click')" iconId="icon-jiantou-copy"></my-icon>
		<slot name="title"></slot>
	</view>
</template>

<script>
import MyIcon from './myIcon.vue';
export default {
	name: 'pageTitle',
	components: { MyIcon },
	data() {
		return {};
	}
};
</script>

<style></style>
