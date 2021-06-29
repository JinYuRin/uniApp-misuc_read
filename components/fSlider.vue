<template>
	<view style="height: 44px;" class="flex-1 flex align-center position-relative">
		<!-- 默认flex，flex-1使其占满整个空间了 -->
		<view class="flex-1 rounded-circle" style="height: 3px;"
		:style="{ 'background-color': runwayColor }">
			<!-- 沃日，他妈的自己计算的宽度，不过也很正常
				flex-1导致这个元素的width是不显示的，获取dom也没用啊，只能计算了
				另外还能用provide和inject组件传递，是所有后代元素都可以传递
				-->
			<view class="bg-main rounded-circle" :style="'height: 3px;width:' + 100 + 'px;'"></view>
		</view>
		<!--position-absolute脱离文档流直接在空间中定位 至于如何使用拖动事件呢，嘿嘿，又能学多一招了 -->
		<view class="position-absolute bg-main rounded-circle" :style="'width: 14px;height: 14px;left:' + 100 + 'px ;'"></view>
	</view>
</template>

<script>
export default {
	props: {
		runwayColor: {
			type: String,
			default: 'rgba(255,255,255,0.5)'// 参数是反射的光色，满255就是全反射，即白色
		}
	}
};
// export default {
// methods: {
// 	touchstart(e) {
// 		if (this.v.duration === 0) {
// 			return;
// 		}
// 		// console.log(e.changedTouches[0].screenX-44);
// 		this.emitSlide(e, 'start');
// 	},
// 	touchmove(e) {
// 		if (this.v.duration === 0) {
// 			return;
// 		}
// 		// console.log(e.changedTouches[0].screenX);
// 		this.emitSlide(e, 'move');
// 	},
// 	touchend(e) {
// 		if (this.v.duration === 0) {
// 			return;
// 		}
// 		this.emitSlide(e, 'end');
// 	},
// 	// 	触摸被中断
// 	touchcancel(e) {
// 		this.touchend(e);
// 	},
// 	emitSlide(e, type) {
// 		// console.log(e.changedTouches[0].screenX);
// 		let sliderX = e.changedTouches[0].screenX - 44;
// 		if (sliderX < 0) {
// 			sliderX = 0;
// 		} else if (sliderX > this.width) {
// 			sliderX = this.width;
// 		}
// 		this.sliderX = sliderX;
// 		let timePercent = this.sliderX / this.width;
// 		this.$emit('slide', { timePercent, type });
// 		// 得到时间占比传出去，改变duration就行了
// 	}
// },
// inject: ['v'],
// 	props: {
// 		currentTime: {
// 			type: Number,
// 			default: 0
// 		},
// 		duration: {},
// 		fullScreenStatus: {
// 			type: Boolean,
// 			default: false
// 		}
// 	},
// 	data() {
// 		return {
// 			width: 0,
// 			startX: 0,
// 			endX: 0,
// 			sliderX: 0
// 		};
// 	},
// 	created() {
// 		// console.log(this.v.windowWidth);
// 		// console.log(this.currentTime / this.duration);
// 		// console.log((this.width - 44 - 44 - 80) * (this.currentTime / this.duration));
// 		this.width = this.fullScreenStatus ? this.v.windowHeight-20 : this.v.windowWidth - 44 - 44 - 80;
// 		// this.sliderWidth = (this.currentTime / this.duration) * this.width;
// 	},
// 	computed: {
// 		// 仅读取,computed里面进去就不需要data写了
// 		sliderWidth: function() {
// 			return this.width * (this.currentTime / this.duration);
// 			// return (this.width - 44 - 44 - 80) * (this.currentTime / this.duration)=sliderWidth;
// 		},
// 		dotWidth: function() {
// 			//dot移动的总距离肯定要减去本身的宽度14
// 			return (this.width - 14) * (this.currentTime / this.duration);
// 		}
// 		// sliderX:function(){//一个像素点一秒
// 		// 	return this.endX-this.startX
// 		// }
// 	}
// };
</script>

<style></style>
