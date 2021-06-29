<template>
	<view><view :class="backgroundColor" :style="{ height: `${statusBarHeight}px` }"></view></view>
</template>

<script>
export default {
	props: {
		backgroundColor: {
			type: String,
			default: 'bg-main'
		}
	},
	name: 'statusBar',
	data() {
		return {
			// 直接通过原型访问变量
			statusBarHeight: this.$statusBarHeight
		};
	}
};
</script>

<style></style>
