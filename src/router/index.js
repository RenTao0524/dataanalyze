import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/loginPage', component: _import('login/index') },
  { path: '/', redirect: '/loginPage' },
  {
    path: '/homePage',
    component: Layout,
    children: [
      {
        path: 'defaultHomePage',
        component: _import('defaultHomePage/index')
      },
      {
        path: 'analysisPage',
        component: _import('analysisPage/analysisPageLayout'),
        children: [
          {
            path: 'dashboard',
            component: _import('analysisPage/pages/dashboard/index')
          },
          {
            path: 'statement',
            component: _import('analysisPage/pages/statement/index')
          },
          {
            path: 'customer',
            redirect: 'customer/customerGroup',
            component: _import('analysisPage/pages/customer/index'),
            children: [
              {
                path: 'customerGroup',
                component: _import('analysisPage/pages/customer/customerGroup')
              },
              {
                path: 'customerTable',
                component: _import('analysisPage/pages/customer/customerTable')
              }
            ]
          }
        ]
      },
      {
        path: 'modelingPage',
        component: _import('modelingPage/index')
      }
    ]
  },
  { path: '*', component: _import('errorPage/404') }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
