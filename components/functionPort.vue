<template>
	<view class="flex justify-between">
		<view v-for="(i, index) in functionPorts" :key="index" class="flex-1 flex flex-column align-center justify-center">
			<MyIcon :iconId="i.iconId" :iconColor="i.iconColor"></MyIcon>
			<view class="text-light-muted font ">{{ i.desc }}</view>
		</view>
	</view>
</template>

<script>
import MyIcon from './myIcon.vue';
export default {
	props: {
		functionPorts: {
			type: Array
		}
	},
	name: 'functionPort',
	components: { MyIcon },
	data() {
		return {};
	}
};
</script>

<style></style>
