<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* #ifndef APP-NVUE */
	/* 引入官方样式库 */
	@import url("./common/uni.css");
	/* 引入animate动画库 */
	@import url("./common/animate.css");
	/* #endif */
	/* 引入free样式库 */
	@import url("./common/free.css");
	/* 引入全局样式库 */
	@import url("./common/common.css");
	/* #ifndef APP-NVUE */
	/* 引入自定义图标库 */
	@import url("./common/icon.css");
	/* #endif */
</style>
