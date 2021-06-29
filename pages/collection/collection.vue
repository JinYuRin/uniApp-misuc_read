<template>
	<view>
		<!--statusBar -->
		<StatusBar />
		<!-- 搜索框 -->
		<SearchBox />
		<view class="flex align-center  border-bottom">
			<view class="flex-1 flex align-center justify-center">
				<view style="box-sizing:content-box; border-bottom-width: 8rpx; border-bottom-color:#dc4d2f" class="border-bottom text-dark font-weight-bold font-lg py-2">
					我的收藏
				</view>
			</view>
			<view class="flex-1 flex align-center justify-center"><view style="" class="text-light-black font-lg py-2">收听历史</view></view>
		</view>
		<!-- 收藏里面的bookList是由滑动取消收藏或者选项以及border之类的 -->
		<BookList :bookList="collectionList"></BookList>

		<!-- <view class="mt-5">
			<view class="flex px-3 pb-3 mb-2 align-stretch border-bottom">
				<image class="rounded-lg flex-shrink mr-2" src="../../static/indexListImg/indexListImg4.png" style="height: 250rpx;width: 250rpx;"></image>
				<view class="flex flex-column">
					<view class="font-lg font-weight-bolder ">《朝花夕拾》</view>
					<view class="text-light-muted font-md">《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集......</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
import SearchBox from '../../components/searchBox.vue';
import BookList from '../../components/bookList.vue';
export default {
	components: { SearchBox, BookList },
	data() {
		return {
			collectionList: [
				{ img: '/static/indexListImg/indexListImg4.png', name: '《朝花夕拾2》', desc: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集......' },
				{ img: '/static/indexListImg/indexListImg4.png', name: '《朝花夕拾2》', desc: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集......' },
				{ img: '/static/indexListImg/indexListImg4.png', name: '《朝花夕拾2》', desc: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集......' },
				{ img: '/static/indexListImg/indexListImg4.png', name: '《朝花夕拾2》', desc: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集......' },
				{ img: '/static/indexListImg/indexListImg4.png', name: '《朝花夕拾2》', desc: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集......' }
			]
		};
	}
};
</script>

<style></style>
