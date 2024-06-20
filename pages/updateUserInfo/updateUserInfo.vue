<template>
	<view>
		<!-- <view class="inpurview roww roww center_center " style="padding: 50rpx 10rpx;height: 150rpx;" >
			<view class="w-26"></view>
			<view class="w-190">头像：</view>
			<view class="allline"></view>
			<image :src="form1.headimg" mode="aspectFill" v-if="form1.headimg&&form1.headimg!=''" @click.stop="toImg" class="w-100 h-100" style="border-radius: 50%;"></image>
			<image src="../../static/shanmgchuan.jpg" v-else @click.stop="toImg" class="w-100 h-100" style="border-radius: 50%;"></image>
			<view class="w-26"></view>
		</view>
		<view class="inpurview roww roww center_center " style="padding: 50rpx 10rpx;height: 150rpx;" >
			<view class="w-26"></view>
			<view class="w-190">昵称：</view>
			<input placeholder="请输入昵称" v-model="form1.nickname" class="allline" />
			<view class="w-26"></view>
		</view> -->
		
		<view class="inpurview roww roww center_center">
			<view class="w-26"></view>
			<view class="w-190">公司名称：</view>
			<input placeholder="请输入公司名称" v-model="form.consignee" class="allline" />
			<view class="w-26"></view>
		</view>
		<view class="inpurview roww roww center_center">
			<view class="w-26"></view>
			<view class="w-190">公司地址：</view>
			<input placeholder="请输入公司地址" v-model="form.c_address"  class="allline" />
			<view class="w-26"></view>
		</view>
		<view class="inpurview roww roww center_center">
			<view class="w-26"></view>
			<view class="w-190">姓名：</view>
			<input placeholder="请输入姓名" v-model="form.c_name"   class="allline" />
			<view class="w-26"></view>
		</view>
		<view class="inpurview roww roww center_center">
			<view class="w-26"></view>
			<view class="w-190">职务：</view>
			<input placeholder="请输入职务"v-model="form.job"  class="allline" />
			<view class="w-26"></view>
		</view>
		<view class="inpurview roww roww center_center">
			<view class="w-26"></view>
			<view class="w-190">联系电话：</view>
			<input placeholder="请输入联系电话"v-model="form.c_phone"   class="allline" />
			<view class="w-26"></view>
		</view>
		<view class="h-20"></view>
		<view class="roww center_center">
			<view class="baocunxinia" @click.stop="toSubmit">保存</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					'c_name':'',
					'c_address':'',
					'consignee':'',
					'job':'',
					'c_phone':'',
					'nickname':'',
					'headimg':''
				},
				form1:{
					'headimg':"",
					'nickname':""
				}
			}
		},
		onLoad(){
			var wanshan=uni.getStorageSync("wanshan")
			if(wanshan){
				this.form=wanshan
			}
			var userPhone=uni.getStorageSync("userPhone");
			if(userPhone){ 
				console.log("有手机号",userPhone);
				this.form.c_phone=userPhone;
			}
			var userForm1=uni.getStorageSync("userForm1")
			if(userForm1){
				this.form1=userForm1
			}
			
			this.$forceUpdate()
			
			this.getCompanyInfo();
		},
		methods: {
			
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
			
			
			getCompanyInfo(){
				var data ={};
				data.openid1=uni.getStorageSync("userInfo").openid1
				this.$axios
					.axios('POST', this.$paths.getCompanyInfo, data)
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
			toSubmit(){
				if(!this.isSUbmit()){
					return false;
				}  
				var data = this.form;
				data.nickname=data.c_name;
				data.headimg=this.form1.headimg;
				data.openid1=uni.getStorageSync("userInfo").openid1
				this.$axios
					.axios('POST', this.$paths.companyInfoUpdate, data)
					.then(res => {
						if(res.code==1){
							uni.setStorageSync("wanshan",data)
							var userInfo=uni.getStorageSync("userInfo");
							userInfo.headimg=data.headimg;
							userInfo.nickname=data.nickname;
							uni.setStorageSync("userInfo",userInfo);
							
							
							this.$tools.showToast(res.info);
							
							var gooodInfoLogin=uni.getStorageSync("gooodInfoLogin");
							if(gooodInfoLogin){
								this.getGoodIngo(gooodInfoLogin.code,gooodInfoLogin);
							}else{
								setTimeout(res=>{
									uni.navigateBack({
										delta:1
									})
								},1000)
							}
							
						}else{
							this.$tools.showToast(res.info);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			
			getGoodIngo(code, item) {
				console.log(item);
				// if (this.wanshan) {
				// 	this.alertShowClick()
				// 	return false;
				// }
				if (item.type == 4) {
					uni.navigateTo({
						url: "/pages/goodInfo1/goodInfo1?code=" + code
					})
					return false;
				}
				if (item.type ==5) {
					uni.navigateTo({
						url: "/pages/goodInfo2/goodInfo2?code=" + code
					})
					return false;
				}
				if (item.type ==6) {
					uni.navigateTo({
						url: "/pages/goodInfo3/goodInfo3?code=" + code
					})
					return false;
				}
				uni.setStorageSync("goodInfo", item);
				uni.navigateTo({
					url: "/pages/goodInfo/goodInfo?code=" + code
				})
			},
			
			isSUbmit(){
				// if(this.form1.headimg==""){
				// 	this.$tools.showToast("请上传头像");
				// 	return false;
				// }  
				// if(this.form1.nickname==""){
				// 	this.$tools.showToast("请输入昵称");
				// 	return false;
				// }
				console.error("阿萨德",)
				if(!this.form.consignee||this.form.consignee==""){
					this.$tools.showToast("请输入公司名称");
					return false;
				}
				if(!this.form.c_address||this.form.c_address==""){
					this.$tools.showToast("请输入公司地址");
					return false;  
				}
				if(!this.form.c_name||this.form.c_name==""){
					this.$tools.showToast("请输入姓名");
					return false;
				}
				if(!this.form.job||this.form.job==""){
					this.$tools.showToast("请输入职务");
					return false;
				}
				if(!this.form.c_phone||this.form.c_phone==""){
					this.$tools.showToast("请输入联系电话");
					return false;
				}
				return true;
				
			}
		}
	}
</script>

<style>
@import url(updateUserInfo.css);
</style>
