<template>
	<view>
		<view class="colonn" style="padding: 15rpx">
			<image class="topimg" :src="info.goods.cover"></image>
			<view class="colonn" style="background-color: white; padding: 20rpx; font-weight: bold" v-if="info.goods">
				<view class="fs-40" style="font-size: 40rpx">{{ info.goods.name }}</view>
			</view>
			<view class="colonn">
				<!-- <view class="colonn">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="">冷风机应用温度</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							<picker 
									:range="goodInfo1[0]" 
									range-key="wd" 
									@change="goodsChange(0,index1,$event)"
									>
									<block v-if="goodInfo1Sel[0]!=''">{{goodInfo1Sel[0]}}</block>
									<block v-else>请选择</block>
							</picker>
							
						</view>
					</view>
				</view> -->

				<picker :range="goodInfo1[0]" range-key="wd" @change="goodsChange(0, index1, $event)">
					<view class="colonn">
						<view class="h-25"></view>
						<view class="iteminfviewi roww center_center">
							<view class="">冷风机应用温度</view>
							<view class="allline"></view>
							<view class="huanhang endend">
								<block v-if="goodInfo1Sel[0] != ''">{{ goodInfo1Sel[0] }}</block>
								<block v-else>请选择</block>
							</view>
						</view>
					</view>
				</picker>

				<!-- <view class="colonn"  v-if="goodInfo1Sel[0]!=''">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="lefttitle">冷风机蒸发面积</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							
							<picker :range="goodInfo1[1]" range-key="show" @change="goodsChange(1,index1,$event)">
									<block v-if="goodInfo1Sel[1]!=''">{{goodInfo1Sel[1]}}㎡</block>
									<block v-else>请选择</block>
							</picker>
						</view>
					</view>
				</view> -->

				<picker :range="goodInfo1[1]" range-key="show" @change="goodsChange(1, index1, $event)">
					<view class="colonn" v-if="goodInfo1Sel[0] != ''">
						<view class="h-25"></view>
						<view class="iteminfviewi roww center_center">
							<view class="">冷风机蒸发面积</view>
							<view class="allline"></view>
							<view class="huanhang endend">
								<block v-if="goodInfo1Sel[1] != ''">{{ goodInfo1Sel[1] }}㎡</block>
								<block v-else>请选择</block>
							</view>
						</view>
					</view>
				</picker>

				<!-- <view class="colonn" v-if="goodInfo1Sel[1]!=''">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="lefttitle">冷风机化霜方式</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							
							
							<picker :range="goodInfo1[2]" range-key="hs" @change="goodsChange(2,index1,$event)">
									<block v-if="goodInfo1Sel[2]!=''">{{goodInfo1Sel[2]}}</block>
									<block v-else>请选择</block>
							</picker>
							
						</view>
					</view>
				</view> -->

				<picker :range="goodInfo1[2]" range-key="hs" @change="goodsChange(2, index1, $event)">
					<view class="colonn" v-if="goodInfo1Sel[1] != ''">
						<view class="h-25"></view>
						<view class="iteminfviewi roww center_center">
							<view class="">冷风机化霜方式</view>
							<view class="allline"></view>
							<view class="huanhang endend">
								<block v-if="goodInfo1Sel[2] != ''">{{ goodInfo1Sel[2] }}</block>
								<block v-else>请选择</block>
							</view>
						</view>
					</view>
				</picker>

				<!-- <view class="colonn" v-if="goodInfo1Sel[2]!=''">
				<view class="h-25"></view>
				<view class="iteminfviewi roww center_center">
					<view class="lefttitle">冷风机电机选择</view>
					<view class="allline"></view>
					<view class="huanhang w-500 endend">
						<picker :range="goodInfo1[3]" range-key="dj" @change="goodsChange(3,index1,$event)">
								<block v-if="goodInfo1Sel[3]!=''">{{goodInfo1Sel[3]}}</block>
								<block v-else>请选择</block>
						</picker>
						
					</view>
				</view>
			</view>	 -->

				<picker :range="goodInfo1[3]" range-key="dj" @change="goodsChange(3, index1, $event)">
					<view class="colonn" v-if="goodInfo1Sel[2] != ''">
						<view class="h-25"></view>
						<view class="iteminfviewi roww center_center">
							<view class="">冷风机电机选择</view>
							<view class="allline"></view>
							<view class="huanhang endend">
								<block v-if="goodInfo1Sel[3] != ''">{{ goodInfo1Sel[3] }}</block>
								<block v-else>请选择</block>
							</view>
						</view>
					</view>
				</picker>

				<!-- <view class="colonn"  v-if="goodInfo1Sel[3]!=''">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="lefttitle">冷风机电压工况</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							
							
							<picker :range="goodInfo1[4]" range-key="dy" @change="goodsChange(4,index1,$event)">
									<block v-if="goodInfo1Sel[4]!=''">{{goodInfo1Sel[4]}}</block>
									<block v-else>请选择</block>
							</picker>
							
						</view>
					</view>
				</view> -->

				<picker :range="goodInfo1[4]" range-key="dy" @change="goodsChange(4, index1, $event)">
					<view class="colonn" v-if="goodInfo1Sel[3] != ''">
						<view class="h-25"></view>
						<view class="iteminfviewi roww center_center">
							<view class="">冷风机电压工况</view>
							<view class="allline"></view>
							<view class="huanhang endend">
								<block v-if="goodInfo1Sel[4] != ''">{{ goodInfo1Sel[4] }}</block>
								<block v-else>请选择</block>
							</view>
						</view>
					</view>
				</picker>

				<view class="colonn" v-if="goodInfo1Sel[4] != ''">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="lefttitle">出厂价</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							<!-- v-if="vip_code==1" -->
							<view class="roww duiqi color2_r">
								<view class="fs-25">￥</view>
								<view class="fs-40">{{ goodPrice }}</view>
							</view>
							<!-- <view class="roww duiqi color2_r" v-else>
								<view class="fs-40">参考价格</view>
							</view> -->
						</view>
					</view>
				</view>

				<!-- <view class="colonn">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="lefttitle">压缩机品牌</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							<block v-for="(item1,index1) in goodInfo1[4]">
								<view v-if="item1.brand==goodInfo1Sel[4]" class="anniubtn">{{item1.brand}}</view>
								<view class="noselview" @click.stop="selClick(4,index1,item1.brand)" v-else>
									{{item1.brand}}
								</view>
							</block>
						</view>
					</view>
				</view>
				
				<view class="colonn">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="lefttitle">压缩机型号</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							<block v-for="(item1,index1) in goodInfo1[5]">
								<view v-if="item1.xh==goodInfo1Sel[5]" class="anniubtn">{{item1.xh}}</view>
								<view class="noselview" 
								 @click.stop="selClick(5,index1,item1.xh,item1)"
								v-else>
									{{item1.xh}}
								</view>
							</block>
						</view>
					</view>
				</view> -->
				<!-- <view class="colonn">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="lefttitle">冷凝器选择</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							<block v-for="(item1,index1) in goodInfo1[6]">
								<view v-if="item1.unit==goodInfo1Sel[6]" class="anniubtn">{{item1.unit}}</view>
								<view class="noselview" 
								@click.stop="selClick(6,index1,item1.unit,item1)" v-else>
									{{item1.unit}}
								</view>
							</block>
						</view>
					</view>
				</view> -->
			</view>
		</view>
		<view class="h-158"></view>
		<view class="bottomview roww center_center">
			<view class="jiagetxt">出厂价：</view>
			<view class="roww duiqi color2_r" v-if="vip_code == 1">
				<view class="fs-25">￥</view>
				<view class="fs-40">{{ goodPrice }}</view>
				<!-- <view class="fs-40" v-else>0</view> -->
			</view>
			<view class="roww duiqi color2_r" v-else>
				<view class="fs-40">出厂价</view>
			</view>
			<view class="allline"></view>
			<view class="gpumais" @click.stop="showOrderClick">下单</view>
		</view>

		<view class="huuibeijing" catchtouchmove="preventTouchMove" v-if="isshowOrder" @click.stop="showOrderClick" style="z-index: 102">
			<view class="orderview colonn center_center" @click.stop="aaa">
				<view class="h-50"></view>
				<view class="querenxinxi">确认信息</view>
				<view class="h-40"></view>
				<scroll-view class="" scroll-y style="max-height: 800rpx">
					<view class="colonn roww center_center">
						<block v-for="(item, index) in goodInfo1SpaceName">
							<view class="h-40"></view>
							<view class="roww w-645">
								<view>选择{{ item }}</view>
								<view class="allline"></view>
								<view class="w-300" style="text-align: right">{{ goodInfo1Sel[index] }}</view>
							</view>
						</block>
						<view class="h-40"></view>
						<view class="roww w-645 ">
							<view>数量</view>
							<view class="allline"></view>
							<view class=" roww" style="text-align: right;">
								<image src="/static/jianhao.png"
								  @click.stop="toNumClick(0)"
								 class="w-50 h-50"></image>  
								 <view class="w-10"></view>
								<input
								 style="width: 80rpx;text-align: center;border:1px solid #c9c9c9;height: 50rpx;"
								 placeholder="请输入数量" type="number" v-model="priaceData.num"  />
								 <view class="w-10"></view>
								<!-- <view @click.stop="toNumClick(1)">增加</view> -->
								<image src="/static/jiahao.png"
								  @click.stop="toNumClick(1)"
								 class="w-50 h-50"></image>
							</view>
						</view>
						<view class="h-40"></view>
						<view class="roww w-645 ">
							<view>备注</view>
							<view class="w-20"></view>
							<view class=" roww allline" style="text-align: right;">
								<input class="allline"
								 style="text-align: right;height: 50rpx;border-bottom: 1px solid #c9c9c9;"
								 v-model="priaceData.remark"
								 placeholder="请输入备注" />
							</view>
						</view>
					</view>
				</scroll-view>
				<view class="h-51"></view>
				<view class="queredingdan" v-if="buyType == 1" @click.stop="addCard">确认下单</view>
				<view class="queredingdan" v-if="buyType == 2" @click.stop="confirmOrder1">确认下单</view>
				<view class="h-50"></view>
			</view>
		</view>

		<!-- <view class="huuibeijing colonn center_center" v-if="showPhone"style="z-index: 101;">
			<view class="goodinsa center_center colonn rowsa">
				<view class="font_size7_r">手机号</view>
				<view>刘洋 18678883333</view>
			</view>
			<image src="/static/14@2x.png" @click.stop="showphoneClick" class="w-55 h-55 m-top-40"></image>
		</view> -->

		<view class="huuibeijing colonn center_center" v-if="showPhone" style="z-index: 101">
			<view class="goodinsa center_center colonn rowsa">
				<!-- <view class="font_size7_r">手机号</view>
				<view>刘洋 18678883333</view> -->
				<image src="/static/f702701ca092759fec5eb5d69e18056.png" class="w-90 h-100"></image>
				<view>下单成功！客服正在火速赶到...</view>
			</view>
			<image src="/static/14@2x.png" @click.stop="showphoneClick" class="w-55 h-55 m-top-40"></image>
		</view>

		<view class="roww rowsb bottomview center_center" style="z-index: 100">
			<view class="colonn w-100 center_center pore">
				<image src="../../static/03@2x.png" class="w-30 h-30"></image>
				<view>咨询</view>
				<button open-type="contact" class="kefuf"></button>
			</view>
			<view class="gouwch" @click.stop="toSubmit(1)">加入购物车</view>
			<view class="gouwch" @click.stop="toSubmit(2)">马上下单</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			code: '',
			info: {},
			goodInfo: {},
			selInfo: null, //选中的详情

			isshowOrder: false,
			showPhone: false,
			vip_code: '',

			goodInfo1: [[], [], [], [], [], [], []], //测出风机组
			goodInfo1SpaceName: ['冷风机应用温度', '冷风机蒸发面积', '冷风机化霜方式', '冷风机电机选择', '冷风机电压工况'],
			goodInfo1Sel: ['', '', '', '', ''],

			priaceData: {
				ysj_id: '',
				lnq_id: '',

				lfj_id: '',
					num:1,
					remark:""
			},
			goodPrice: {},

			buyType: 1 //1是购物车
		};
	},
	onLoad(options) {
		this.vip_code = uni.getStorageSync('userInfo').vip_code;
		this.goodInfo = uni.getStorageSync('goodInfo');
		this.code = options.code;
		this.getInfo();

		var goodInfo1Sel = uni.getStorageSync('goodInfo1Sel' + this.goodInfo.code);
		var goodPrice = uni.getStorageSync('goodPrice' + this.goodInfo.code);
		var goodInfoSpaceLogin = uni.getStorageSync('goodInfoSpaceLogin' + this.goodInfo.code);
		var priaceData = uni.getStorageSync('priaceData' + this.goodInfo.code);

		var gooodInfoLogin = uni.getStorageSync('gooodInfoLogin');
		if (gooodInfoLogin) {
			if (goodInfo1Sel) {
				this.goodInfo1Sel = goodInfo1Sel;
			}
			if (goodPrice) {
				this.goodPrice = goodPrice;
			}
			if (goodInfoSpaceLogin) {
				this.goodInfo1 = goodInfoSpaceLogin;
			}
			if (priaceData) {
				this.priaceData = priaceData;
			}
		}
	},
	onShow() {
		this.userInfo=uni.getStorageSync("userInfo");
	},
	methods: {
		//数量加减
		toNumClick(type){
			var num=this.priaceData.num;
			if(type==1){
				num=num+1;
			}else{
				if(num<2){
					num=1;
				}else{
					num=num-1;
				}
			}
			this.priaceData.num=num;
			this.$forceUpdate()
		},
		preventTouchMove() {},
		toSubmit(type) {
			var isSub = true;
			for (var a = 0; a < this.goodInfo1Sel.length; a++) {
				if (this.goodInfo1Sel[a] == '') {
					isSub = false;
				}
			}
			if (!isSub) {
				this.$tools.showToast('请选择完规格，再操作');
				return false;
			}

			this.buyType = type;
			this.isshowOrder = true;
		},
		//后期活该
		confirmOrder1() {
			var userInfo = uni.getStorageSync('userInfo');
			if (userInfo) {
				if (!userInfo.nickname || userInfo.nickname == '') {
					this.$tools.showToast('请先完善资料');
					uni.setStorageSync('goodInfo1Sel', this.goodInfo1Sel);
					uni.setStorageSync('goodPrice', this.goodPrice);
					uni.setStorageSync('goodInfoSpaceLogin' + this.goodInfo.code, this.goodInfo1);
					uni.setStorageSync('gooodInfoLogin', this.goodInfo);
					uni.setStorageSync('priaceData' + this.goodInfo.code, this.priaceData);

					setTimeout((res) => {
						uni.navigateTo({
							url: '/pages/updateUserInfo/updateUserInfo'
						});
					}, 1000);
					return false;
				}
			} else {
				this.$tools.showToast('请先完善资料');
				this.$tools.showToast('请先完善资料');
				uni.setStorageSync('goodInfo1Sel', this.goodInfo1Sel);
				uni.setStorageSync('goodPrice', this.goodPrice);
				uni.setStorageSync('goodInfoSpaceLogin' + this.goodInfo.code, this.goodInfo1);
				uni.setStorageSync('gooodInfoLogin', this.goodInfo);
				uni.setStorageSync('priaceData' + this.goodInfo.code, this.priaceData);

				setTimeout((res) => {
					uni.navigateTo({
						url: '/pages/updateUserInfo/updateUserInfo'
					});
				}, 1000);
				return false;
			}

			var isSub = true;
			for (var a = 0; a < this.goodInfo1Sel.length; a++) {
				if (this.goodInfo1Sel[a] == '') {
					isSub = false;
				}
			}
			if (!isSub) {
				this.$tools.showToast('请选择完规格，再操作');
				return false;
			}
			if(this.priaceData.num<=0||this.priaceData.num==""){
				this.$tools.showToast("请输入购买数量，再操作");
				return false;
			}
			
			var data = {
				openid1: uni.getStorageSync('userInfo').openid1,
				code: this.code,
				lfj_id: this.priaceData.lfj_id,
					num:this.priaceData.num,
					'remark':this.priaceData.remark,
			};

			this.$axios
				.axios('POST', this.$paths.pay11, data)
				.then((res) => {
					console.log('下单结果', res);
					if (res.code == 1) {
						this.$tools.showToast('下单成功');
						this.isshowOrder = false;
						uni.removeStorageSync('gooodInfoLogin');
						this.showphoneClick();
					} else {
						this.$tools.showToast(res.info);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},

		// 加入购物车  addCar
		addCard() {
			var isSub = true;
			for (var a = 0; a < this.goodInfo1Sel.length; a++) {
				if (this.goodInfo1Sel[a] == '') {
					isSub = false;
				}
			}
			if (!isSub) {
				this.$tools.showToast('请选择完规格，再操作');
				return false;
			}
			var data = {
				openid1: uni.getStorageSync('userInfo').openid1,
				code: this.code,
				// ysj_id:this.priaceData.ysj_id,
				// lnq_id:this.priaceData.lnq_id,
				lfj_id: this.priaceData.lfj_id,
					'remark':this.priaceData.remark
				// dkx_id:"",
			};
			this.$axios
				.axios('POST', this.$paths.addCar, data)
				.then((res) => {
					console.log('下单结果', res);
					if (res.code == 1) {
						this.$tools.showToast('加入购物车成功');
						this.isshowOrder = false;
					} else {
						this.$tools.showToast(res.info);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},

		clearnoSel(index) {
			for (var a = 0; a < this.goodInfo1Sel.length; a++) {
				if (a > index) {
					this.goodInfo1Sel[a] = '';
				}
			}
			for (var a = 0; a < this.goodInfo1.length; a++) {
				if (a > index) {
					this.goodInfo1[a] = [];
				}
			}
		},

		goodsChange(index, index1, txt, id) {
			txt = parseInt(txt.detail.value);
			console.log('=========123', this.goodInfo1[0][txt]);
			//
			if (index == 0) {
				txt = this.goodInfo1[0][txt].wd;
			} else if (index == 1) {
				txt = this.goodInfo1[1][txt].zf;
			} else if (index == 2) {
				txt = this.goodInfo1[2][txt].hs;
			} else if (index == 3) {
				txt = this.goodInfo1[3][txt].dj;
			} else if (index == 4) {
				txt = this.goodInfo1[4][txt].dy;
			}

			this.selClick(index, '', txt, id);
		},

		selClick(index, index1, txt, id) {
			// this.goodInfo1[index][index1].sel = !this.goodInfo1[index][index1].sel;
			this.goodInfo1Sel[index] = txt;
			this.$forceUpdate();
			if (index == 0) {
				this.getYasuoData(txt);
			} else if (index == 1) {
				this.getYsjDy(txt);
			} else if (index == 2) {
				// this.getYsjZlj(txt);
				this.getgetLfjDj(txt);
			} else if (index == 3) {
				this.getYsjZlj(txt);
			} else if (index == 4) {
				this.getPrice1();
			}
			// else if(index==3){
			// 	this.getYsjBrand(txt);
			// }else if(index==4){
			// 	this.getYsjXh(txt);
			// }else if(index==5){
			// 	this.getLnq(txt);
			// 	this.priaceData.ysj_id=id.id
			// }
			this.clearnoSel(index);
			setTimeout((res) => {
				wx.pageScrollTo({
					scrollTop: Math.ceil(Math.random() * 10000)
				});
			}, 500);
		},
		getPrice1() {
			var data = {
				zf: this.goodInfo1Sel[1],
				wd: this.goodInfo1Sel[0],
				hs: this.goodInfo1Sel[2],
				dy: this.goodInfo1Sel[4],
				dj: this.goodInfo1Sel[3]
			};
			this.$axios
				.axios('POST', this.$paths.getLfjPrice, data)
				.then((res) => {
					console.log('下单结果', res);
					if (res.code == 1) {
						this.goodPrice = res.data.price;
						this.priaceData.lfj_id = res.data.id;
					} else {
						this.$tools.showToast(res.info);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		//冷风机 电机选择
		getgetLfjDj(hs) {
			var data = {
				zf: this.goodInfo1Sel[1],
				wd: this.goodInfo1Sel[0],
				hs: hs
			};
			this.$axios
				.axios('POST', this.$paths.getLfjDj, data)
				.then((res) => {
					console.log('电机选择', res);
					if (res.code == 1) {
						this.goodInfo1[3] = res.data;
						this.$forceUpdate();
					} else {
						this.$tools.showToast(res.info);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		//冷风机电压状况
		getYsjZlj(dj) {
			var data = {
				zf: this.goodInfo1Sel[1],
				wd: this.goodInfo1Sel[0],
				hs: this.goodInfo1Sel[2],
				dj: dj
			};
			this.$axios
				.axios('POST', this.$paths.getLfjDy, data)
				.then((res) => {
					console.log('下单结果', res);
					if (res.code == 1) {
						this.goodInfo1[4] = res.data;
						this.$forceUpdate();
					} else {
						this.$tools.showToast(res.info);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		// 画霜方式
		getYsjDy(wd) {
			var data = {
				zf: wd,
				wd: this.goodInfo1Sel[0]
			};
			this.$axios
				.axios('POST', this.$paths.getLfjHs, data)
				.then((res) => {
					console.log('下单结果', res);
					if (res.code == 1) {
						this.goodInfo1[2] = res.data;
						this.$forceUpdate();
					} else {
						this.$tools.showToast(res.info);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},

		// 获取压缩面积
		getYasuoData(wd) {
			var data = {
				wd: wd
			};
			this.$axios
				.axios('POST', this.$paths.getLfjZf, data)
				.then((res) => {
					console.log('下单结果', res);
					if (res.code == 1) {
						console.log('===', res.data);
						// ㎡
						for (var a = 0; a < res.data.length; a++) {
							res.data[a].show = res.data[a].zf + '㎡';
						}
						this.goodInfo1[1] = res.data;
						this.$forceUpdate();
					} else {
						this.$tools.showToast(res.info);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		//获取压缩机应用温度
		getYsjWd() {
			var data = {
				// 'zf': zf
			};
			this.$axios
				.axios('POST', this.$paths.getLfjWd, data)
				.then((res) => {
					console.log('下单结果', res);
					if (res.code == 1) {
						console.log('===', res.data);
						this.goodInfo1[0] = res.data;
						console.log('===', res.data, this.goodInfo1[1]);
						this.$forceUpdate();
					} else {
						this.$tools.showToast(res.info);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		// 处理之后的数据
		updateGoodSpace(index, type, list) {
			list = this.addSelList(list);
			if (type <= 3) {
				this.goodInfo1[index] = list;
			}
			if (type == 4) {
				this.goodInfo1[index] = list;
			}
		},
		// 添加选中的字段
		addSelList(list) {
			for (var a = 0; a < list.length; a++) {
				list[a].sel = false;
			}
			return list;
		},

		showphoneClick() {
			this.showPhone = !this.showPhone;
		},
		confirmOrder() {
			var data = {
				code: this.code,
				goods_sku: this.selInfo[0].sku,
				openid1: uni.getStorageSync('userInfo').openid1
			};

			this.$axios
				.axios('POST', this.$paths.payapi, data)
				.then((res) => {
					console.log('下单结果', res);
					if (res.code == 1) {
						this.$tools.showToast('下单成功');
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
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		showOrderClick() {
			// if (this.selInfo) {
				this.isshowOrder = !this.isshowOrder;
			// } 
			// else {
			// 	this.$tools.showToast('请选择商品规格');
			// }
		},
		isSelGood() {
			var data_specs = this.info.goods.data_specs;
			var data_items = this.info.goods.data_items;
			//判断是否所有的都选了
			var seltxt = [];
			for (var a = 0; a < data_specs.length; a++) {
				if (data_specs[a].sel != '') {
					seltxt.push(data_specs[a].sel);
				}
			}
			if (seltxt.length != data_specs.length) {
				console.log('没有选完');
				return false;
			}
			//
			for (var a = 0; a < data_items.length; a++) {
				var pipei = seltxt.join(',');
				var aa = [];
				for (var b = 0; b < data_items[a].length; b++) {
					aa.push(data_items[a][b].name);
				}
				if (aa.join(',') == pipei) {
					console.log('当前选中', data_items[a]);
					this.selInfo = data_items[a];
				}
			}
		},

		getInfo(code) {
			var data = {
				code: this.code,
				openid1: uni.getStorageSync('userInfo').openid1
			};
			this.$axios
				.axios('POST', this.$paths.getGoodsInfo, data)
				.then((res) => {
					this.info = res.data;
					var data_specs = this.info.goods.p_num;
					// for (var a = 0; a < data_specs.length; a++) {
					// 	var obg = {
					// 		name: data_specs[a],
					// 		sel: false,
					// 	}
					// 	data_specs[a] = obg;
					// }
					// this.info.goods.data_specs = data_specs;
					this.getYsjWd();
					console.log('asd', this.info);
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		aaa() {}
	}
};
</script>

<style>
@import url(goodInfo.css);
</style>
