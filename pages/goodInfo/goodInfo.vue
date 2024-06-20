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
						<view class="">{{goodInfo1SpaceName[0]}}</view>
						<view class="allline"></view>
						<picker :range="goodInfo1[0]" range-key="brand" 
						@change="goodsChange(0,index1,$event)">
								<block v-if="goodInfo1Sel[0]!=''">{{goodInfo1Sel[0]}}</block>
								<block v-else>请选择</block> 
						</picker> 
					</view>
				</view> -->

				<picker :range="goodInfo1[0]" range-key="brand" @change="goodsChange(0, index1, $event)">
					<view class="colonn">
						<view class="h-25"></view>
						<view class="iteminfviewi roww center_center">
							<view class="">{{ goodInfo1SpaceName[0] }}</view>
							<view class="allline"></view>
							<block v-if="goodInfo1Sel[0] != ''">{{ goodInfo1Sel[0] }}</block>
							<block v-else>请选择</block>
						</view>
					</view>
				</picker>

				<!-- <view class="colonn" v-if="goodInfo1Sel[0]!=''">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="lefttitle">{{goodInfo1SpaceName[1]}}</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							<picker :range="goodInfo1[1]" range-key="gl" @change="goodsChange(1,index1,$event)">
									<block v-if="goodInfo1Sel[1]!=''">{{goodInfo1Sel[1]}}</block>
									<block v-else>请选择</block>
							</picker>
							
						</view>
					</view>
				</view> -->

				<picker :range="goodInfo1[1]" range-key="gl" @change="goodsChange(1, index1, $event)">
					<view class="colonn" v-if="goodInfo1Sel[0] != ''">
						<view class="h-25"></view>
						<view class="iteminfviewi roww center_center">
							<view class="">{{ goodInfo1SpaceName[1] }}</view>
							<view class="allline"></view>
							<view class="huanhang w-500 endend">
								<block v-if="goodInfo1Sel[1] != ''">{{ goodInfo1Sel[1] }}</block>
								<block v-else>请选择</block>
							</view>
						</view>
					</view>
				</picker>

				<!-- <view class="colonn"  v-if="goodInfo1Sel[1]!=''">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="lefttitle">应用温度</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							<picker :range="goodInfo1[2]" range-key="wd" @change="goodsChange(2,index1,$event)">
									<block v-if="goodInfo1Sel[2]!=''">{{goodInfo1Sel[2]}}</block>
									<block v-else>请选择</block>
							</picker>
							
						</view>
					</view>
				</view>  -->

				<picker :range="goodInfo1[2]" range-key="wd" @change="goodsChange(2, index1, $event)">
					<view class="colonn" v-if="goodInfo1Sel[1] != ''">
						<view class="h-25"></view>
						<view class="iteminfviewi roww center_center">
							<view class="">应用温度</view>
							<view class="allline"></view>
							<view class="huanhang w-500 endend">
								<block v-if="goodInfo1Sel[2] != ''">{{ goodInfo1Sel[2] }}</block>
								<block v-else>请选择</block>
							</view>
						</view>
					</view>
				</picker>

				<!-- <view class="colonn"  v-if="goodInfo1Sel[2]!=''">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="lefttitle">电压工况</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							
							<picker :range="goodInfo1[3]" range-key="dy" @change="goodsChange(3,index1,$event)">
									<block v-if="goodInfo1Sel[3]!=''">{{goodInfo1Sel[3]}}</block>
									<block v-else>请选择</block>
							</picker>
							
						</view>
					</view>
				</view> -->

				<picker :range="goodInfo1[3]" range-key="dy" @change="goodsChange(3, index1, $event)">
					<view class="colonn" v-if="goodInfo1Sel[2] != ''">
						<view class="h-25"></view>
						<view class="iteminfviewi roww center_center">
							<view class="">电压工况</view>
							<view class="allline"></view>
							<view class="huanhang w-500 endend">
								<block v-if="goodInfo1Sel[3] != ''">{{ goodInfo1Sel[3] }}</block>
								<block v-else>请选择</block>
							</view>
						</view>
					</view>
				</picker>

				<!-- <view class="colonn"  v-if="goodInfo1Sel[3]!=''">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="lefttitle">压缩机制冷剂</view>

						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							
							
							<picker :range="goodInfo1[4]" range-key="zlj" @change="goodsChange(4,index1,$event)">
									<block v-if="goodInfo1Sel[4]!=''">{{goodInfo1Sel[4]}}</block>
									<block v-else>请选择</block>
							</picker>
							
						</view>
					</view>
				</view> -->

				<picker :range="goodInfo1[4]" range-key="zlj" @change="goodsChange(4, index1, $event)">
					<view class="colonn" v-if="goodInfo1Sel[3] != ''">
						<view class="h-25"></view>
						<view class="iteminfviewi roww center_center">
							<view class="" style="margin-left: 25rpx">压缩机制冷剂</view>

							<view class="allline"></view>
							<view class="huanhang w-500 endend" style="margin-right: 25rpx">
								<block v-if="goodInfo1Sel[4] != ''">{{ goodInfo1Sel[4] }}</block>
								<block v-else>请选择</block>
							</view>
						</view>
					</view>
				</picker>

				<!-- <view class="colonn"  v-if="goodInfo1Sel[4]!=''">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="lefttitle">压缩机型号</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							
							
							<picker :range="goodInfo1[5]" range-key="xh" @change="goodsChange(5,index1,$event)">
									<block v-if="goodInfo1Sel[5]!=''">{{goodInfo1Sel[5]}}</block>
									<block v-else>请选择</block>
							</picker>
							
						</view>
					</view>
				</view>
				 -->
				<picker :range="goodInfo1[5]" range-key="xh" @change="goodsChange(5, index1, $event)">
					<view class="colonn" v-if="goodInfo1Sel[4] != ''">
						<view class="h-25"></view>
						<view class="iteminfviewi roww center_center">
							<view class="">压缩机型号</view>
							<view class="allline"></view>
							<view class="huanhang w-500 endend">
								<block v-if="goodInfo1Sel[5] != ''">{{ goodInfo1Sel[5] }}</block>
								<block v-else>请选择</block>
							</view>
						</view>
					</view>
				</picker>

				<!-- <view class="iteminfviewi roww center_center" v-if="goodInfo.type==3 && goodInfo.name == '箱式V型机组' && goodInfo1Sel[5]!='' ">
					<view class="lefttitle">机箱选择</view>
					<view class="allline"></view>
					<view class="huanhang w-500 endend">
						<picker :range="list" range-key="name" :value="listindex" @change="xuanzejixiang">
								<block v-if="listtype">{{list[listindex].name}}</block>
								<block v-else>请选择</block>
						</picker>
						
					</view>
				 </view> -->
				<picker :range="list" range-key="name"  @change="xuanzejixiang">
					<view class="iteminfviewi roww center_center" style="margin-top: 25rpx" 
					v-if="goodInfo.type == 3 && goodInfo.name == '箱式V型机组' && goodInfo1Sel[5] != ''">
						<!-- <view style="height: 25rpx;"></view> -->
						<view class="">机箱选择</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							<block v-if="listindex >= 0">
								<block v-if="listtype">{{ list[listindex].name }}</block>
								<block v-else>请选择</block>
							</block>
							<block v-else>
								<block>请选择</block>
							</block>
						</view>
					</view>
				</picker>

				<!-- <view class="colonn"  v-if="goodInfo1Sel[5]!='' && listtype">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="lefttitle">冷凝器选择</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
							<picker :range="goodInfo1[6]" range-key="name1" @change="goodsChange(6,index1,$event)">
									<block v-if="goodInfo1Sel[6]!=''">{{goodInfo1Sel[6]}}</block>
									<block v-else>请选择</block>
							</picker>
							
						</view>
					</view>
				</view>  -->
				<!-- 	<view class="h-25"></view> -->
				<picker :range="goodInfo1[6]" range-key="name1" @change="goodsChange(6, index1, $event)">
					<view class="colonn" v-if="goodInfo1Sel[5] != '' && listtype">
						<view class="h-25"></view>
						<view class="iteminfviewi roww center_center">
							<view class="">冷凝器选择</view>
							<view class="allline"></view>
							<view class="huanhang w-500 endend">
								<block v-if="goodInfo1Sel[6] != ''">{{ goodInfo1Sel[6] }}</block>
								<block v-else>请选择</block>
							</view>
						</view>
					</view>
				</picker>

				<view class="colonn" v-if="goodInfo1Sel[6] != ''">
					<view class="h-25"></view>
					<view class="iteminfviewi roww center_center">
						<view class="lefttitle">出厂价</view>
						<view class="allline"></view>
						<view class="huanhang w-500 endend">
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
			</view>
		</view>
		<!-- <view class="h-158"></view>
		<view class="bottomview roww center_center">
			<view class="jiagetxt">出厂价：</view>
			
			<view class="roww duiqi color2_r" >
				<view class="fs-25">￥</view>
				<view class="fs-40" >{{goodPrice}}</view>
				
			</view>
			
			<view class="allline"></view>
			<view class="gpumais" @click.stop="showOrderClick">下单</view>
		</view> -->

		<view class="huuibeijing" catchtouchmove="preventTouchMove" v-if="isshowOrder" @click.stop="showOrderClick" style="z-index: 102">
			<view class="orderview colonn center_center" @click.stop="aaa">
				<view class="h-50"></view>
				<view class="querenxinxi">确认信息</view>
				<view class="h-40"></view>
				<scroll-view class="" scroll-y style="max-height: 800rpx">
					<view class="colonn center_center">
						<block v-for="(item, index) in goodInfo1SpaceName">
							<view class="h-40"></view>
							<view class="roww w-645">
								<view>选择{{ item }}</view>
								<view class="allline"></view>
								<view class="w-300" style="text-align: right">{{ goodInfo1Sel[index] }}</view>
							</view>
						</block>
						<view class="h-40"></view>
						<view class="roww w-645">
							<view>数量</view>
							<view class="allline"></view>
							<view class="roww" style="text-align: right">
								<image src="/static/jianhao.png" @click.stop="toNumClick(0)" class="w-50 h-50"></image>
								<view class="w-10"></view>
								<input
									style="width: 80rpx; text-align: center; border: 1px solid #c9c9c9; height: 50rpx"
									placeholder="请输入数量"
									type="number"
									v-model="priaceData.num"
								/>
								<view class="w-10"></view>
								<!-- <view @click.stop="toNumClick(1)">增加</view> -->
								<image src="/static/jiahao.png" @click.stop="toNumClick(1)" class="w-50 h-50"></image>
							</view>
						</view>
						<view class="h-40"></view>
						<view class="roww w-645">
							<view>备注</view>
							<view class="w-20"></view>
							<view class="roww allline" style="text-align: right">
								<input
									class="allline"
									style="text-align: right; height: 50rpx; border-bottom: 1px solid #c9c9c9"
									v-model="priaceData.remark"
									placeholder="请输入备注"
								/>
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

		<view class="huuibeijing colonn center_center" v-if="showPhone" style="z-index: 101">
			<view class="goodinsa center_center colonn rowsa">
				<!-- <view class="font_size7_r">手机号</view>
				<view>刘洋 18678883333</view> -->
				<image src="/static/f702701ca092759fec5eb5d69e18056.png" class="w-90 h-100"></image>
				<view>下单成功！客服正在火速赶到...</view>
			</view>
			<image src="/static/14@2x.png" @click.stop="showphoneClick" class="w-55 h-55 m-top-40"></image>
		</view>
		<view style="height: 138rpx"></view>
		<view class="roww rowsb bottomview fs-30">
			<view class="colonn w-100 center_center pore">
				<image src="/static/03@2x.png" class="w-30 h-30"></image>
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
			// goodInfo1SpaceName: [
			// 	'应用温度','主机功率',  '电压工况', '制冷剂', '压缩机品牌',
			// 	'压缩机型号', '冷凝器选择'
			// ],
			goodInfo1SpaceName: ['压缩机品牌', '主机功率', '应用温度', '电压工况', '制冷剂', '压缩机型号', '冷凝器选择'],
			goodInfo1Sel: ['', '', '', '', '', '', ''],

			priaceData: {
				ysj_id: '',
				lnq_id: '',
				num: 1,
				remark: ''
			},
			goodPrice: {},

			buyType: 1, //1是购物车
			list: [
				{
					id: 1,
					name: '全箱'
				},
				{
					id: 2,
					name: '半箱'
				}
			],
			listindex: -1,
			listtype: false,
			l_type: '' //   获取冷凝器的接口  getLnq   新加一个参数 l_type 0 跟 1    0是全箱  1是半箱
		};
	},
	onLoad(options) {
		this.vip_code = uni.getStorageSync('userInfo').vip_code;
		this.goodInfo = uni.getStorageSync('goodInfo');
		if (this.goodInfo.type == 3 && this.goodInfo.name == '箱式V型机组') {
			this.listtype = false;
		} else {
			this.listtype = true;
		}
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
		this.userInfo = uni.getStorageSync('userInfo');
	},
	methods: {
		//数量加减
		toNumClick(type) {
			var num = this.priaceData.num;
			if (type == 1) {
				num = num + 1;
			} else {
				if (num < 2) {
					num = 1;
				} else {
					num = num - 1;
				}
			}
			this.priaceData.num = num;
			this.$forceUpdate();
		},
		xuanzejixiang(e) {
			this.listtype = true;
			this.listindex = e.detail.value;
			this.l_type = e.detail.value;
			// if(e.detail.value){
			// 	this.l_type = 0
			// }else{
			// 	this.l_type = 1
			// }
			console.log('this.l_type: ', this.l_type);
			this.goodInfo1Sel[6] = '';
			this.$forceUpdate()
			this.getLnq();
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

					uni.setStorageSync('goodInfo1Sel' + this.goodInfo.code, this.goodInfo1Sel);
					uni.setStorageSync('goodPrice' + this.goodInfo.code, this.goodPrice);
					uni.setStorageSync('gooodInfoLogin', this.goodInfo);
					uni.setStorageSync('goodInfoSpaceLogin' + this.goodInfo.code, this.goodInfo1);
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
			if (this.priaceData.num <= 0 || this.priaceData.num == '') {
				this.$tools.showToast('请输入购买数量，再操作');
				return false;
			}

			var data = {
				openid1: uni.getStorageSync('userInfo').openid1,
				code: this.code,
				ysj_id: this.priaceData.ysj_id,
				lnq_id: this.priaceData.lnq_id,
				num: this.priaceData.num,
				remark: this.priaceData.remark
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
				ysj_id: this.priaceData.ysj_id,
				lnq_id: this.priaceData.lnq_id,
				lfj_id: '',
				dkx_id: '',
				remark: this.priaceData.remark
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
			// var textwendu = ''
			txt = parseInt(txt.detail.value);
			console.log('=========', this.goodInfo1[0][txt]);
			if (index == 0) {
				txt = this.goodInfo1[0][txt].brand;
			} else if (index == 1) {
				txt = this.goodInfo1[1][txt].gl;
			} else if (index == 2) {
				// textwendu = this.goodInfo1[2][txt].name1
				txt = this.goodInfo1[2][txt].wd;
			} else if (index == 3) {
				txt = this.goodInfo1[3][txt].dy;
			} else if (index == 4) {
				txt = this.goodInfo1[4][txt].zlj;
			} else if (index == 5) {
				this.priaceData.ysj_id = this.goodInfo1[5][txt].id;
				txt = this.goodInfo1[5][txt].xh;
			} else if (index == 6) {
				//选择冷宫其
				this.priaceData.lnq_id = this.goodInfo1[6][txt].id;
				var ontxnt = this.goodInfo1[6][txt].content;
				uni.setStorageSync('contentLnq', ontxnt);
				txt = this.goodInfo1[6][txt].unit;

				if (ontxnt && ontxnt != '') {
					uni.navigateTo({
						url: '/pages/fuwenben/fuwenben'
					});
				}
			}

			this.selClick(index, '', txt, id);
			// console.log('textwendu: ',textwendu,txt);
		},
		selClick(index, index1, txt, id) {
			// console.log('123',txt,textwendu);
			// return false;
			// this.goodInfo1[index][index1].sel=!this.goodInfo1[index][index1].sel;
			// if(index==2){
			// 	this.goodInfo1Sel[index]=textwendu;
			// }else{
			// 	this.goodInfo1Sel[index]=txt;
			// }
			this.goodInfo1Sel[index] = txt;

			this.$forceUpdate();
			if (index == 0) {
				this.getGl(txt);
			} else if (index == 1) {
				this.getYsjWd(txt);
			} else if (index == 2) {
				// this.goodInfo1[3][txt]
				// var sdd = this.goodInfo1Sel[index]=txt;
				// console.log('123',txt,textwendu);
				this.getYsjDy(txt);
			} else if (index == 3) {
				this.getYsjZlj(txt);
			} else if (index == 4) {
				this.getYsjXh(txt);
			} else if (index == 5) {
				if (this.goodInfo.type != 3 && this.goodInfo.name != '箱式V型机组') {
					this.getLnq(txt);
				}

				// this.priaceData.ysj_id=id.id
			} else if (index == 6) {
				// this.priaceData.lnq_id=id.id
				this.getPrice1();
			}
			this.clearnoSel(index);

			setTimeout((res) => {
				wx.pageScrollTo({
					scrollTop: Math.ceil(Math.random() * 10000)
				});
			}, 500);
		},
		getPrice1() {
			var data = {
				ysj_id: this.priaceData.ysj_id,
				lnq_id: this.priaceData.lnq_id
			};
			this.$axios
				.axios('POST', this.$paths.getPrice1, data)
				.then((res) => {
					console.log('下单结果', res);
					if (res.code == 1) {
						this.goodPrice = res.data;
					} else {
						this.$tools.showToast(res.info);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		// 获取冷凝器
		getLnq() {
			var data = {
				p_num: this.goodInfo1Sel[1].substring(0, this.goodInfo1Sel[1].length - 2),
				type: this.goodInfo.type
			};
			if (this.goodInfo.type == 3 && this.goodInfo.name == '箱式V型机组') {
				data.l_type = this.l_type;
			}
			this.$axios
				.axios('POST', this.$paths.getLnq, data)
				.then((res) => {
					console.log('下单结果', res);
					if (res.code == 1) {
						if (this.goodInfo.type <= 3) {
							var list = res.data;
							for (var a = 0; a < list.length; a++) {
								list[a].name1 = list[a].p_num + 'HP-' + list[a].unit;
							}
							this.goodInfo1[6] = list;
							this.$forceUpdate();
						}
					} else {
						this.$tools.showToast(res.info);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		// 获取压缩机信号
		getYsjXh() {
			// var data = {
			// 	'p_num':this.goodInfo1Sel[0],
			// 	'wd':this.goodInfo1Sel[1],
			// 	'dy':this.goodInfo1Sel[2],
			// 	'zlj':this.goodInfo1Sel[3],
			// 	brand:this.goodInfo1Sel[4],
			// }
			var data = {
				gl: this.goodInfo1Sel[1].substring(0, this.goodInfo1Sel[1].length - 2),
				wd: this.goodInfo1Sel[2].slice(0, this.goodInfo1Sel[2].indexOf('(')),
				dy: this.goodInfo1Sel[3],
				zlj: this.goodInfo1Sel[4],
				brand: this.goodInfo1Sel[0]
			};

			this.$axios
				.axios('POST', this.$paths.getYsjXh, data)
				.then((res) => {
					console.log('下单结果', res);
					if (res.code == 1) {
						if (this.goodInfo.type <= 3) {
							this.goodInfo1[5] = res.data;
							this.$forceUpdate();
						}
					} else {
						this.$tools.showToast(res.info);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		// 获取品牌
		// getYsjBrand(zlj){
		// 	var data = {
		// 		'p_num':this.goodInfo1Sel[0],
		// 		'wd':this.goodInfo1Sel[1],
		// 		'dy':this.goodInfo1Sel[2],
		// 		'zlj':zlj,
		// 		type:this.goodInfo.type

		// 	}
		// 	this.$axios
		// 		.axios('POST', this.$paths.getYsjBrand, data)
		// 		.then(res => {
		// 			console.log("下单结果", res)
		// 			if (res.code == 1) {
		// 				if (this.goodInfo.type  <=3) {
		// 					this.goodInfo1[4] = res.data;
		// 					this.$forceUpdate()
		// 				}
		// 			} else {
		// 				this.$tools.showToast(res.info);
		// 			}
		// 		})
		// 		.catch(err => {
		// 			console.log('错误回调', err);
		// 	});
		// },
		//获取制冷剂
		getYsjZlj(dy) {
			var data = {
				brand: this.goodInfo1Sel[0],
				gl: this.goodInfo1Sel[1].substring(0, this.goodInfo1Sel[1].length - 2),
				wd: this.goodInfo1Sel[2].slice(0, this.goodInfo1Sel[2].indexOf('(')),
				dy: dy
			};
			this.$axios
				.axios('POST', this.$paths.getYsjZlj, data)
				.then((res) => {
					if (res.code == 1) {
						if (this.goodInfo.type <= 3) {
							this.goodInfo1[4] = res.data;
							this.$forceUpdate();
						}
						console.log('this.goodInfo1[4]', this.goodInfo1[4]);
					} else {
						this.$tools.showToast(res.info);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		// 获取电压工况
		getYsjDy(wd) {
			var data = {
				brand: this.goodInfo1Sel[0],
				gl: this.goodInfo1Sel[1].substring(0, this.goodInfo1Sel[1].length - 2),
				wd: wd.slice(0, wd.indexOf('('))
			};
			this.$axios
				.axios('POST', this.$paths.getYsjDy, data)
				.then((res) => {
					console.log('下单结果', res);
					if (res.code == 1) {
						if (this.goodInfo.type <= 3) {
							this.goodInfo1[3] = res.data;
							this.$forceUpdate();
						}
					} else {
						this.$tools.showToast(res.info);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		//获取压缩机应用温度
		getYsjWd(gl) {
			var data = {
				brand: this.goodInfo1Sel[0],
				gl: gl.substring(0, gl.length - 2)
			};
			console.log('data1111111111111111111111111: ', data);
			this.$axios
				.axios('POST', this.$paths.getYsjWd, data)
				.then((res) => {
					// console.log("下单结果", res)
					if (res.code == 1) {
						if (this.goodInfo.type <= 3) {
							// console.log("===",res.data)
							var list = res.data;
							for (var a = 0; a < list.length; a++) {
								list[a].wd = list[a].wd + '(' + list[a].wd_num + ')';
							}
							this.goodInfo1[2] = list;
							console.log('===', this.goodInfo1[2]);
							this.$forceUpdate();
						}
					} else {
						this.$tools.showToast(res.info);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},

		// 获取压缩机功率
		getGl(brand) {
			var data = {
				// 'p_num':this.goodInfo1Sel[0],
				// 'wd':this.goodInfo1Sel[1],
				// 'dy':this.goodInfo1Sel[2],
				// 'zlj':zlj,
				type: this.goodInfo.type,
				brand: brand
			};
			this.$axios
				.axios('POST', this.$paths.getYsjGl, data)
				.then((res) => {
					console.log('下单结果', res);
					if (res.code == 1) {
						if (this.goodInfo.type <= 3) {
							for (var i = 0; i < res.data.length; i++) {
								res.data[i].gl = res.data[i].gl + 'HP';
							}
							this.goodInfo1[1] = res.data;
							this.$forceUpdate();
						}
					} else {
						this.$tools.showToast(res.info);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		// 获取品牌
		getYsjBrand() {
			var data = {
				// 'p_num':this.goodInfo1Sel[0],
				// 'wd':this.goodInfo1Sel[1],
				// 'dy':this.goodInfo1Sel[2],
				// 'zlj':zlj,
				type: this.goodInfo.type
			};
			this.$axios
				.axios('POST', this.$paths.getYsjBrand, data)
				.then((res) => {
					console.log('下单结果', res);
					if (res.code == 1) {
						if (this.goodInfo.type <= 3) {
							this.goodInfo1[0] = res.data;
							this.$forceUpdate();
						}
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

		//
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
			//  else {
			// 	this.$tools.showToast("请选择商品规格");
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
					for (var a = 0; a < data_specs.length; a++) {
						var obg = {
							name: data_specs[a],
							name1: data_specs[a] + 'HP',

							sel: false
						};
						data_specs[a] = obg;
					}
					this.info.goods.data_specs = data_specs;
					this.updateGoodSpace(0, this.goodInfo.type, data_specs);
					console.log('asd', this.info);
					this.getYsjBrand();
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
