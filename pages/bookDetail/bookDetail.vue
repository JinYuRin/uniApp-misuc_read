<template>
	<view>
		<!--statusBar -->
		<!-- <StatusBar /> -->
		<!-- 搜索框 -->
		<!-- <SearchBox /> -->
		<StatusBar backgroundColor="bg-main-grey" />
		<!-- 还真可以直接class="bg-main-grey" -->
		<page-title class="bg-main-grey" @click="back">
			<template v-slot:title>
				<text class="font-lg ml-2 ">图书详情</text>
			</template>
		</page-title>
		<view class="flex bg-main-grey px-2 pb-3">
			<image class="rounded-lg" src="/static/Rebook/Rebook1.jpg" style="height: 250rpx;width: 250rpx;"></image>
			<view class="ml-4 flex flex-column justify-between">
				<view class="mb-2">
					<view class="font-lg font-weight-bold">西游记</view>
					<view class="font">作者:章金莱</view>
				</view>
				<view class="flex">
					<view style="width: 200rpx;height: 90rpx;" class="font-lg flex justify-center align-center bg-white rounded-lg mr-2">分享</view>
					<view style="width: 200rpx;height: 90rpx;" class="font-lg flex justify-center align-center bg-white rounded-lg">收藏</view>
				</view>
			</view>
		</view>
		<view class="flex align-center  border-bottom">
			<view @click="changeTab('detail')" class="flex-1 flex align-center justify-center">
				<view style="box-sizing:border-box;border-bottom: ; border-bottom-width: 8rpx; border-bottom-color:#dc4d2f" class="border-bottom text-dark font-lg py-2">详情</view>
			</view>
			<view @click="changeTab('index')" class="flex-1 flex align-center justify-center"><view style="" class="text-light-black font-lg py-2">目录</view></view>
		</view>
		<view v-if="tab === 'detail'" class="flex flex-column align-center">
			<view class="flex justify-center align-center py-3">
				<view style="background: #d7d7d7; width: 100rpx;height: 3rpx;"></view>
				<view class="mx-1 text-light-muted font-md">简介</view>
				<view style="background: #d7d7d7; width: 100rpx;height: 3rpx;"></view>
			</view>
			<view class="px-2 font-lg" style="line-height: 2;">
				《西游记》是中国古代第一部浪漫主义章回体长篇神魔小说。现存明刊百回本《西游记》均无作者署名。清代学者吴玉搢等首先提出《西游记》作者是明代吴承恩。
				这部小说以“唐僧取经”这一历史事件为蓝本，通过作者的艺术加工，深刻地描绘了当时的社会现实。全书主要描写了孙悟空出世及大闹天宫后，遇见了唐僧、猪八戒和沙僧三人，西行取经，一路降妖伏魔，经历了九九八十一难，终于到达西天见到如来佛祖，最终五圣成真的故事。
			</view>
		</view>
		<view v-if="tab === 'index'" class="flex flex-column">
			<view v-for="i in 5" :key="i" class="w-100 border-bottom py-2 pl-2 font-lg text-ellipsis">第一回 灵根灵原本流出 灵根灵根本流出灵灵根灵根本流出灵</view>
		</view>
	</view>
</template>

<script>
// import SearchBox from '../../components/searchBox.vue';
import PageTitle from '../../components/pageTitle.vue';
export default {
	components: { PageTitle },
	data() {
		return {
			collectionList: [],
			tab: 'detail'
		};
	},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		changeTab(tab) {
			this.tab = tab;
		}
	}
};
</script>

<style></style>
