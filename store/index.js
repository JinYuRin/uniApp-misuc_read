import Vue from 'vue'
import Vuex from 'vuex'
import audio from './audio/audio.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	mutations: {}, // 同步操作
	actions: { // 所有的actions都是异步操作来的
		navigateTo(store, pageName) {
			console.log(pageName)
			uni.navigateTo({
				url: `/pages/${pageName}/${pageName}`
			});
		}
	},
	modules: { // 直接引入模块
		audio
	}
})
