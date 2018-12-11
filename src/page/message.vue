<template>
  <div class="message-page">
    <header>消息</header>
    <message :list="list"></message>
  </div>
</template>

<script>
import message from '../components/message.vue'
export default {
  components: {message},
  data () {
    return {
      list: [
        {
          url: require('../assets/finger.png'),
          username: '某用户',
          info: '点赞了你的笔记',
          time: '三分钟前',
          title: '我的美食笔记',
          type: 0,
          typeName: '点赞消息'
        },
        {
          url: require('../assets/message-comment.png'),
          username: '某用户',
          info: '回复你的评论',
          time: '三分钟前',
          content: '写得真棒',
          type: 1,
          typeName: '评论消息'
        },
        {
          url: require('../assets/share.png'),
          username: '某用户',
          info: '转发了你的笔记',
          time: '三分钟前',
          title: '我的美食笔记',
          type: 2,
          typeName: '转发消息'
        },
        {
          url: require('../assets/more-star.png'),
          username: '某用户',
          info: '收藏了你的笔记',
          time: '三分钟前',
          title: '我的美食笔记',
          type: 3,
          typeName: '收藏消息'
        }]
    }
  }
}
</script>
<style lang="scss">
@import "../style/base/_base.scss"
</style>
