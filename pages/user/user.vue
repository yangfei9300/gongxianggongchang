<template>
	<view>
		
		<view class="roww center_center p-all-25"  v-if="wanshan"
		style="background-color: #1F5197;" @click.stop="toPhone"
		>
			<!-- <image :src="userInfo.headimg" mode="aspectFill" class="w-122 h-122" style="border-radius: 50%;"></image> -->
			<view class="w-25"></view>
			<view style="color: white;">{{wanshan.c_name}}</view>
			<view class="allline"></view>
		</view>
		<!-- <view class="roww center_center p-all-25 pore"  v-else
		style="background-color: #1F5197;" 
		>
			<view style="color: white;">请先授权</view>   
			<button style="width: 100%;height: 100%;background-color: red;top: 0rpx;left: 0rpx;opacity: 0;" 
			open-type="getPhoneNumber" @getphonenumber="gtePhone"
			class="poab"></button>
		</view> -->
		<view class="h-40"></view>
		<view class="colonn">
			<view class="roww border_bottom center_center p-bottom-20"
			style="margin:20rpx 0rpx 20rpx  0rpx;"
			@click.stop="toupdateInfo"
			>
				<view class="w-37"></view>
				<image src="/static/0bbd248bf7ab9cfbece664b98646984.png" 
				class="w-40 h-40"></image>
				<view class="w-20"></view>
				<view class="">完善信息</view>
				<view class="allline"></view>
				<image src="/static/youjiantou.png" class="w-33 h-33"></image>
				<view class="w-28"></view>
			</view>
			<view class="roww border_bottom center_center p-bottom-20"
			style="margin:20rpx 0rpx 20rpx  0rpx;"
			@click.stop="toorder"
			>
				<view class="w-37"></view>
				<image src="/static/c3500f1dfd75770ed079bd6448102ed.png" 
				class="w-40 h-40"></image>
				<view class="w-20"></view>
				<view class="">订单信息</view>
				<view class="allline"></view>
				<image src="/static/youjiantou.png" class="w-33 h-33"></image>
				<view class="w-28"></view>
			</view>
			<view class="roww border_bottom w-750 center_center p-bottom-20 pore"
			style="margin:20rpx 0rpx 20rpx  0rpx;"
			>
			<view class="w-30"></view>
				<view class="roww w-700">
					<!-- <view class="w-37"></view> -->
					<image src="/static/dadianhua.png" 
					class="w-40 h-40"></image>
					<view class="w-20"></view>  
					<view class="">联系我们</view>
					<view class="allline"></view>
					<image src="/static/youjiantou.png" class="w-33 h-33"></image>
					<view class="w-28"></view>
				</view>
				<button open-type="contact" 
			style="width: 100%;height: 100%;background-color: red;position: absolute;left: 0rpx;top: 0rpx;opacity: 0;"></button>
			</view>
			
			<view class="roww border_bottom fs-30 center_center p-bottom-20"
			style="margin:20rpx 0rpx 20rpx  0rpx;" v-if="isYouhuiquan>=0"
			>
				<view class="w-37"></view>
				<image src="/static/youhuiquan.png" 
				class="w-40 h-40"></image>
				<view class="w-20"></view>
				<view class="">优惠券金额：88元</view>
				<view class="allline"></view>
				<view v-if="isYouhuiquan==0" style="font-weight: bold;">未领取</view>
				<view v-if="isYouhuiquan==1" style="font-weight: bold;color: green;">已领取</view>
				<view v-if="isYouhuiquan==2" style="font-weight: bold;color: red;">已使用</view>
				<view class="w-20"></view>
			</view>
			
		</view>
		
		<view class="colonn center_center huuibeijing" v-if="isUserSHow">
			<view class="colonn w-600 br-20 h-500 background1 colonn center_center">
				<view class="p-all-30" @click.stop="toImg">
					<image 
					v-if="form1.headimg&&form1.headimg!=''" 
					:src="form1.headimg" class="w-100 h-100"></image>
					<image
					v-else
					src="../../static/shanmgchuan.jpg" class="w-100 h-100"></image>
				</view>
				
				<view class="roww border_bottom p-all-30">
					<view>昵称</view>
					<view class="w-20"></view>
					<view>
						<input v-model="form1.nickname" placeholder="请输入昵称" />
					</view>
				</view>
				<view class="h-40"></view>
				<view class="bopttombt" @click.stop="toYrteUser">确认授权</view>
			</view>
		</view>
		
		<!-- <block v-if="!isUserSHow">
			<view class="roww center_center w-750"
			style="position: fixed;bottom: 100rpx;"  
			v-if="!userPhone">
				<view class="btts">自动授权</view>
				<button style="width: 100%;height: 100%;background-color: red;top: 0rpx;left: 0rpx;opacity: 0;"
				open-type="getPhoneNumber" @getphonenumber="gtePhone"
				class="poab"></button>
			</view>
			<view class="roww center_center w-750"
			style="position: fixed;bottom: 100rpx;"  @click.stop="toUsrinf" 
			v-if="!userPhone">
				<view class="btts">自动授权</view>
			</view>
		</block>   -->
		<!-- <block v-if="!isUserSHow"> -->
			<!-- <view class="roww center_center w-750"
			style="position: fixed;bottom: 100rpx;"  
			v-if="!userPhone">
				<view class="btts">自动授权</view>
				<button style="width: 100%;height: 100%;background-color: red;top: 0rpx;left: 0rpx;opacity: 0;"
				open-type="getPhoneNumber" @getphonenumber="gtePhone"
				class="poab"></button>
			</view>
			<view class="roww center_center w-750"
			style="position: fixed;bottom: 100rpx;"  @click.stop="toUsrinf" 
			v-else-if="!wanshan.c_name">  
				<view class="btts">自动授权</view>
			</view> -->
		<!-- </block>   -->
		
		<view class="roww center_center">
			<view class="line11"></view>
			<view class="w-10"></view>
			<view style="color: #c9c9c9;" class="fs-25">软著专利，侵权必究</view>
			<view class="w-10"></view>
			<view class="line11"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{},
				form1:{
					'headimg':"",
					'nickname':"",
					'c_phone':""
				},
				isUserSHow:false,
				wanshan:null,
				userPhone:null,   
				isYouhuiquan:-1,
			}
		},
		onLoad(){
			this.userInfo=uni.getStorageSync("userInfo")
			
		},
		onShow() {
			this.wanshan=uni.getStorageSync("wanshan");
			this.userInfo=uni.getStorageSync("userInfo")
			var userPhone=uni.getStorageSync("userPhone");
			var userForm1=uni.getStorageSync("userForm1");
			this.userPhone=userPhone;
			// if(userPhone&&!userForm1){  
			// 	this.userPhone=userPhone;
			// 	this.isUserSHow=true;
			// }
			this.getCouponStatus();
		},
		methods: {
			
			// 获取优惠券状态 getCouponStatus
			getCouponStatus(){
				var data={
					'openid1':uni.getStorageSync("userInfo").openid1
				}
				this.$axios
					.axios('POST', this.$paths.getCouponStatus, data)
					.then(res => {
						console.log("结果",res)
						if(res.code==1){
							this.isYouhuiquan=res.data;
						}else{
							this.$tools.showToast(res.info);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			
			savePhone(c_phone){
				var data = {};
				data.openid1=uni.getStorageSync("userInfo").openid1;
				data.c_phone=c_phone
				this.$axios
					.axios('POST', this.$paths.companyInfoUpdate, data)
					.then(res => {
						if(res.code==1){
							
						}else{
							this.$tools.showToast(res.info);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			toUsrinf(){
				uni.navigateTo({
					url:"/pages/updateUserInfo/updateUserInfo"
				})
			},
			
			toYrteUser(){
				if(this.form1.headimg==""){
					this.$tools.showToast("请上传头像");
					return false;
				}
				if(this.form1.nickname==""){
					this.$tools.showToast("请输入昵称");
					return false;
				}
				this.isUserSHow=!this.isUserSHow;
				uni.setStorageSync("userForm1",this.form1);
				uni.navigateTo({
					url:"/pages/updateUserInfo/updateUserInfo"
				})
			},
			toImg(){
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success:  (res)=> {
						if(res.tempFilePaths.length>0){
							uni.uploadFile({
										url: this.$paths.file1Upload, //仅为示例，非真实的接口地址
										filePath: res.tempFilePaths[0],
										name: 'file',
										success: (uploadFileRes) => {
											console.log(uploadFileRes.data);
											var jons=JSON.parse(uploadFileRes.data);
											this.form1.headimg=jons.data.url;
											console.log(jons,jons.data.url);
										}
									});
						}
					}
				});
			},
			toUploadimg(){
				var data ={};
				data.openid1=uni.getStorageSync("userInfo").openid1
				this.$axios
					.axios('POST', this.$paths.file1Upload, data)
					.then(res => {
						if(res.code==1){
							this.form=res.data;
							var userPhone=uni.getStorageSync("userPhone");
							if(userPhone){ 
								console.log("有手机号",userPhone);
								this.form.c_phone=userPhone;
							}
						}else{
							this.$tools.showToast(res.info);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			
			
			
			
			gtePhone(resPhone){
				uni.login({
					success: (res) => {
						console.log("电话",res,resPhone);
						var obg={
							code:res.code,
							encryptedData :resPhone.detail.encryptedData, 
							iv:resPhone.detail.iv, 
						}
						this.toUrlPhone(obg)
					}
				})
			},
			toUrlPhone(obg){
				var data=obg
				this.$axios
					.axios('POST', this.$paths.getPhone, data)
					.then(res => {
						console.log("结果",res)
						if(res.code==1){
							console.log("收集癖",res);
							uni.setStorageSync("userPhone",res.data)
							this.savePhone(res.data)
							uni.navigateTo({
								url:"/pages/updateUserInfo/updateUserInfo"
							})
							// this.isUserSHow=true;
						}else{
							this.$tools.showToast(res.info);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			toorder(){
				uni.navigateTo({
					url:"/pages/orders/orders"
				})
			},
			toupdateInfo(){
				uni.navigateTo({
					url:"/pages/updateUserInfo/updateUserInfo"
				})
			}
		}
	}
</script>

<style>
@import url(user.css);
</style>
