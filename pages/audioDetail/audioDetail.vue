<template>
	<view class="flex flex-column">
		<!-- {{ audioList }} -->
		<StatusBar />
		<page-title @click="back">
			<template v-slot:title>
				<text class="font-lg ml-2">音乐详情</text>
			</template>
		</page-title>
		<view class="flex flex-column align-center">
			<view class="flex align-center">
				<text class="font-md">歌曲:</text>
				<text class="font-lg font-weight-bold">{{ audioName }}</text>
			</view>
			<view class="flex align-center">
				<text class="font-md">歌手:</text>
				<text class="font-lg font-weight-bold">{{ singerName }}</text>
			</view>
		</view>
		<!-- 图片是不是要给阴影，我看不清楚 -->
		<image class="" src="/static/music/music3.png" style="width: 610rpx;height: 400rpx;margin: 20rpx 70rpx;border-radius: 50rpx;"></image>
		<view class="flex align-center">
			<view class="text-dark mx-3">02:17</view>
			<FSlider runwayColor="rgba(0,0,0,0.3)"></FSlider>
			<view class="text-dark mx-3">05:32</view>
		</view>
		<view class="flex flex-column align-center" style="height: 350rpx;">
			<!-- flex未指定高宽默认100%宽度 -->
			<view class="flex justify-center align-center">
				<text @click.stop="audioLast" style="font-size: 80rpx;" class="iconfont icon-shangyixiang text-dark"></text>
				<text
					@click.stop="audioPlayOrPause"
					style="font-size: 90rpx;margin: 0 80rpx;"
					:class="playStatus ? 'icon-zanting' : 'icon-bofang1'"
					class="iconfont text-dark"
				></text>
				<text @click.stop="audioNext" style="font-size: 80rpx;" class="iconfont icon-xiayixiang text-dark"></text>
			</view>
			<view class="flex justify-center align-center">
				<view @click="showList" class="flex flex-column justify-center align-center">
					<text style="font-size: 80rpx;" class="iconfont icon-liebiao text-dark"></text>
					<text style="margin-top: -20rpx;">播放列表</text>
				</view>
				<view class="flex flex-column justify-center align-center">
					<text style="font-size: 80rpx;margin: 0 70rpx;" class="iconfont icon-xihuan2 text-dark"></text>
					<text style="margin-top: -20rpx;">收藏</text>
				</view>
				<view class="flex flex-column justify-center align-center">
					<text style="font-size: 80rpx;" class="iconfont icon-yejianmoshi text-dark"></text>
					<text style="margin-top: -20rpx;">夜间模式</text>
				</view>
			</view>
		</view>
		<view v-if="isShowList" style="left: 0;right: 0;top:1180rpx;" class="position-fixed w-100 p-2">
			<view class="font-lg font-weight-bold mb-3">列表选择</view>
			<scroll-view scroll-y class="px-3" style="height: 400rpx;">
				<view
					:class="currentAudioIndex === index ? 'text-main' : ''"
					v-for="(i, index) in audioList"
					@click="selectAudio(index)"
					style="height: 60rpx;"
					class="flex align-center w-100 mb-4"
				>
					<!-- 按比例来算是个坑 不同歌曲的info不同啊 应该手动算宽度 -->
					<text style="width: 170rpx;margin-right: 80rpx;" class="text-ellipsis font-md">{{ i.name }}</text>
					<text style="width: 240rpx;margin-right: 80rpx;" class="text-ellipsis font-md">{{ i.singer.name }}</text>
					<text class="flex-1 font-md">
						播放
						<text v-if="currentAudioIndex === index" class="ml-1 iconfont icon-bofangsanjiaoxing"></text>
					</text>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import FSlider from '../../components/fSlider.vue';
import PageTitle from '../../components/pageTitle.vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		showList() {
			this.isShowList = !this.isShowList;
		},
		...mapActions(['init']),
		...mapMutations(['selectAudio', 'destruction', 'addAudioEvent', 'audioPlayOrPause', 'audioLast', 'audioNext'])
	},
	mounted() {
		// 别忘了写销毁的生命周期和提交destruction
		this.init();
		this.addAudioEvent();
	},
	computed: {
		...mapState({
			playStatus: ({ audio }) => audio.playStatus, // 全局播放状态
			currentAudioIndex: ({ audio }) => audio.currentAudioIndex // 全局播放状态
		}),
		...mapGetters(['audioName', 'singerName', 'audioList']) // 使用数组，没有audio模块名
	},
	components: { FSlider, PageTitle },
	data() {
		return {
			isShowList: false
		};
	}
};
</script>

<style></style>
