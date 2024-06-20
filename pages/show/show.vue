<template>
	<view>
		<image @click="tondex" 
		src="https://shandongtibohui.zsyflive.com/profile/avatar/f5992d8f4e0463f7345600ee5060bf6.png" class="w-750" style="height: 100vh;"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			
		},
		methods: {
			tondex(){
				uni.switchTab({
					url:"/pages/lyb/lyb",
					complete:(res)=> {
						console.log("===",res);  
					}
				})
			}
		}
	}
</script>

<style>
@import url(show.css);
</style>
