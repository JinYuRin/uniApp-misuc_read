<template>
	<view class="flex mb-5 align-stretch">
		<image class="rounded-lg flex-shrink mr-2" :src="book.img" style="height: 250rpx;width: 250rpx;"></image>
		<view class="flex flex-column">
			<view class="font-lg font-weight-bolder ">{{ book.name }}</view>
			<view class="text-light-muted font-md">{{ book.desc }}</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		book: {
			type: Object
		}
	},
	data() {
		return {};
	}
};
</script>

<style></style>
