<template>
	<!-- 轮播图组件 -->
	<!-- swiper封装 -->
	<swiper class="m-3" style="height: 450rpx;" indicator-active-color="#F8F8F8" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item v-for="(i, index) in swiperImages" :key="index"><image style="width: 100%;height: 450rpx;" :src="i.src" mode="aspectFill" /></swiper-item>
	</swiper>
</template>

<script>
export default {
	props: ['swiperImages'],
	data() {
		return {};
	},
	methods: {
		handleSwiperChange(e) {
			// console.log(e)
		}
	}
};
</script>

<style></style>
