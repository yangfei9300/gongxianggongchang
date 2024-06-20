<template>
	<view>
		<view class="colonn">
			<image 
			mode="widthFix"
			class="w-750" 
			:src="'https://shandongtibohui.zsyflive.com/profile/gxgc/'+(goodINdex+1)+'.png'"
			></image>
			<view class="title">
				{{goodListAll[goodINdex][0].name}}
			</view>
			<!-- <view class="roww  border_bottom" style="padding:30rpx 30rpx;">
				<view>型号</view>
				<view class="allline"></view>
				<view class="huanhang w-600">
					<view 
					:class="{
						'asd':indexSel==index,
						'asd1':indexSel!=index,
					}"
					class="asd" 
					@click.stop="indexSelClick(index)"
					v-for="(item,index) in goodListAll[goodINdex]">{{item.info}}</view>
				</view>
			</view>
			 -->
			<view class="roww center_center" v-for="(item,index) in goodListAll[goodINdex]">
				<view class="w-20"></view>
				<view style="max-400">
					{{item.info}}
				</view>
				<view style="color: red;">
					(￥{{item.price}})
				</view>
				<view class="allline"></view>
				<view class="roww "  style="padding:30rpx 30rpx;">
					<view class="allline"></view>
					<view class="roww" style="text-align: right">
						<image src="/static/jianhao.png" @click.stop="toNumClick(0,index)" class="w-50 h-50"></image>
						<view class="w-10"></view>
						<input
							style="width: 80rpx; text-align: center; border: 1px solid #c9c9c9; height: 50rpx"
							placeholder="请输入数量"
							type="number" v-model="item.num"
						/>
						<view class="w-10"></view>
						<image src="/static/jiahao.png" @click.stop="toNumClick(1,index)" class="w-50 h-50"></image>
					</view>
				</view>
			</view>
			
			
			<view class="roww w-750 p-all-30 border_bottom">
				<view>总价格</view>
				<view class="allline"></view>
				<view style="color: red;">{{priceAll}}元</view>
			</view>
			
			
			<view class="roww  border_bottom" style="padding:30rpx 30rpx;">
				<view>配置</view>
				<view class="allline"></view>
				<view class="w-600">{{jieshi[goodINdex]}}</view>
			</view>
			<view class="msxd" @click.stop="toXiadam">立即下单</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodINdex:0,
				jieshi:[
					'镀锌板防腐喷塑外壳、Φ9.52内螺纹亲水铝箔冷凝器、80W铜线电机、压控、油表、过滤器、储液器、空调阀、压缩机配管.',
					'镀锌板防腐喷塑外壳、Φ9.52内螺纹亲水铝箔冷凝器、微光外转子电机、木包装.',
					'镀锌板防腐喷塑外壳、Φ9.52内螺纹亲水铝箔冷凝器、80W铜线电机、压控、油表、过滤器、储液器、空调阀.',
					'镀锌板防腐喷塑外壳、微光外转子电机、出口包装.'
				],
				goodList:[
					{
						'name':'侧出风冷凝器',
						'info':'3HP\FNL29m²',
						'price':'1350',
						'num':0,
					},
					{
						'name':'侧出风冷凝器',
						'info':'4HP\FNL39m²',
						'price':'1450',
						'num':0,
					},{
						'name':'侧出风冷凝器',
						'info':'5HP\FNL49m²',
						'price':'1850',
						'num':0,
					},{
						'name':'侧出风冷凝器',
						'info':'6HP\FNL59m²',
						'price':'2050',
						'num':0,
					}
				],
				goodList1:[
					{
						'name':'顶出风冷凝器',
						'info':'FNU70m²',
						'price':'2600',
						'num':0,
					},
					{
						'name':'顶出风冷凝器',
						'info':'FNU80m²',
						'price':'2900',
						'num':0,
					},{
						'name':'顶出风冷凝器',
						'info':'FNU100m²',
						'price':'3200',
						'num':0,
					},{
						'name':'顶出风冷凝器',
						'info':'FNU120m²',
						'price':'3800',
						'num':0,
					},{
						'name':'顶出风冷凝器',
						'info':'FNU150m²',
						'price':'4400',
						'num':0,
					}
				],
				goodList2:[
					{
						'name':'爆款机组',
						'info':'3HP松下SB263机组',
						'price':'2600',
						'num':0,
					},
					{
						'name':'爆款机组',
						'info':'5HP松下SB373机组',
						'price':'3100',
						'num':0,
					},{
						'name':'爆款机组',
						'info':'3HP谷轮ZB21KQ机组',
						'price':'3100',
						'num':0,
					},{
						'name':'爆款机组',
						'info':'5HP谷轮ZB38KQ机组',
						'price':'4000',
						'num':0,
					}
				],goodList3:[
					{
						'name':'路伟(LU-VE)爆款冷凝器',
						'info':'ATC124/23.3KW/FN2-110',
						'price':'2600',
						'num':0,
					},
					{
						'name':'路伟(LU-VE)爆款冷凝器',
						'info':'ATC135/34.1KW/FN2-160',
						'price':'3600',
						'num':0,
					}
				],
				indexSel:-1,
				goodNum:0,
				goodListAll:[],
				priceAll:0,
			}
		},
		onLoad(options) {
			this.goodINdex=parseInt(options.index);
			var goodListAll=this.goodListAll;
			goodListAll.push(this.goodList);
			goodListAll.push(this.goodList1);
			goodListAll.push(this.goodList2);
			goodListAll.push(this.goodList3);
			this.goodListAll=goodListAll;
		},
		methods: {
			
			getPriceAll(){
				var goodlist=this.goodListAll[this.goodINdex];
				var priceAll=0;
				for(var a=0;a<goodlist.length;a++){
					priceAll=priceAll+goodlist[a].num*goodlist[a].price;
				}
				this.priceAll=priceAll;
			},
			//数量加减
			toNumClick(type,index) {
				var num = this.goodListAll[this.goodINdex][index].num;
				if (type == 1) {
					num = num + 1;
				} else {
					if (num <=1) {
						num = 0;
					} else {
						num = num - 1;
					}
				}
				 this.goodListAll[this.goodINdex][index].num=num;
				 console.log("==",this.goodListAll[this.goodINdex])
				 
				this.getPriceAll();
				this.$forceUpdate();
			},
			indexSelClick(index){
				this.indexSel=index;
				this.getPriceAll();
			},
			toXiadam(){
				
				
				var userInfo = uni.getStorageSync('userInfo');
				if (userInfo) {
					if (!userInfo.nickname || userInfo.nickname == '') {
						this.$tools.showToast('请先完善资料');
						setTimeout((res) => {
							uni.navigateTo({
								url: '/pages/updateUserInfo/updateUserInfo'
							});
						}, 1000);
						return false;
					}
				}
				var selGoods=this.usSubmt()
				if(selGoods.length<=0){
					return false;
				}
				var nums=[];
				var goodsSpecs=[];
				var moneys=[]
				for(var a=0;a<selGoods.length;a++){
					nums.push(selGoods[a].num);
					goodsSpecs.push(selGoods[a].info);
					moneys.push(selGoods[a].price);
				}
				
				
				
				// if(this.indexSel<0){
				// 	this.$tools.showToast("请选择型号");
				// 	return false;
				// }
				// if(this.goodNum<0){
				// 	this.$tools.showToast("购买数量必须大于0");
				// 	return false;
				// }
				// var priceAll=this.goodListAll[this.goodINdex][this.indexSel].price*this.goodNum;
				var data = {
					openid1:uni.getStorageSync("userInfo").openid1,
					goods_num:nums.length,
					num :nums,
					remark:"618活动",
					goods_name:this.goodListAll[0][0].name,
					goods_spec:goodsSpecs,
					money:moneys,
				};
				this.$axios
					.axios('POST', this.$paths.pay618, data)
					.then((res) => {
						console.log('下单结果', res);
						if (res.code == 1) {
							this.$tools.showToast("下单成功");
						} else {
							this.$tools.showToast(res.info);
						}
					})
					.catch((err) => {
						console.log('错误回调', err);
					});
			},
			usSubmt(){
				// 判断所有的数量
				var goodList=this.goodListAll[this.goodINdex];
				var numIs=false;
				var selGoods=[]
				for (var a=0;a<goodList.length;a++) {
					if(goodList[a].num>0){
						numIs=true;
						selGoods.push(goodList[a]);
					}
				} 
				if(!numIs){
					this.$tools.showToast("数量不能都为0");
					return selGoods;
				}
				return selGoods;
			},
		}
	}
</script>

<style>
@import url(lybInfo.css);
</style>
