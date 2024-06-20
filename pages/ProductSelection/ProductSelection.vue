<template>
	<view>
		<swiper indicator-dots class="w-750 h-400" v-if="banners&&banners.length>0&&banners[0].length>0">
			<swiper-item  class="w-750 h-400" 
			@click.stop="toInfoBanner(item)" 
			v-for="(item,index) in banners[0]">
				<image :src="item.img"  class="w-750 h-400"></image>
			</swiper-item>
		</swiper>
		<view class="h-30"></view>
		<view class="huanhang">
			<view class="item colonn" 
			v-for="(item,index) in list" @click.stop="getGoodIngo(item.code,item)">
				<image :src="item.cover" class="imagesiw"></image>
				<view class="h-12"></view>
				<view class="goodname txtShowLength">{{item.remark}}</view>
				<view class="h-12"></view>
				<!-- <view class="goodname txtShowLength" style="color: #828282;">功率范围：{{item.remark}}</view> -->
				<!-- <view class="h-12"></view> -->
			</view>
		</view>
		<view class="h-50"></view>

		<view class="huuibeijing colonn center_center" v-if="alertShow" @click.stop="alertShowClick">
			<view class="alertviwe colonn pore" @click.stop="aaa">
				<image src="/static/14@2x.png" @click.stop="closeAl" class="aleerclosk w-57 h-57"></image>
				<view class="h-42"></view>
				<view class="colonn center_center">
					<view class="wansahntxt">完善信息</view>
					<view class="h-30"></view>
					<view class="colonn">
						<view>请先前往个人中心
						</view>
						<view>
							完善个人及企业信息
						</view>
						<view>
							完善后方可查看
						</view>
					</view>
					<view class="h-30"></view>
					<view class="bentiaozhuan" @click.stop="toupdate">
						立即前往
					</view>
				</view>
			</view>
		</view>

		<view class="bottomview">
			浏览量：{{numRead}}次
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
		

	</view>
</template>

<script>
	export default {
		data() {
			return {
				alertShow: false,
				list: [],
				wanshan: false,

				numRead: 0,
				banners:[],//轮播图
				showuquanAlert:false,
			}
		},
		onShareAppMessage: function () {
		
		    return {
		
		        
		
		    }
		
		},

		onLoad() {
			var isshoquan=uni.getStorageSync("isshoquan");
			if(!isshoquan){
				this.showuquanAlert=true;
			}
			this.getGoodsList();
		},
		onShow() {
			this.isAuthapi();
			this.alertShow = false;
			this.getRead();
			this.getBanner();
		},
		methods: {
			
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
			toInfoBanner(item){
				var obg={'type':item.goods_type};
				this.getGoodIngo(item.code,obg);
					
				
			},
			getBanner(){
				var data = {};
				this.$axios
					.axios('POST', this.$paths.homeSlider, data)
					.then(res => {
						if (res.code == 1) {
							this.banners = res.data;
						} else if (res.data == 1) {
							this.wanshan = false
						}
				
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			getRead() {
				// numRead
				var data = {};
				this.$axios
					.axios('POST', this.$paths.getClick, data)
					.then(res => {
						if (res.code == 1) {
							this.numRead = res.data.click
						} else if (res.data == 1) {
							this.wanshan = false
						}

					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 判断是否需要完善信息
			isAuthapi() {
				var data = {
					'openid1': uni.getStorageSync("userInfo").openid1
				};
				this.$axios
					.axios('POST', this.$paths.isAuthapi, data)
					.then(res => {
						if (res.data == 0) {
							this.wanshan = true
						} else if (res.data == 1) {
							this.wanshan = false
						}

					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},



			closeAl() {
				this.alertShow = false;
			},
			toupdate() {
				uni.navigateTo({
					url: "/pages/updateUserInfo/updateUserInfo"
				})
			},
			aaa() {},
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
			getGoodsList() {
				var data = {};
				this.$axios
					.axios('POST', this.$paths.getGoodsList, data)
					.then(res => {
						console.log('轮播图颜色', res);
						this.list = res.data;
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			alertShowClick() {
				this.alertShow = !this.alertShow;
			},
		}
	}
</script>

<style>
	@import url(ProductSelection.css);
</style>