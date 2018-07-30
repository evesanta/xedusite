import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Markdown from '@/components/markdown/Markdown'
import MyVideo from '@/components/video/Video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/markdown',
      name: 'markdown',
      component: Markdown
    },
    {
      path: '/video',
      name: 'MyVideo',
      component: MyVideo
    }
  ]
})
