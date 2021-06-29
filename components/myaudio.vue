<template>
	<!-- 应该在引用该组件的时候再进行定位 -->
	<view
		@click="navigateTo('audioDetail')"
		class="rounded-lg position-fixed flex flex-column"
		style="bottom: 10rpx; right: 15rpx;left: 15rpx; z-index: 1000; width: 720rpx;height: 200rpx;background-color:rgba(214,210,199,0.8);"
	>
		<view @click.stop class="flex align-center">
			<!-- @click.stop直接这样用也行 -->
			<view class="text-dark mx-3">02:17</view>
			<FSlider></FSlider>
			<view class="text-dark mx-3">05:32</view>
		</view>
		<view class="flex align-center justify-between mx-2" style="height: 100rpx;">
			<view class="flex flex-column" style="height: 100%;">
				<view class="">歌手-{{ singerName }}</view>
				<view class="">歌曲-{{ audioName }}</view>
			</view>
			<view class="">
				<!-- 记得要stop防止事件冒泡 -->
				<text @click.stop="audioLast" style="font-size: 80rpx;" class="iconfont icon-shangyishou text-dark ml-2"></text>
				<text @click.stop="audioPlayOrPause" style="font-size: 90rpx;" :class="playStatus ? 'icon-bofang' : 'icon-ziyuan'" class="iconfont text-dark ml-2"></text>
				<text @click.stop="audioNext" style="font-size: 80rpx;" class="iconfont icon-xiayishou text-dark ml-2"></text>
			</view>
		</view>
	</view>
</template>

<script>
import FSlider from './fSlider.vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
//vue2是这样拿取state的，或者用原型里的$store直接拿取，实际上vue3采用的函数式是接近后者的
// 无伤大雅，只要记住核心就行
//直接拓展运算符...mapActions/...mapMutations(['','','']) 但是这种map的方式在vue3是被弃用的
export default {
	methods: {
		// toAudioDetail(pageName) {
		// 	// 跳转到音乐详情页,如果想到处都可以用，可以考虑丢到store去
		// 	console.log('到详情页');
		// 	uni.navigateTo({
		// 		url: `/pages/${pageName}/${pageName}`
		// 	});
		// },
		//mapState会分模块的啊,你mapActions不分模块？你玛德还真不分模块，沃日
		// 那岂不是不允许同名函数了吗
		...mapActions(['init', 'navigateTo']),
		...mapMutations(['destruction', 'addAudioEvent', 'audioPlayOrPause', 'audioLast', 'audioNext'])
		// 靠，如果我能把vue和egg研究透，已经够强了，我还学还日他妈的java
	},
	mounted() {
		this.init(); // 必须先初始化才会有啊
		// console.log(this.addAudioEvent);
		this.addAudioEvent(); // 可以直接提交Mutations
		// this.audioplay();
	},
	computed: {
		// 了解一下拓展运算符 把这个函数返回的结果(一个对象)给全部解构出来加入了computed
		// mapState()这个函数会返回参数{}里面进行computed的函数比如
		// num: state => state.audio.num
		...mapState({
			// num: state => state.audio.num
			num: ({ audio }) => audio.num,
			playStatus: ({ audio }) => audio.playStatus // 全局播放状态
			// currentAudioInfo: ({ audio }) => audio.currentAudioInfo // 全局播放状态
			// innerAudioContext: ({ audio }) => audio.innerAudioContext
			// 这个写法可以把所有需要的state都写在一起，如果使用$store就要一个一个computed了
			// 这种vue2写法及其不舒服，vue3使用函数式才是王道
		}),
		...mapGetters(['audioName', 'singerName']) // 使用数组，没有audio模块名
	},
	components: { FSlider },
	name: 'myaudio',
	data() {
		return {};
	}
};
</script>

<style></style>
