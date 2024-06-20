<script>  
	export default {
		onLoad() {
		},
		onLaunch: function() {
			uni.login({
				success:(res)=> {
					console.log("登录",res)
					var data = { 
						code:res.code
					};
					this.$axios
						.axios('POST', this.$paths.loginapi, data)
						.then(res => {
							uni.setStorageSync("userInfo",res.data);
						})
						.catch(err => {
							console.log('错误回调', err);
						});
				}
			})
			console.log('App Launch');
		},
		onShow: function() {	
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}     
	}  
</script>

<style  lang="scss">
	/*每个页面公共css */
	@import url("/style/style.css");
	@import url("/style/style_rpx.css");
	@import "/style/ty_style_scss.scss";
</style>
