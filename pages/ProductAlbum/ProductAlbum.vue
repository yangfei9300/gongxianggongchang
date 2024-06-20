<template>
	<view>
		
		<view class="topview">
			<image src="/static/884d58e032d51f7dccb221e318af9c3 1@2x.png "
			 class="w-280 h-35" 
			 style="position:absolute;bottom:59rpx;left: 15rpx;"
			></image>
		</view>
		
		<view class="colonn">
			<view class="listitem roww center_center" v-for="(item,index) in list"
			@click.stop="toInfo(item.id)"
			>
				<view class="leftname txtShowLength">{{item.name}}</view>
				<view class="allline"></view>
				<image src="/static/youjiantou.png" class="w-30 h-30"></image>
			</view>
		</view>
		
		
		<view v-if="loginAlert" class="huuibeijing" @click.stop="loginAlertClick">
			<view class="bottomalert colonn center_center" 
			@click.stop="aaaa"
			>
				<view class="titleeealert">获取你的昵称、头像</view>
				<button class="uploadbrnupload m-top-20 m-bottom-20" 
					open-type="chooseAvatar"  @chooseavatar="bindchooseavatar">上传头像</button>
				
				<view class="pore w-163 h-163" style="top: 0rpx;">
					<image src="/static/Ellipse 326.png" 
					v-if="userInfo.headimg==''" 
					style="left: 0rpx;top: 0rpx;" class="headimg poab"></image>
					<image :src="userInfo.headimg" 
					@click.stop="uploadImg" v-else class="headimg poab"></image>
					<button 
					style="width: 100%;height: 100%;position: absolute;top: 0rpx;left: 0rpx;opacity: 0"
					open-type="chooseAvatar"  @chooseavatar="bindchooseavatar"
					></button>
				</view>
				
				<view class="h-70"></view>
				<view class="inputnickname center_center roww">
					<input placeholder="请输入你的昵称" 
					type="nickname"  
					@input="iuinput"
					v-model="userInfo.nickname"
					class=" allline txtShowLength text_align1_r"
					bindnicknamereview="bindnicknamereview"
					
					 />
				</view><view class="h-70"></view>
				<view class="loginbrn roww center_center"@click.stop="updateInfo">
					<view class="color6_r" >登录</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					// {'id':1,'name':'美致捷画册'},
					{'id':2,'name':'压缩机画册'},
					{'id':3,'name':'电控画册'},
					{'id':4,'name':'阀件画册'},
				],
				loginAlert:false,
				
				wanshan:false,//不需要完善
				userInfo:{},  
			}
		},
		onLoad() {
			// this.getPictureList();
			setTimeout(res=>{
				this.userInfo=uni.getStorageSync("userInfo")
				this.isAuthapi()
			},1000)
		},
		onShow(){
			setTimeout(res=>{
				this.isAuthapi()
				this.userInfo=uni.getStorageSync("userInfo")
			},1000)
		},
		methods: {
			iuinput(res){ 
				console.log("asd",res)
			},
			bindnicknamereview(res){
				this.userInfo.nickname=res.detail.value;
			},
			bindchooseavatar(res){
				console.log('res.headimg.detail.avatarUrl',res)
				this.uploadImg(res.detail.avatarUrl);
			},
			aaaa(){},
			loginAlertClick(){
				this.loginAlert=!this.loginAlert;
			},
			updateInfo(){
				if(this.userInfo.headimg==""){
					this.$tools.showToast("请上传头像");
					return false;
				}
				if(this.userInfo.nickname==""){
					this.$tools.showToast("填写昵称");
					return false;
				}
				var data = this.userInfo;
				data.openid=data.openid1
				this.$axios
					.axios('POST', this.$paths.userInfoUpdate, data)
					.then(res => {
						if(res.code==1){
							this.$tools.showToast("信息完善成功");
							var userInfo=uni.getStorageSync("userInfo")
							uni.setStorageSync("userInfo",userInfo);
							this.wanshan=false;
							this.loginAlert=false;
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			//上传头像
			uploadImg(header){
				
				uni.uploadFile({
							url: this.$paths.file1Upload,//上传图片的地址
							filePath: header,//这里是图片的本地文件路径列表（选择图片成功的时候可以拿到,在上边的success回调中res.tempFilePaths即可拿到）
							name: 'file',//上传的名字叫啥都行
							success:(res1)=> {
								console.log("穿结果",res1)
								res1=JSON.parse(res1.data)
								this.userInfo.headimg=res1.data.url
							}
					})
				
				// uni.chooseImage({
				// 				count: 1, //默认9
				// 				sizeType: ['original', 'compressed'],
				// 				sourceType: ['album', 'camera'],
				// 				success: (res) => {
				// 					console.log(res.tempFilePaths,'图片的本地文件路径列表');
				// 					if(res.tempFilePaths.length>0){
				// 						uni.uploadFile({
				// 									url: this.$paths.file1Upload,//上传图片的地址
				// 									filePath: res.tempFilePaths[0],//这里是图片的本地文件路径列表（选择图片成功的时候可以拿到,在上边的success回调中res.tempFilePaths即可拿到）
				// 									name: 'file',//上传的名字叫啥都行
				// 									success:(res1)=> {
				// 										console.log("穿结果",res1)
				// 										res1=JSON.parse(res1.data)
				// 										this.userInfo.headimg=res1.data.url
				// 									}
				// 							})
				// 					}
				// 				}
				// 			});
			},
			// 判断是否需要完善信息
			isAuthapi(){
				var data = {
					'openid1':uni.getStorageSync("userInfo").openid1
				};
				this.$axios
					.axios('POST', this.$paths.isAuthapi, data)
					.then(res => {
						if(res.data==0){
							this.wanshan=true
						}
						
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 前往详情  
			toInfo(code){
				// if(this.wanshan){
				// 	this.loginAlert=true;
				// 	return
				// }
				console.log("asd",this.userInfo.headimg=="",this.userInfo.nickname=="")
				if(this.userInfo.headimg==""||this.userInfo.nickname==""){
					this.$tools.showToast("请完善个人信息");
					this.loginAlert=true;
					return false;
				}  
				uni.navigateTo({
					url:"/pages/imgInfo/imgInfo?code="+code
				})
			},
			// 获取画册列表
			getPictureList(){
				var data = {
				};
				this.$axios
					.axios('POST', this.$paths.getPictureList, data)
					.then(res => {
						console.log('轮播图颜色', res);
						this.list=res.data;
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
		}
	}
</script>

<style>
@import url(ProductAlbum.css);
</style>
