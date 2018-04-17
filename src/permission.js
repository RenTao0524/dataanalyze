import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

NProgress.configure({ showSpinner: false })// NProgress Configuration

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if (to.path === '/loginPage' || to.path === '/homePage/defaultHomePage') {
    next()
  } else {
    store.dispatch('setProjectList').then(res => {
      // res = 'defaultHomePage'
      if (res === 'defaultHomePage') {
        next('/homePage/defaultHomePage')
      } else {
        next()
      }
    })
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
