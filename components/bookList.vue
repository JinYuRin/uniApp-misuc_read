<template>
	<view class="mt-5 mx-3"><Book v-for="(i, index) in bookList" :key="index" :book="i"></Book></view>
</template>

<script>
import Book from './book.vue';
export default {
	props: {
		bookList: {
			type: Array
		}
	},
	components: { Book },
	name: 'bookList',
	data() {
		return {};
	}
};
</script>

<style></style>
