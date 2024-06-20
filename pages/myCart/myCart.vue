<template>
	<view>
		<view class="colonn cartitem  " style="padding:30rpx 0rpx;">
		<!-- 	<view class="roww ">
				<image src="../../static/nosel.png" class="w-30 h-30"></image>
				<view class="w-20"></view>
				<image src="../../static/01@2x.png" class="w-30 h-30"></image>
				<view class="w-20"></view>
				<view class="fs-30 w-400 txtShowLength1">侧出风-松下-et0000</view>
			</view>
			<view class="h-25"></view> -->
			<view class="roww border_bottom center_center m-bottom-20 p-bottom-20" v-for="(item,index) in cardList">
				<image src="../../static/sel.png" v-if="item.sel" @click="selClick(index)" class="w-30 h-30"></image>
				<image src="../../static/nosel.png" v-else @click="selClick(index)" class="w-30 h-30"></image>
				<view class="w-20"  @click="selClick(index)" ></view>
				<image :src="item.goods.cover"  @click="selClick(index)"  class="goodimg"></image>
				<view class="w-26"></view>
				<view class="colonn rowsb" style="min-height: 200rpx;">
					<view class="w-317  fs-30" :class="item.is?'':'txtShowLength2'" @click="selClick(index)">{{item.goods.info}}</view>
					<view class="quancanshu" v-if="!item.is" @click.stop="quanbucanshu(item)">全部参数>></view>
					<view class="quancanshu w-150" v-else @click.stop="quanbucanshu(item)">收回>></view>
					<view class="roww w-317" style="margin-top: 20rpx;">
						<view class="fs-30 " style="color: red;">￥{{item.goods.price}}</view>
						<view class="allline w-20"></view>
						<view class="roww asdsadr fs-30">
							<view class="jiahao p-left-10"
							@click.stop="jiajianClick(item,0,index)"
							>-</view>
							<view class="m-left-10 fs-30 asdsa m-right-10">{{item.num}}</view>
							<view  class="jiahao p-right-10"
							
							@click.stop="jiajianClick(item,1,index)"
							>+</view>
						</view>
					</view>
					
					<view class="allline"></view>
					
				</view>
				
			</view>
			<view class="roww center_center" v-if="cardList.length<=0">
				<view>暂无数据</view>
			</view>
			
		</view>
		
		<view class="colonn bottomvieww">
			<view class="roww p-all-20">
				<input v-model="remark" class="allline" placeholder="请输入备注" />
			</view>
			<view class=" roww center_center " style="padding:15rpx 20rpx;">
				<image @click.stop="selAllGood(true)" v-if="!isall" src="../../static/nosel.png" class="w-30 h-30"></image>
				<image @click.stop="selAllGood(false)" v-if="isall"  src="../../static/sel.png" class="w-30 h-30"></image>
				<view class="w-10"></view>
				<view  @click.stop="selAllGood(!isall)">全选</view>
				<view class="allline"></view>
				<view>合计：
				<text style="color: red;kao ">{{alprice}}</text>
				</view>
				<view class="w-20"></view>
				<view class="tijiap" @click.stop="toXiadan">结算</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardList:[],
				alprice:0,
				isall:false,
				selIds:[],
				'remark':""
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getList();
		},
		methods: {
			quanbucanshu(item){
				item.is = !item.is
			},
			toXiadan(){
				if(this.selIds.length<=0){
					this.$tools.showToast("请先选择商品再下单");
					return false;
				}
				var data={
					'car_ids':this.selIds,
					'openid1':uni.getStorageSync("userInfo").openid1,
					'remark':this.remark
				}
				
				this.$axios
					.axios('POST', this.$paths.pay22, data)
					.then(res => {
						console.log("下单结果",res)
						if(res.code==1){
							this.$tools.showToast("下单成功");
							setTimeout(res=>{
								this.getList();
							},1000)
						}else{
							this.$tools.showToast(res.info);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			
			getisAll(){
				var selnum=0;
				var selIds=[];
				for(var a=0;a<this.cardList.length;a++){
					if(this.cardList[a].sel){
						selnum=selnum+1;
						selIds.push(this.cardList[a].id);
					}
				}
				this.selIds=selIds;
				if(selnum==this.cardList.length){
					this.isall=true;
				}
				else{
					this.isall=false;
				}
				this.setAllNum();
			},
			selAllGood(boo){
				for(var a=0;a<this.cardList.length;a++){
					this.cardList[a].sel=boo;
				}
				this.isall=boo;
				this.getisAll();
				this.$forceUpdate()
			},
				selClick(a){
				this.cardList[a].sel=!this.cardList[a].sel;
				this.getisAll();
				
			},
			setAllNum(){
				var alprice=0;
				for(var a=0;a<this.cardList.length;a++){
					if(this.cardList[a].sel){
						alprice=alprice+this.cardList[a].num*this.cardList[a].goods.price;
					}
				}
				
				alprice=alprice.toFixed(2)
				this.alprice=alprice;
			},
			// 增加减少
			jiajianClick(item,type,index){
				if(type==0){
					this.cardList[index].num=this.cardList[index].num-1;
				}else{
					this.cardList[index].num=this.cardList[index].num+1;
				}
				// 
				var data={
					'openid1':uni.getStorageSync("userInfo").openid1,
					'car_id':item.id,
					'num':this.cardList[index].num
				}
				
				this.$axios
					.axios('POST', this.$paths.updateCar, data)
					.then(res => {
						console.log("下单结果",res)
						if(res.code==1){
							this.$tools.showToast("修改成功");
							if(this.cardList[index].num==0){
								setTimeout(res=>{
									this.getList()
								},1000)
							}
							this.setAllNum();
						}else{
							this.$tools.showToast(res.info);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			getList(){
				var userInfo=uni.getStorageSync("userInfo")
				if(!userInfo){
					return false;
				}
				var data={
					'openid1':uni.getStorageSync("userInfo").openid1
				}
				
				this.$axios
					.axios('POST', this.$paths.listCar, data)
					.then(res => {
						
						if(res.code==1){
							var cardList=res.data;
							for(var a=0;a<cardList.length;a++){
								cardList[a].sel=true;
								cardList[a].is=false;
							}
							this.cardList=cardList;
							this.isall = true
							this.setAllNum();
							console.log("购物车列表",this.cardList)
						}else{
							this.$tools.showToast(res.info);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
		}
	}
</script>

<style>
@import url(myCart.css);
</style>
