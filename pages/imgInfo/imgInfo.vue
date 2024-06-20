<template>
	<view>
		<!-- <rich-text :nodes="info.content"></rich-text> -->
		<view class="colonn">
			<view class="listitem border_bottom roww center_center" v-for="(item,index) in list"
			@click.stop="toInfo(item)"
			>
				<view class="leftname txtShowLength">{{item.name}}</view>
				<view class="allline"></view>
				<image src="/static/youjiantou.png" class="w-30 h-30"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code:"",
				info:{},
				list:[]
			}
		},
		onLoad(options){
			this.code=options.code;
			// this.getInfo()  
			this.getPictureList();
		},
		methods: {
			toInfo(item){
				uni.showLoading({
					title:"加载中",
				})
				 wx.downloadFile({
				        url: item.pdf,      //要预览的PDF的地址
				        success: function (res) {
				          if (res.statusCode === 200) {   //成功
				            var Path = res.tempFilePath //返回的文件临时地址，用于后面打开本地预览所用
				            wx.openDocument({
				              filePath: Path, //要打开的文件路径
				              success: function (res) {
				                console.log('打开PDF成功');
				              }
				            })
				          }
				        },
				        fail: function (res) {
				          console.log(res); 
				        },
						complete() {
							uni.hideLoading()
						}
				      })
			},
			getPictureList(){
				var data = {
					'cate_id':this.code
				};
				this.$axios
					.axios('POST', this.$paths.getPictureListNew, data)
					.then(res => {
						this.list=res.data;
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			
			getInfo(code){
				var data = {
					code:this.code
				};
				this.$axios
					.axios('POST', this.$paths.getPictureInfo, data)
					.then(res => {
						console.log('轮播图颜色', res);
						this.info=res.data;
						this.info.content=this.$tools.formatRichText(this.info.content);
						uni.setNavigationBarTitle({
							title:res.data.name
						})
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			}
		}
	}
</script>

<style>


.listitem{
	width: 719rpx;
	height: 109rpx;
	background: #FFFFFF;
	border-radius: 21rpx 21rpx 21rpx 21rpx;
	opacity: 1;
	padding:37rpx 25rpx;
	margin:15rpx;
}

.bottomalert{
	width: 749rpx;
	height: 803rpx;
	background: #FFFFFF;
	border-radius: 40rpx 40rpx 0rpx 0rpx;
	opacity: 1;
	position: absolute;bottom: 0rpx;
	left: 0rpx;
}
</style>
