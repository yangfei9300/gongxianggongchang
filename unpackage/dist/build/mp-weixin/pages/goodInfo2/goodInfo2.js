(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goodInfo2/goodInfo2"],{"5a32":function(o,t,n){"use strict";(function(o,t){var e=n("4ea4");n("b7ff");e(n("66fd"));var s=e(n("8f57"));o.__webpack_require_UNI_MP_PLUGIN__=n,t(s.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"8f57":function(o,t,n){"use strict";n.r(t);var e=n("a841"),s=n("f532");for(var i in s)["default"].indexOf(i)<0&&function(o){n.d(t,o,(function(){return s[o]}))}(i);n("92c4");var a=n("f0c5"),c=Object(a["a"])(s["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);t["default"]=c.exports},"92c4":function(o,t,n){"use strict";var e=n("d8f5"),s=n.n(e);s.a},a841:function(o,t,n){"use strict";n.d(t,"b",(function(){return e})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){}));var e=function(){var o=this.$createElement;this._self._c},s=[]},d82c:function(o,t,n){"use strict";(function(o,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{code:"",info:{},goodInfo:{},selInfo:null,isshowOrder:!1,showPhone:!1,vip_code:"",goodInfo1:[[],[],[],[],[],[],[]],goodInfo1SpaceName:["蒸发器类型","主机功率","启动方式","功能"],goodInfo1Sel:["","","",""],priaceData:{ysj_id:"",lnq_id:"",dkx_id:"",num:1,remark:""},goodPrice:{},buyType:1}},onLoad:function(t){this.vip_code=o.getStorageSync("userInfo").vip_code,this.goodInfo=o.getStorageSync("goodInfo"),this.code=t.code,this.getInfo();var n=o.getStorageSync("goodInfo1Sel"+this.goodInfo.code),e=o.getStorageSync("goodPrice"+this.goodInfo.code),s=o.getStorageSync("goodInfoSpaceLogin"+this.goodInfo.code),i=o.getStorageSync("priaceData"+this.goodInfo.code),a=o.getStorageSync("gooodInfoLogin");a&&(n&&(this.goodInfo1Sel=n),e&&(this.goodPrice=e),s&&(this.goodInfo1=s),i&&(this.priaceData=i))},onShow:function(){this.userInfo=o.getStorageSync("userInfo")},methods:{toNumClick:function(o){var t=this.priaceData.num;1==o?t+=1:t<2?t=1:t-=1,this.priaceData.num=t,this.$forceUpdate()},preventTouchMove:function(){},toSubmit:function(o){for(var t=!0,n=0;n<this.goodInfo1Sel.length;n++)""==this.goodInfo1Sel[n]&&(t=!1);if(!t)return this.$tools.showToast("请选择完规格，再操作"),!1;this.buyType=o,this.isshowOrder=!0},confirmOrder1:function(){var t=this,n=o.getStorageSync("userInfo");if(!n)return this.$tools.showToast("请先完善资料"),o.setStorageSync("goodInfo1Sel",this.goodInfo1Sel),o.setStorageSync("goodPrice",this.goodPrice),o.setStorageSync("goodInfoSpaceLogin"+this.goodInfo.code,this.goodInfo1),o.setStorageSync("gooodInfoLogin",this.goodInfo),o.setStorageSync("priaceData"+this.goodInfo.code,this.priaceData),setTimeout((function(t){o.navigateTo({url:"/pages/updateUserInfo/updateUserInfo"})}),1e3),!1;if(!n.nickname||""==n.nickname)return this.$tools.showToast("请先完善资料"),o.setStorageSync("goodInfo1Sel",this.goodInfo1Sel),o.setStorageSync("goodPrice",this.goodPrice),o.setStorageSync("goodInfoSpaceLogin"+this.goodInfo.code,this.goodInfo1),o.setStorageSync("gooodInfoLogin",this.goodInfo),o.setStorageSync("priaceData"+this.goodInfo.code,this.priaceData),setTimeout((function(t){o.navigateTo({url:"/pages/updateUserInfo/updateUserInfo"})}),1e3),!1;for(var e=!0,s=0;s<this.goodInfo1Sel.length;s++)""==this.goodInfo1Sel[s]&&(e=!1);if(!e)return this.$tools.showToast("请选择完规格，再操作"),!1;if(this.priaceData.num<=0||""==this.priaceData.num)return this.$tools.showToast("请输入购买数量，再操作"),!1;var i={openid1:o.getStorageSync("userInfo").openid1,code:this.code,dkx_id:this.priaceData.dkx_id,num:this.priaceData.num,remark:this.priaceData.remark};this.$axios.axios("POST",this.$paths.pay11,i).then((function(o){console.log("下单结果",o),1==o.code?(t.$tools.showToast("下单成功"),t.isshowOrder=!1,t.showphoneClick()):t.$tools.showToast(o.info)})).catch((function(o){console.log("错误回调",o)}))},addCard:function(){for(var t=this,n=!0,e=0;e<this.goodInfo1Sel.length;e++)""==this.goodInfo1Sel[e]&&(n=!1);if(!n)return this.$tools.showToast("请选择完规格，再操作"),!1;var s={openid1:o.getStorageSync("userInfo").openid1,code:this.code,dkx_id:this.priaceData.dkx_id,remark:this.priaceData.remark};this.$axios.axios("POST",this.$paths.addCar,s).then((function(o){console.log("下单结果",o),1==o.code?(t.$tools.showToast("加入购物车成功"),t.isshowOrder=!1):t.$tools.showToast(o.info)})).catch((function(o){console.log("错误回调",o)}))},clearnoSel:function(o){for(var t=0;t<this.goodInfo1Sel.length;t++)t>o&&(this.goodInfo1Sel[t]="");for(t=0;t<this.goodInfo1.length;t++)t>o&&(this.goodInfo1[t]=[])},goodsChange:function(o,t,n,e){n=parseInt(n.detail.value),console.log("=========",this.goodInfo1[0][n]),0==o?n=this.goodInfo1[0][n].zfq:1==o?n=this.goodInfo1[1][n].gl:2==o?n=this.goodInfo1[2][n].qd:3==o&&(n=this.goodInfo1[3][n].xp),this.selClick(o,"",n,e)},selClick:function(o,t,e,s){this.goodInfo1Sel[o]=e,this.$forceUpdate(),0==o?this.getYsjWd(e):1==o?this.getYsjDy(e):2==o?this.getYsjZlj(e):3==o&&this.getPrice1(),this.clearnoSel(o),setTimeout((function(o){n.pageScrollTo({scrollTop:Math.ceil(1e4*Math.random())})}),500)},getPrice1:function(){var o=this,t={zfq:this.goodInfo1Sel[0],gl:this.goodInfo1Sel[1].substring(0,this.goodInfo1Sel[1].length-2),qd:this.goodInfo1Sel[2],xp:this.goodInfo1Sel[3]};this.$axios.axios("POST",this.$paths.getDkxPrice,t).then((function(t){console.log("下单结果",t),1==t.code?(o.goodPrice=t.data.price,o.priaceData.dkx_id=t.data.id):o.$tools.showToast(t.info)})).catch((function(o){console.log("错误回调",o)}))},getYsjZlj:function(t){var n=this,e={zfq:this.goodInfo1Sel[0],gl:this.goodInfo1Sel[1].substring(0,this.goodInfo1Sel[1].length-2),qd:t};this.$axios.axios("POST",this.$paths.getDkxXp,e).then((function(t){console.log("下单结果",t),1==t.code?(n.goodInfo1[3]=t.data,o.removeStorageSync("gooodInfoLogin"),n.$forceUpdate()):n.$tools.showToast(t.info)})).catch((function(o){console.log("错误回调",o)}))},getYsjDy:function(o){var t=this,n={zfq:this.goodInfo1Sel[0],gl:o.substring(0,o.length-2)};this.$axios.axios("POST",this.$paths.getDkxQd,n).then((function(o){console.log("下单结果",o),1==o.code?(t.goodInfo1[2]=o.data,t.$forceUpdate()):t.$tools.showToast(o.info)})).catch((function(o){console.log("错误回调",o)}))},getYsjWd:function(o){var t=this,n={zfq:o};this.$axios.axios("POST",this.$paths.getDkxGl,n).then((function(o){if(1==o.code){console.log("===",o.data);for(var n=0;n<o.data.length;n++)o.data[n].gl=o.data[n].gl+"HP";t.goodInfo1[1]=o.data,t.$forceUpdate()}else t.$tools.showToast(o.info)})).catch((function(o){console.log("错误回调",o)}))},getYasuoData:function(){var o=this;this.$axios.axios("POST",this.$paths.getDkxZfq,{}).then((function(t){console.log("下单结果",t),1==t.code?(console.log("===",t.data),o.goodInfo1[0]=t.data,o.$forceUpdate()):o.$tools.showToast(t.info)})).catch((function(o){console.log("错误回调",o)}))},updateGoodSpace:function(o,t,n){n=this.addSelList(n),t<=3&&(this.goodInfo1[o]=n),4==t&&(this.goodInfo1[o]=n)},addSelList:function(o){for(var t=0;t<o.length;t++)o[t].sel=!1;return o},showphoneClick:function(){this.showPhone=!this.showPhone},confirmOrder:function(){var t=this,n={code:this.code,goods_sku:this.selInfo[0].sku,openid1:o.getStorageSync("userInfo").openid1};this.$axios.axios("POST",this.$paths.payapi,n).then((function(o){console.log("下单结果",o),1==o.code?(t.$tools.showToast("下单成功"),t.isshowOrder=!1,t.showphoneClick()):t.$tools.showToast(o.info)})).catch((function(o){console.log("错误回调",o)}))},showOrderClick:function(){this.isshowOrder=!this.isshowOrder},isSelGood:function(){for(var o=this.info.goods.data_specs,t=this.info.goods.data_items,n=[],e=0;e<o.length;e++)""!=o[e].sel&&n.push(o[e].sel);if(n.length!=o.length)return console.log("没有选完"),!1;for(e=0;e<t.length;e++){for(var s=n.join(","),i=[],a=0;a<t[e].length;a++)i.push(t[e][a].name);i.join(",")==s&&(console.log("当前选中",t[e]),this.selInfo=t[e])}},getInfo:function(t){var n=this,e={code:this.code,openid1:o.getStorageSync("userInfo").openid1};this.$axios.axios("POST",this.$paths.getGoodsInfo,e).then((function(o){n.info=o.data;n.info.goods.p_num;n.getYasuoData(),console.log("asd",n.info)})).catch((function(o){console.log("错误回调",o)}))},aaa:function(){}}};t.default=e}).call(this,n("543d")["default"],n("bc2e")["default"])},d8f5:function(o,t,n){},f532:function(o,t,n){"use strict";n.r(t);var e=n("d82c"),s=n.n(e);for(var i in e)["default"].indexOf(i)<0&&function(o){n.d(t,o,(function(){return e[o]}))}(i);t["default"]=s.a}},[["5a32","common/runtime","common/vendor"]]]);