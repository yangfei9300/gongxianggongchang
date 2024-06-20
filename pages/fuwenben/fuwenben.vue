<template>
	<view>
		<rich-text :nodes="fuwenben"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fuwenben:""
			}
		},
		onLoad() {
			var fuwenben=uni.getStorageSync("contentLnq");
			if(fuwenben!=""){
				this.fuwenben=this.$tools.formatRichText(fuwenben);
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url(fuwenben.css);
</style>
