// export const BASE_URL = 'http://tangyishijia.huizukeji.cn:81/zhihui'   
// export const BASE_URL = 'http://192.168.0.100:8080/api'
export const BASE_URL = 'https://gxgc.imjiayi.com/api'
//----------项目接口请求路径-----------
// 授权注册接口  registerUserInfo
const getPictureList =BASE_URL + '/api/getPictureList' 
// 画册详情  
const getPictureInfo =BASE_URL + '/api/getPictureInfo' 
//公司简介
const getPage =BASE_URL + '/api/getPage' 
 // 
const getGoodsList =BASE_URL + '/api/getGoodsList' 
// 商品详情
const getGoodsInfo =BASE_URL + '/api/getGoodsInfo' 
// 确认下单页  /api/api/confirmOrder
const confirmOrder =BASE_URL + '/api/confirmOrder' 
// 下单接口 
const payapi =BASE_URL + '/api/pay' 
// 获取openid
const loginapi =BASE_URL + '/api/login'  
// 是否完善信息 
const isAuthapi =BASE_URL + '/api/isAuth'
// 上传图片  
const file1Upload = 'https://gxgc.imjiayi.com/admin/api.Upload/file1'
// 修改个人信息  
const userInfoUpdate = BASE_URL + '/api/userInfoUpdate'
// 完善个人企业信息  
const companyInfoUpdate = BASE_URL + '/api/companyInfoUpdate'
// 订单列表   
const orderList = BASE_URL + '/api/orderList'
// 完善信息getCompanyInfo
const getCompanyInfo = BASE_URL + '/api/getCompanyInfo'
// 获取pdf列表  /api/api/getPictureListNew
const getPictureListNew = BASE_URL + '/api/getPictureListNew'
//获取压缩机应用温度
const getYsjWd = BASE_URL + '/api/getYsjWd'
//获取压缩机应用温度
const getYsjDy = BASE_URL + '/api/getYsjDy'
//获取制冷剂
const getYsjZlj = BASE_URL + '/api/getYsjZlj'
// 获取压缩机品牌  /api/api/getYsjBrand
const getYsjBrand = BASE_URL + '/api/getYsjBrand'
// 获取压缩机信号
const getYsjXh = BASE_URL + '/api/getYsjXh'
// 获取冷凝气型号
const getLnq = BASE_URL + '/api/getLnq'
// 获取价格  /api/api/getPrice1
const getPrice1 = BASE_URL + '/api/getPrice1'

// 冷风机
// 蒸发面积
const getLfjZf = BASE_URL + '/api/getLfjZf'
//引用温度
const getLfjWd = BASE_URL + '/api/getLfjWd'
//冷风机化霜方式 /api/api/getLfjHs
const getLfjHs = BASE_URL + '/api/getLfjHs'
//  冷风机电压工况  /api/api/getLfjDy
const getLfjDy = BASE_URL + '/api/getLfjDy'
//  冷风机价格
const getLfjPrice = BASE_URL + '/api/getLfjPrice'
// 加入购物车  /api/api/addCar
const addCar = BASE_URL + '/api/addCar'
// 获取购物车列表 /api/api/listCar
const listCar = BASE_URL + '/api/listCar'
// 购物车增减  /api/api/updateCar
const updateCar = BASE_URL + '/api/updateCar'
// 立即下单 
const pay11 = BASE_URL + '/api/pay11'
// 购物车下单 /api/api/pay22
const pay22 = BASE_URL + '/api/pay22'
// 获取浏览量  /api/api/getClick
const getClick = BASE_URL + '/api/getClick'

//电控箱  
// 获取电控箱库温
const getDkxWd = BASE_URL + '/api/getDkxWd'
// 获取电控箱机组功率 
// const getDkxGl = BASE_URL + '/api/getDkxGl'
// 获取电控箱电压工况
const getDkxDy = BASE_URL + '/api/getDkxDy'
// 获取电控箱选配 /api/api/getDkxXp
// const getDkxXp = BASE_URL + '/api/getDkxXp'
// 获取电控箱价格
const getDkxPrice = BASE_URL + '/api/getDkxPrice'
// 首页轮播图  api/homeSlider
const homeSlider = BASE_URL + '/api/homeSlider'



// 并联机组功率  /api/api/getBlGl
const getBlGl = BASE_URL + '/api/getBlGl'
// 压缩机数量  /api/api/getBlYsjNum
const getBlYsjNum = BASE_URL + '/api/getBlYsjNum'
// 获取并联机组应用温度
const getBlWd = BASE_URL + '/api/getBlWd'
// 获取并联机组制冷剂   /api/api/getBlZlj
const getBlZlj = BASE_URL + '/api/getBlZlj'
// 压缩机品牌  /api/api/getBlBrand
const getBlBrand = BASE_URL + '/api/getBlBrand'
// 压缩机型号 /api/api/getBlXh
const getBlXh = BASE_URL + '/api/getBlXh'
// 斌练级价格
const getBlPrice = BASE_URL + '/api/getBlPrice'

// 机控箱
const getDkxZfq = BASE_URL + '/api/getDkxZfq'
// 主机功率 取电控箱机组功率 
const getDkxGl = BASE_URL + '/api/getDkxGl'
// 启动方式  /api/api/getDkxQd
const getDkxQd = BASE_URL + '/api/getDkxQd'
// 功能  /api/api/getDkxXp
const getDkxXp = BASE_URL + '/api/getDkxXp'

// 
const getYsjGl = BASE_URL + '/api/getYsjGl'

 //电机选择 
 const getLfjDj = BASE_URL + '/api/getLfjDj'
 
 // 获取手机号  
 const getPhone = BASE_URL + '/api/getPhone'
 // 618下单
 const pay618 = BASE_URL + '/api/pay618_'
  const getCouponStatus = BASE_URL + '/api/getCouponStatus'
 
  const getCoupon = BASE_URL + '/api/getCoupon'
  
 // 上传图片  gxgc.imjiayi.com/admin/api.Upload/file1
 // const file1Upload =  'https://gxgc.imjiayi.com/admin/api/Upload/file1'
 
 
 
 export default {getCouponStatus,
 getCoupon,
	 getYsjGl,getPhone,pay618,
	 getDkxQd,getDkxXp,
	 getBlPrice,getDkxZfq,getDkxGl,
	 getBlZlj,getBlBrand,getBlXh,
	 getBlGl,getBlYsjNum,getBlWd,
	 getDkxXp,getDkxPrice,homeSlider,
	 getDkxWd,getDkxGl,getDkxDy,
	 pay11,pay22,getClick,
	 addCar,listCar,updateCar,
	 getLfjDy,getLfjPrice,
	 getLfjZf,getLfjWd,getLfjHs,
	 getPrice1,
	 getYsjBrand,getYsjXh,getLnq,
	 getYsjWd,getYsjDy,getYsjZlj,
	 orderList,getCompanyInfo,getPictureListNew,
	 file1Upload,userInfoUpdate,payapi,
	 confirmOrder,loginapi,isAuthapi,companyInfoUpdate,
	 getGoodsList,getGoodsInfo,
 	getPictureList,getPictureInfo,getPage,getLfjDj
 }
 