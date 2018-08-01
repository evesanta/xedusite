import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Markdown from '@/components/eduVideo/markdown/Markdown'
import MyVideo from '@/components/eduVideo/video/Video'
import SeekTable from '@/components/eduVideo/seekTable/SeekTable'
import Items from '@/components/eduVideo/items/Items'

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
    },
    {
      path: '/seektable',
      name: 'seekTable',
      component: SeekTable
    },
    {
      path: '/items',
      name: 'items',
      component: Items
    }
  ]
})
