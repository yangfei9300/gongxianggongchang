<template>
	<view>
		<view class="colonn" style="padding:26rpx 15rpx;"
		v-for="(item,index) in orderList"
		@click.stop="showphoneClick"
		>
			<view class="riqi">{{item.date}}</view>
			<view class="h-30"></view>
			<!-- <view class="listview roww center_center m-bottom-20"
			v-for="(item1,index1) in item.order" :key="index"
			>
				<view class="w-26"></view>
				<view class="goodinic">商品信息：</view>
				<view class="colonn">
					<view class="goodname txtShowLength">{{item1.goods_name}}</view>
				<view class="goodname1  m-top-15" style="font-size: 25rpx;">
				{{item1.goods_spec}}</view>
				</view>
				<view class="allline"></view>
				<view class="roww">
					<view class="fs-30" style="color: red;">￥{{item1.money}}/{{item1.num}}台</view>
				</view>
				<view class="w-39"></view>
			</view>
			 -->
			 
			 
			 <view class="listview roww" style="margin-top: 10px;padding-bottom: 24rpx;"
			 v-for="(item1,index1) in item.order" :key="index"
			 >
			 	<view class="w-26"></view>
			 	<view class="goodinic">商品信息：</view>
			 	<view class="colonn" style="width: 490rpx;">
			 		<view class="goodname txtShowLength">{{item1.goods_name}}</view>
			 	<view class="goodname1  m-top-15" style="font-size: 25rpx;">
			 	{{item1.goods_spec}}</view>
				<view class="fs-30" style="color: red;margin-top: 20rpx;">￥{{item1.money}}*{{item1.num}}台</view>
			 	</view>
			 	<!-- <view class="allline"></view> -->
			 	<!-- <view class="roww">
			 		<view class="fs-30" style="color: red;">￥{{item1.money}}/{{item1.num}}台</view>
			 	</view> -->
			 	<!-- <view class="w-39"></view> -->
			 </view>
			 
			 
			 
		</view>
		
		
		
		
		
		
		<view class="huuibeijing colonn center_center" v-if="showPhone"
		>
			<view class="goodinsa center_center colonn rowsa"
			>
				<view class="font_size7_r">手机号</view>
				<view>刘洋  18678883333</view>
			</view>
			<image src="/static/14@2x.png" @click.stop="showphoneClick" 
			class="w-55 h-55 m-top-40"
			></image>
		</view>    
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList:[],
				showPhone:false,
			}
		},
		onLoad(){
			this.getorder()
		},
		methods: {
			showphoneClick(){
				this.showPhone=!this.showPhone;
			},
			getorder(){
				var data={
					'openid1':uni.getStorageSync("userInfo").openid1
				}
				
				this.$axios
					.axios('POST', this.$paths.orderList, data)
					.then(res => {
						console.log("下单结果",res)
						if(res.code==1){
							this.orderList=res.data;
						}else{
							this.$tools.showToast(res.info);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			}
		}
	}
</script>

<style>
@import url(orders.css);
</style>
