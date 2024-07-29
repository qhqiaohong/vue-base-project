import Vue from 'vue'
import VueRouter from 'vue-router'


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/HVversion/index')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/HVversion/index')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('@/views/HVversion/index/menu.vue')
  },
  {
    path: '/menu2',
    name: 'menu2',
    component: () => import('@/views/HVversion/index/menu2.vue')
  },
  // 登录
  {
    path: '/phoneLogin',
    name: 'phoneLogin',
    component: () => import('@/views/HVversion/login/phone.vue')
  },
  {
    path: '/phoneLogin2',
    name: 'phoneLogin2',
    component: () => import('@/views/HVversion/login/phone2.vue')
  },
   // 输入身份证号码登录
   {
    path: '/idCardLogin',
    name: 'idCardLogin',
    component: () => import('@/views/HVversion/login/idCard.vue')
  },
  //金融超市
  // 征信
  {
    path: '/zxbg',
    name: 'zxbg',
    component: () => import('@/views/HVversion/VocationalWork/FinancialSupermarket/zxbg/index.vue')
  },
  // 贷款额度
  {
    path: '/qydkedcs',
    name: 'qydkedcs',
    component: () => import('@/views/HVversion/VocationalWork/FinancialSupermarket/qydkedcs/index.vue')
  },
  // 匹配企业贷款产品
  {
    path: '/ppqydkcp',
    name: 'ppqydkcp',
    component: () => import('@/views/HVversion/VocationalWork/FinancialSupermarket/ppqydkcp/index.vue')
  },
    // 贷款产品
    {
      path: '/dkcp',
      name: 'dkcp',
      component: () => import('@/views/HVversion/VocationalWork/FinancialSupermarket/dkcp/index.vue')
    },
      // 融资需求发布
  {
    path: '/rzxqfb',
    name: 'rzxqfb',
    component: () => import('@/views/HVversion/VocationalWork/FinancialSupermarket/rzxqfb/index.vue')
  },
    //企业服务
    // 搜陕企
    {
      path: '/ssq',
      name: 'ssq',
      component: () => import('@/views/HVversion/VocationalWork/EnterpriseService/ssq/index.vue')
    },
     // 提诉求
     {
      path: '/tsq',
      name: 'tsq',
      component: () => import('@/views/HVversion/VocationalWork/EnterpriseService/tsq/index.vue')
    }, 
    // 企业政务事项办理
    {
     path: '/qyzwsxbl',
     name: 'qyzwsxbl',
     component: () => import('@/views/HVversion/VocationalWork/EnterpriseService/qyzwsxbl/index.vue')
   },
  //  政策
  // 详情
  {
    path: '/zcxq',
    name: 'zcxq',
    component: () => import('@/views/HVversion/VocationalWork/PolicyService/xq/index.vue')
  },
  // 公共服务
  // 基本信息
  {
    path: '/jbxx',
    name: 'jbxx',
    component: () => import('@/views/HVversion/VocationalWork/PublicService/xq/index.vue')
  },
  // 便民利企
  // 自助打印
  {
    path: '/zzdy',
    name: 'zzdy',
    component: () => import('@/views/HVversion/VocationalWork/peopleEnterprises/zzdy/index.vue')
  },
  //便民缴费
  {
    path: '/bmjf',
    name: 'bmjf',
    component: () => import('@/views/HVversion/VocationalWork/peopleEnterprises/bmjf/index.vue')
  },
  {
    path: '/sdfjn',
    name: 'sdfjn',
    component: () => import('@/views/HVversion/VocationalWork/peopleEnterprises/bmjf/page/index.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/HVversion/test1.vue')
  },
  // 职工养老待遇支付明细查询
  {
    path: '/zgyldyzfmx',
    name: 'zgyldyzfmx',
    component: () => import('@/views/HVversion/VocationalWork/peopleEnterprises/zgyldyzfmxcx/index.vue')
  },
    // 契税缴纳
    {
      path: '/qsjn',
      name: 'qsjn',
      component: () => import('@/views/HVversion/VocationalWork/peopleEnterprises/qsjn/index.vue')
    },
      // 输入身份证号码登录
  {
    path: '/idCardLogin',
    name: 'idCardLogin',
    component: () => import('@/views/HVversion/login/idCard.vue')
  },
  {
    path: '/idCardLogin',
    name: 'idCardLogin',
    component: () => import('@/views/HVversion/login/idCard.vue')
  },
  {
    path: '/phoneLoginNew',
    name: '/phoneLoginNew',
    component: () => import('@/views/HVversion/login/phoneNew.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
