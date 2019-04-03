import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view//login/login'

import home from '@/view/home/index'
import h_enterprise from '@/view/home/enterprise'
import h_publicOpinion from '@/view/home/publicOpinion'
import h_patent from '@/view/home/patent'

import search from '@/view/search/index'
import s_enterprise from '@/view/search/enterprise'
import s_publicOpinion from '@/view/search/publicOpinion'
import s_patent from '@/view/search/patent'

import details from '@/view/commonDetails/index'
import d_patentDetail from '@/view/commonDetails/patentDetail'

import companyDetails from '@/view/companyDetails/index'
import essential from '@/view/companyDetails/essential'
import risk from '@/view/companyDetails/risk'
import intellectual from '@/view/companyDetails/intellectual'
import annualReports from '@/view/companyDetails/annualReports'
import management from '@/view/companyDetails/management'
import financial from '@/view/companyDetails/financial'
import publicOpinion from '@/view/companyDetails/publicOpinion'
import userDefined from '@/view/companyDetails/userDefined'


Vue.use(Router)

const router = new Router({
  routes: [
    // 默认
    {
      path: '/',
      component: login
    },
    // 登录
    {
      path: '/login',
      component: login
    },
    // 首页
    {
      path: '/home',
      component: home,
      redirect: '/home/enterprise',
      children:[
        // 首页 企业信息
        {
          path: '/home/enterprise',
          component: h_enterprise,
        },
        // 首页 舆情信息
        {
          path: '/home/publicOpinion',
          component: h_publicOpinion,
        },
        // 首页 专利数据
        {
          path: '/home/patent',
          component: h_patent,
        }
      ]
    },
    // 搜索
    {
      path: '/search',
      component: search,
      redirect: '/search/enterprise',
      children:[
        // 搜索 企业信息
        {
          path: '/search/enterprise',
          component: s_enterprise,
        },
        // 搜索 舆情信息
        {
          path: '/search/publicOpinion',
          component: s_publicOpinion,
        },
        // 搜索 专利数据
        {
          path: '/search/patent',
          component: s_patent,
        }
      ]
    },
    // 详情页
    {
      path: '/details',
      component: details,
      redirect: '/details/patentDetail',
      children:[
        // 专利详情
        {
          path: '/details/patentDetail',
          component: d_patentDetail,
        },
      ]
    },
    // 企业信息
    {
      path: '/companyDetails',
      redirect: '/companyDetails/essential',
      component: companyDetails,
      children:[
        // 基本信息
        {
          path: '/companyDetails/essential',
          component: essential,
        },
        // 风险信息
        {
          path: '/companyDetails/risk',
          component: risk,
        },
        // 知识产权
        {
          path: '/companyDetails/intellectual',
          component: intellectual,
        },
        // 企业年报
        {
          path: '/companyDetails/annualReports',
          component: annualReports,
        },
        // 经营信息
        {
          path: '/companyDetails/management',
          component: management,
        },
        // 财务信息
        {
          path: '/companyDetails/financial',
          component: financial,
        },
        // 舆情信息
        {
          path: '/companyDetails/publicOpinion',
          component: publicOpinion,
        },
        // 自定义页
        {
          path: '/companyDetails/userDefined',
          component: userDefined,
        }
      ]
    },
    // 缺省
    {
      path: '/*',
      component: login
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem('SHANGJIAOSUOUSER')) {
    next()
  } else {
    if(to.path === '/login'){
        next()
    }else {
      next({ path: '/login' })
    }
  }
})
export default router
