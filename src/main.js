// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Octicon from 'vue-octicon/components/Octicon.vue'
import 'vue-octicon/icons'

Vue.use(ElementUI)
Vue.use(Octicon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
