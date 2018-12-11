<template>
  <div class="message-list">
      <div class="list-block" v-for="(item,index) in list" :key="index" @click="jumpByParams(item.type, item.typeName)">
        <img class="list-icon" :src="item.url">
        <div class="list-info">
          <p class="list-content">
              <span class="list-username">{{item.username}}</span>
              <span>{{item.info}}</span>
              <span v-if="item.title">《{{item.title}}》</span>
          </p>
          <p class="list-time">{{item.content? item.content:item.time}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    jumpByParams (type, typeName) {
      this.$router.push(
        {
          name: 'MessageList',
          params: {
            type: type,
            typeName: typeName,
            list: [
              {
                url: require('../assets/finger.png'),
                username: '某用户',
                info: '点赞了你的笔记',
                time: '三分钟前',
                title: '我的美食笔记',
                type: 0,
                typeName: '点赞消息'
              }]
          }
        })
    }
  }
}
</script>
