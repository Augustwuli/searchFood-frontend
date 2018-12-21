<template>
  <div class="my-page">
      <header>个人中心</header>
      <div class="head">
          <img src="../assets/header.jpg" class="head-img">
          <div class="person-info" @click="jumpTo('Person')">
            <div class="person-name">我是小 fa </div>
            <div class="person-description">个性签名个性签名个性签名</div>
          </div>
          <img class="arrow" src="../assets/arrow.png">
      </div>
      <div class="person-list">
        <div class="list-block" v-for="(item, index) in list" :key="index">
          <img  class="list-icon" :src="item.url">
          <span>{{item.name}}</span>
          <img class="arrow" src="../assets/arrow.png">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          url: require('../assets/note.png'),
          name: '我的美食笔记'
        },
        {
          url: require('../assets/follow.png'),
          name: '我的粉丝'
        },
        {
          url: require('../assets/follower.png'),
          name: '我的关注'
        },
        {
          url: require('../assets/my-star.png'),
          name: '我的收藏'
        },
        {
          url: require('../assets/set.png'),
          name: '设置'
        }]
    }
  },
  methods: {
    jumpTo (pageName) {
      this.$router.push({name: pageName})
    }
  }
}
</script>
