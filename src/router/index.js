import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import Login from '@/page/login'
import Sign from '@/page/sign'
import Password from '@/page/password'
import Main from '@/page/main'
import Home from '@/page/home'
import New from '@/page/new'
import Message from '@/page/message'
import My from '@/page/my'
import Topic from '@/page/topic'
import Discuss from '@/page/discuss'
import Follow from '@/page/follow'
import Add from '@/page/add'
import Publish from '@/page/publish'
import MessageList from '@/page/message_list'
import Person from '@/page/person'
import Detail from '@/page/detail'
import Position from '@/page/position'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/content/:id',
      name: 'Content',
      component: Content
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/password',
      name: 'Password',
      component: Password
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/position',
      name: 'Position',
      component: Position
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/message-list',
      name: 'MessageList',
      component: MessageList
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      redirect: '/main/home',
      children: [{
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: '/new',
        name: 'New',
        component: New,
        redirect: '/new/topic',
        children: [{
          path: 'topic',
          name: 'Topic',
          component: Topic
        },
        {
          path: 'discuss',
          name: 'Discuss',
          component: Discuss
        },
        {
          path: 'follow',
          name: 'Follow',
          component: Follow
        }]
      },
      {
        path: 'message',
        name: 'Message',
        component: Message
      },
      {
        path: '/my',
        name: 'My',
        component: My
      }]
    }
  ]
})
