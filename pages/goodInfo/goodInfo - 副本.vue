<template>
	<view>
		<view class="colonn" style="padding:15rpx;">
			<image class="topimg" :src="goodInfo.cover"></image>
			<view class="colonn">
				<block v-for="(item,index) in info.goods.data_specs">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="lefttitle">{{item.name}}</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							<block v-for="(item1,index1) in item.list">
								<view v-if="item.sel==item1.name" class="anniubtn">{{item1.name}}</view>
								<view class="noselview" @click.stop="selClick(index,index1,item1.name)" v-else>
									{{item1.name}}</view>
							</block>
							<!-- <view class="anniubtn" >按时山东山东</view>
						<view class="noselview" v-for="(item,index) in 2">按时山</view> -->
						</view>
					</view>
				</block>
			</view>
		</view>
		<view class="h-158"></view>
		<view class="bottomview roww center_center">
			<view class="jiagetxt">价格：</view>
			<view class="roww duiqi color2_r" v-if="vip_code==1">
				<view class="fs-25">￥</view>
				<view class="fs-40" v-if="selInfo">{{selInfo[0].market}}</view>
				<view class="fs-40" v-else>0</view>
			</view>
			<view class="roww duiqi color2_r" v-else>
				<view class="fs-40">参考价格</view>
			</view>
			<view class="allline"></view>
			<view class="gpumais" @click.stop="showOrderClick">下单</view>
		</view>

		<view class="huuibeijing" v-if="isshowOrder" @click.stop="showOrderClick">
			<view class="orderview colonn center_center" @click.stop="aaa">
				<view class="querenxinxi">确认信息</view>
				<scroll-view class="" scroll-y style="max-height: 400rpx">
					<view class="colonn roww center_center">
						<block v-for="(item,index) in selInfo">
							<view class="h-40"></view>
							<view class="roww w-645 ">
								<view>选择{{item.group}}</view>
								<view class="allline"></view>
								<view>{{item.name}}</view>
							</view>
						</block>
					</view>
				</scroll-view>
				<view class="h-51"></view>
				<view class="queredingdan" @click.stop="confirmOrder">
					确认下单
				</view>
			</view>
		</view>

		<view class="huuibeijing colonn center_center" v-if="showPhone">
			<view class="goodinsa center_center colonn rowsa">
				<view class="font_size7_r">手机号</view>
				<view>刘洋 18678883333</view>
			</view>
			<image src="/static/14@2x.png" @click.stop="showphoneClick" class="w-55 h-55 m-top-40"></image>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: "",
				info: {},
				goodInfo: {},
				selInfo: null, //选中的详情

				isshowOrder: false,
				showPhone: false,
				vip_code: ""
			}
		},
		onLoad(options) {
			this.vip_code = uni.getStorageSync("userInfo").vip_code;
			this.goodInfo = uni.getStorageSync("goodInfo")
			this.code = options.code;
			this.getInfo()
		},
		methods: {
			showphoneClick() {
				this.showPhone = !this.showPhone;
			},
			confirmOrder() {
				var data = {
					'code': this.code,
					'goods_sku': this.selInfo[0].sku,
					'openid1': uni.getStorageSync("userInfo").openid1
				}

				this.$axios
					.axios('POST', this.$paths.payapi, data)
					.then(res => {
						console.log("下单结果", res)
						if (res.code == 1) {
							this.$tools.showToast("下单成功");
							this.isshowOrder = false;
							this.showphoneClick();
							// setTimeout(res=>{
							// 	uni.navigateTo({
							// 		url:"/pages/orders/orders"
							// 	})
							// },1000)
						} else {
							this.$tools.showToast(res.info);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			showOrderClick() {
				if (this.selInfo) {
					this.isshowOrder = !this.isshowOrder;
				} else {
					this.$tools.showToast("请选择商品规格");
				}
			},
			isSelGood() {
				var data_specs = this.info.goods.data_specs;
				var data_items = this.info.goods.data_items;
				//判断是否所有的都选了
				var seltxt = [];
				for (var a = 0; a < data_specs.length; a++) {
					if (data_specs[a].sel != "") {
						seltxt.push(data_specs[a].sel);
					}
				}
				if (seltxt.length != data_specs.length) {
					console.log("没有选完")
					return false;
				}
				// 
				for (var a = 0; a < data_items.length; a++) {
					var pipei = seltxt.join(",");
					var aa = [];
					for (var b = 0; b < data_items[a].length; b++) {
						aa.push(data_items[a][b].name);
					}
					if (aa.join(",") == pipei) {
						console.log("当前选中", data_items[a])
						this.selInfo = data_items[a]
					}
				}
			},
			selClick(index, index1, txt) {
				console.log("asd", index, txt)
				this.info.goods.data_specs[index].sel = txt;
				this.$forceUpdate()
				this.isSelGood()
				console.log("this.info.goods.data_specs[index].sel", this.info.goods.data_specs[index].sel)
			},
			getInfo(code) {
				var data = {
					code: this.code,
					'openid1': uni.getStorageSync("userInfo").openid1
				};
				this.$axios
					.axios('POST', this.$paths.getGoodsInfo, data)
					.then(res => {
						this.info = res.data;
						var data_specs = this.info.goods.data_specs;
						for (var a = 0; a < data_specs.length; a++) {
							data_specs[a].sel = "";
						}
						this.info.goods.data_specs = data_specs;
						console.log("asd", this.info)
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			aaa() {},
		}
	}
</script>

<style>
	@import url(goodInfo.css);
</style>