<template>
	<view>
		
		<view class="colonn">
			<block v-for="(item,index) in imgs">
				<image  @click.stop="toIndex(index)"
				class="w-750 " mode="widthFix"
				:src="'https://shandongtibohui.zsyflive.com/profile/gxgc/'+imgs[index]" 
				></image>
				<image src="../../static/zixian.png" 
				class="w-750 h-10"></image>
			</block>
			
		</view>
		
		<view class="colonn center_center huuibeijing" style="z-index: 50000000;"
		 v-if="showuquanAlert">
			<view class="yinsitanh colonn center_center">
				<view style="font-weight: bold;">个人隐私保护提示</view>
				<view style="height: 10rpx;"></view>
				<view style="font-size: 30rpx;">
					我们会按照相关法律法规的规定及<text @click.stop="toyinsi"
						style="color: red;">《美致捷共享工厂》</text>，遵守正当合法、必要原则收集和使用你的个人信息。
					为了向你提供正常的服务，我们可能会申请相机、麦克风、存储照片，手机号，当前位置定位等权限，相应权限并不会默认开启或强制收集信息。权限开启后，你可以随时通过设置选项关闭权限。你不同意开启权限，将不会影响其他非相关业务功能的正常使用。
				</view>
				<view style="height: 20rpx;"></view>
				<view class="roww rowsa w-450">
					<view class="notongyi" @click.stop="showuquanAlertClick">不同意</view>
					<view class="tongyi pore roww center_center"
					>   
					<!-- @click="showuquanAlertClick1" -->
						<div>同意</div>
						<button id="agree-btn" open-type="getPhoneNumber" @getphonenumber="gtePhone"
							class="tongyisa"></button>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 优惠券 -->
		<view class="colonn center_center huuibeijing" v-if="isYouhuiquan==0">
			<image @click.stop="addYhq"
			class="w-500" mode="widthFix"
			src="https://shandongtibohui.zsyflive.com/profile/gxgc/fde4aad1bf4a1bda3a70bdf6aa41b67.png"></image>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			imgs: ['1.png', '2.png', '3.png','4.png'],
			
			showuquanAlert:false,
			isYouhuiquan:-1,
		};
	},
	onLoad() {
		var isshoquan=uni.getStorageSync("isshoquan");
		if(!isshoquan){
			this.showuquanAlert=true;
		}
		var userPhone=uni.getStorageSync("userPhone")
		if(userPhone){
			this.getCouponStatus();
		}
	},
	methods: {
		
		// 领取优惠券
		addYhq(){
			var data={
				'openid1':uni.getStorageSync("userInfo").openid1
			}
			this.$axios
				.axios('POST', this.$paths.getCoupon, data)
				.then(res => {
					if(res.code==1){
						this.$tools.showToast("领取成功");
						this.isYouhuiquan=1;
					}else{
						this.$tools.showToast(res.info);
						this.isYouhuiquan=1;
					}
				})
				.catch(err => {
					console.log('错误回调', err);
				});
		},
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
		
		showuquanAlertClick1(){
			uni.setStorageSync("isshoquan","Y")
			this.showuquanAlert=false;
			var userInfo=uni.getStorageSync("userInfo");
			if(!userInfo){
				uni.switchTab({
					url:"/pages/user/user"
				})
			}
			
		},
		showuquanAlertClick(){
			this.showuquanAlert=false;
		},
		toIndex(index){
			uni.navigateTo({
				url:"/pages1/lybInfo/lybInfo?index="+index
			})
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
						this.savePhone(res.data);
						// uni.navigateTo({
						// 	url:"/pages/updateUserInfo/updateUserInfo"
						// })
						// uni.switchTab({
						// 	url:"/pages/user/user"
						// })
						this.showuquanAlert=false;
						uni.setStorageSync("isshoquan","Y");
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
						this.getCouponStatus();
					}else{
						this.$tools.showToast(res.info);
					}
				})
				.catch(err => {
					console.log('错误回调', err);
				});
		},
	}
};
</script>

<style>
@import url(lyb.css);
</style>
