import Vue from 'vue'//像这种是有一个入口文件的，直接简写vue
import App from './App'
import store from './store/index.js'
import StatusBar from './components/statusBar.vue';
Vue.config.productionTip = false

App.mpType = 'app'
// 把全局变量丢在原型上
Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight
Vue.prototype.$windowHeight = uni.getSystemInfoSync().windowHeight;
Vue.prototype.$store = store
const app = new Vue({
	store, // 这里有必要吗
	...App
})
Vue.component("StatusBar", StatusBar)
app.$mount()
