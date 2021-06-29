<template>
	<view>
		<!--statusBar可以通用 -->
		<StatusBar />
		<Myaudio></Myaudio>
		<!-- 搜索框封装 -->
		<SearchBox />
		<!-- swiper封装 -->
		<FSwiper :swiperImages="swiperImages"></FSwiper>
		<!-- 功能入口封装 -->
		<FunctionPort :functionPorts="functionPorts"></FunctionPort>
		<!-- recommend需要封装 -->
		<RecommendList :recommendBooks="recommendBooks"></RecommendList>
		<!-- 这个BookList可能需要封装 -->
		<block v-for="(i, index) in bookResources" :key="index">
			<!--template循环貌似无法:key="index" 只能block了 -->
			<!-- 作为插槽插入的时候才是v-slot:left的修饰符的形态而不是属性形态
				设计插槽的时候应该是name -->
			<ListHeader>
				<template v-slot:left>
					{{ i.headerTitle }}
				</template>
			</ListHeader>
			<BookList :bookList="i.bookList"></BookList>
		</block>
	</view>
</template>

<script>
import RecommendList from '../../components/recommendList.vue';
import SearchBox from '../../components/searchBox.vue';
import FunctionPort from '../../components/functionPort.vue';
import FSwiper from '../../components/fSwiper.vue';
import ListHeader from '../../components/list-header.vue';
import Book from '../../components/book.vue';
import BookList from '../../components/bookList.vue';
import Myaudio from '../../components/myaudio.vue';

export default {
	components: { Book, ListHeader, FSwiper, FunctionPort, SearchBox, RecommendList, BookList, Myaudio },
	data() {
		return {
			functionPorts: [
				{ iconId: 'icon-icon-test', iconColor: 'text-warning', desc: '看榜单' },
				{ iconId: 'icon-startRead', iconColor: 'text-hover-primary', desc: '听小说' },
				{ iconId: 'icon-icon09', iconColor: 'text-light-black', desc: '听音乐' },
				{ iconId: 'icon-zhishi', iconColor: 'text-success', desc: '听知识' }
			],
			recommendBooks: [
				{ img: '/static/Rebook/Rebook1.jpg', name: '西游记' },
				{ img: '/static/Rebook/Rebook2.jpg', name: '三国演义' },
				{ img: '/static/Rebook/Rebook3.jpg', name: '水浒传' }
			],
			bookResources: [
				{
					headerTitle: '人文',
					bookList: [
						{ img: '/static/indexListImg/indexListImg4.png', name: '《朝花夕拾2》', desc: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集......' },
						{ img: '/static/indexListImg/indexListImg4.png', name: '《朝花夕拾2》', desc: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集......' },
						{ img: '/static/indexListImg/indexListImg4.png', name: '《朝花夕拾2》', desc: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集......' }
					]
				},
				{
					headerTitle: '地理',
					bookList: [
						{ img: '/static/indexListImg/indexListImg4.png', name: '《朝花夕拾2》', desc: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集......' },
						{ img: '/static/indexListImg/indexListImg4.png', name: '《朝花夕拾2》', desc: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集......' },
						{ img: '/static/indexListImg/indexListImg4.png', name: '《朝花夕拾2》', desc: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集......' }
					]
				},
				{
					headerTitle: '历史',
					bookList: [
						{ img: '/static/indexListImg/indexListImg4.png', name: '《朝花夕拾2》', desc: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集......' },
						{ img: '/static/indexListImg/indexListImg4.png', name: '《朝花夕拾2》', desc: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集......' },
						{ img: '/static/indexListImg/indexListImg4.png', name: '《朝花夕拾2》', desc: '《朝花夕拾》原名《旧事重提》，是现代文学家鲁迅的散文集......' }
					]
				}
			],
			swiperImages: [
				{
					src: '/static/swiperImages/swipertab1.png'
				},
				{
					src: '/static/swiperImages/swipertab2.png'
				},
				{
					src: '/static/swiperImages/swipertab3.png'
				},
				{
					src: '/static/swiperImages/swipertab4.png'
				},
				{
					src: '/static/swiperImages/swipertab5.png'
				}
			]
		};
	},
	created() {}
};
</script>

<style></style>
