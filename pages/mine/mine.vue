<template>
	<view>
		<!--statusBar -->
		<StatusBar />
		<view class="flex align-center justify-between px-2 py-5">
			<view class="flex align-center">
				<image class="rounded-circle mr-2" src="../../static/user/user.jpg" style="width: 150rpx;height: 150rpx;"></image>
				<view class="font-lg font-weight-bolder flex-shrink">
					麦子
				</view>
			</view>
			<view style="background-color: rgba(0, 0, 0, 0.1);width: 200rpx;height: 70rpx;" class="flex align-center justify-center bg-light rounded-circle font-md font-weight-bolder">
				<text class="iconfont icon-bofang mr-1"></text>
				<text class="">我的客服</text>
			</view>
		</view>
		<view class="mt-2">
			<view>
				<view class="flex align-center justify-between px-2 py-1" hover-class="bg-light">
					<text class="font-lg text-light-muted">签到</text>
					<text class="font-lg iconfont icon-iconfonti"></text>
				</view>
				<view class="f-divider" />
			</view>
			<view>
				<view class="flex align-center justify-between px-2 py-1" hover-class="bg-light">
					<text class="font-lg text-light-muted">设置</text>
					<text class="font-lg iconfont icon-iconfonti"></text>
				</view>
				<view class="f-divider" />
			</view>
			<view>
				<view class="flex align-center justify-between px-2 py-1" hover-class="bg-light">
					<text class="font-lg text-light-muted">意见反馈</text>
					<text class="font-lg iconfont icon-iconfonti"></text>
				</view>
				<view class="f-divider" />
			</view>
			<view>
				<view class="flex align-center justify-between px-2 py-1" hover-class="bg-light">
					<text class="font-lg text-light-muted">切换账号</text>
					<text class="font-lg iconfont icon-iconfonti"></text>
				</view>
				<view class="f-divider" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		}
	}
</script>

<style>

</style>
