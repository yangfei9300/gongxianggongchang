<template>
	<view>
		<view style="width: 750rpx;padding-bottom: 10rpx;">
			<rich-text :nodes="info.content"></rich-text>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:""
			}
		},
		onLoad(){
			this.getgetPage()
		},
		methods: {
			getgetPage(){
				var data = {
					code:this.code
				};
				this.$axios
					.axios('POST', this.$paths.getPage, data)
					.then(res => {
						// console.log('res123: ',res);
						this.info=res.data[0];
						this.info.content=this.$tools.formatRichText(this.info.content);
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			}
		}
	}
</script>

<style>
@import url(synopsis.css);
</style>
