//音频资源
import resourecs from './musicResourecs.js';
let musics = resourecs.musicResourecs;
let audio;
// let currentAudioIndex = 1 // 记录当前播放歌曲的index，如果你这个需要丢到组件去的话就要丢到state去
// 倘若一个组件或者对象是全局的，就可以用vuex进行管理，还可以分模块管理
// 原来这个audio被下面引用了，所以他不需要被记录在state的，原来actions他们不是仅仅操作state的
export default {
	state: {
		num: 1,
		playStatus: false, // 播放状态
		currentTime: 0, // 这个在切歌的时候归零，在onTimeUpdate实时更新
		duration: 0, // 这个在切歌的时候和初始化的时候更新
		// (先检查是不是在play()的时候才会得到duration，总觉得是在onTimeUpdate的时候才得到)
		// currentAudioInfo: musics[currentAudioIndex],
		currentAudioIndex: 1 // 我可以在state里记录简单的信息比如索引,用Getters进行引用
		// 记录当前播放歌曲的信息这个肯定要丢到组件去
		// 这个肯定要手动更新的，currentAudioInfo:musics[currentAudioIndex]
		// 因为currentAudioIndex不是响应式的
	},
	getters: { // 在这里直接记录一些数据，其实就是类似state，只是对state的数据做具体引用啊
		// 这里可以在vue里面mapGetter获取啊
		audioName(state) {
			return musics[state.currentAudioIndex].name // 这个currentAudioIndex最好记录在index，而currentAudioInfo要消去
		},
		singerName(state) {
			return musics[state.currentAudioIndex].singer.name // 这个currentAudioIndex最好记录在index，而currentAudioInfo要消去
		},
		audioList(state) {
			return musics
		}
	},
	actions: {
		/* 
		 初始化audio播放器，commit了addAudioEvent后执行onPlay之类的函数是在添加后台监听事件
		 沃日，还有这种玩法
		*/
		init({
			commit,
			state
		}) { // 我认为audio既然是全局的播放器，必然在这里初始化
			if (audio) {
				return
			}
			console.log('初始化播放器')
			audio = uni.createInnerAudioContext()
			audio.src = musics[state.currentAudioIndex].src // 初始化第一首为MJ
			// 提交mutations监听
			commit('addAudioEvent')
		}
	},
	mutations: {
		selectAudio(state, audioIndex) {
			audio.stop()
			state.currentAudioIndex = audioIndex
			audio.src = musics[state.currentAudioIndex].src
			// 更改当前audio的Index和信息
			audio.play()
			state.playStatus = true // 无论是暂停切歌还播放切歌，都要playStatus = true
		},
		/**
		 * @param {Object} state
		 * 上一首歌曲
		 */
		audioLast(state) {
			if (state.currentAudioIndex === 0) {
				uni.showToast({
					icon: 'none',
					title: '已经是第一首了'
				})
				return
			}
			audio.stop()
			// 更改当前audio的Index和信息
			state.currentAudioIndex = state.currentAudioIndex - 1
			// state.currentAudioInfo = musics[currentAudioIndex]
			audio.src = musics[state.currentAudioIndex].src
			// 更改当前audio的Index和信息
			audio.play()
			state.playStatus = true // 无论是暂停切歌还播放切歌，都要playStatus = true
		},
		/**
		 * @param {Object} state
		 * 下一首歌曲
		 */
		audioNext(state) {
			if (state.currentAudioIndex === musics.length) {
				uni.showToast({
					icon: 'none',
					title: '已经是最后一首了'
				})
				return
			}
			audio.stop()
			state.currentAudioIndex = state.currentAudioIndex + 1
			// state.currentAudioInfo = musics[currentAudioIndex]
			audio.src = musics[state.currentAudioIndex].src // 不是无法播放，是源的问题
			audio.play()
			state.playStatus = true // 无论是暂停切歌还播放切歌，都要playStatus = true
		},
		/**
		 * @param {Object} state
		 * 播放或暂停歌曲
		 */
		audioPlayOrPause(state) {
			// 疯狂使用解构小心翻车啊，这响应式对象你别随便解构
			// 会丢失原本this指向等等各种问题
			// console.log('准备src播放')
			// console.log(state.playStatus)
			if (state.playStatus) { // 播放状态转暂停
				state.playStatus = false
				audio.pause()
			} else {
				state.playStatus = true // 暂停状态转播放
				// audio.src = musics[1].src // 晕死，这里仅仅是绑定src而已啦，害，我傻掉了
				// 这个src不应该在这个函数里赋值
				audio.play()
			}

		},
		// 销毁audio停止监听
		destruction() {
			audio.offPlay();
			audio.offPause();
			audio.offStop();
			audio.offEnded();
			audio.offError()
		},
		// 监听 玛德进入新的世界了
		addAudioEvent() {
			console.log('监听播放器事件');
			console.log(audio);
			//播放事件
			audio.onPlay(() => {
				console.log('开始播放');
			})
			//暂停事件
			audio.onPause(() => {
				console.log('暂停播放');
			})
			//停止事件
			audio.onStop(() => {
				console.log('停止播放');
			})
			//播放结束事件
			audio.onEnded(() => {
				console.log('播放结束');
			})
			//播放错误事件
			audio.onError((res) => {
				console.log(res.errCode);
				uni.showToast({
					icon: 'none',
					title: '播放出错'
				})
			})
			/**
			 * 获取时间
			 */
			audio.onTimeUpdate(() => {
				// 傻了吧，这个回调函数根本没有参数，你只是调用函数而已，不是设计函数
				// 你调用的回调函数的参数是预先设置好的
				// console.log(audio.currentTime, audio.duration)
			})
		}
	}
}
