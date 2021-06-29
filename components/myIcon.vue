<template>
	<!-- style可以传字符串也可以对象  class可以对象，那么数组可以吗-->
	<view @click="$emit('click')" :class="[iconId, iconColor]" class="iconfont" style="font-size: 40rpx;line-height: 1.2;"></view>
</template>

<script>
export default {
	props: {
		iconId: {
			type: String
		},
		iconColor: {
			type: String
		}
	},
	data() {
		return {};
	}
};
</script>

<style></style>
