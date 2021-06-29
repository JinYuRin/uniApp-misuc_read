<template>
	<!-- 谋划整体高度，使得分类内容占满空间 -->
	<view class="flex flex-column" :style="`height:${windowHeight - 50}px`">
		<!--statusBar -->
		<StatusBar />
		<!-- 搜索框 -->
		<SearchBox />
		<!-- 分类内容 -->
		<view class="flex mt-2 flex-1" style="background-color: #f0f3f8; width: 100%;height: 650px;">
			<!-- 一级分类 -->
			<!--scroll-view的时候,内部view不要限定大小,只有内部元素大于限定的height的时候才会滑动  -->
			<scroll-view scroll-y="true" style="width: 171rpx;height: 100%;">
				<view style="height: 150rpx;" v-for="i in 11" class="flex-1 font text-light-muted flex justify-center align-center text-main">有声书</view>
			</scroll-view>
			<!-- 二级分类 -->
			<!-- scroll-view的class是最外层容器的class，可以使用 -->
			<scroll-view class="flex-1" scroll-y="true" style="width: 100%;height: 100%;">
				<!-- 需要计算整个高度，tabbar貌似是100rpx ${statusBarHeight}px -->
				<view style="margin-bottom: 90rpx;" v-for="(i, index) in 5" :key="index" class="flex flex-column justify-center align-center">
					<view class="font-lg my-1">
						有声书
						<text class="iconfont icon-bofang ml-1"></text>
					</view>
					<view class="bg-white flex rounded flex-wrap" style="width: 100%;height: 170rpx;">
						<view v-for="(i, index) in 6" :key="index" class="flex justify-center align-center" style="width: 193rpx;height: 85rpx;">言情</view>
						<!-- 如果我不需要水平占满怎么办 每个元素的宽度为193高度85 -->
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import SearchBox from '../../components/searchBox.vue';
export default {
	components: { SearchBox },
	data() {
		return {
			windowHeight: this.$windowHeight
		};
	},
	created() {
		// console.log(this.windowHeight - 60 - this.statusBarHeight);
	}
};
</script>

<style></style>
