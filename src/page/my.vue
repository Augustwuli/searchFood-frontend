<template>
  <div class="my-page">
      <header>个人中心</header>
      <div class="head"  @click="jumpTo('Person')">
          <img :src="thumb_url" class="head-img">
          <div class="person-info">
            <div class="person-name">{{name}}</div>
            <div class="person-description">{{signature}}</div>
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
        }],
      thumb_url: '',
      name: '',
      signature: ''
    }
  },
  mounted () {
    /**
     * 第一次向服务器获取数据，之后就存到本地
     */
    if (localStorage.getInfo === 'true') {
      console.log('获取本地')
      this.getLocalInfo()
    } else {
      this.getUserInfo()
      console.log('向服务器获取')
    }
  },
  methods: {
    getUserInfo () {
      let jwt = localStorage.jwt
      this.$api.get(jwt, '/users/userInfo', null, r => {
        this.thumb_url = `http://localhost:3000/${r.data.thumb_url}`
        this.name = r.data.name
        this.signature = r.data.signature
        localStorage.setItem('thumb_url', `http://localhost:3000/${r.data.thumb_url}`)
        localStorage.setItem('name', r.data.name)
        localStorage.setItem('signature', r.data.signature)
        localStorage.setItem('gender', r.data.gender)
        localStorage.setItem('getInfo', 'true')
      })
    },
    getLocalInfo () {
      this.thumb_url = localStorage.thumb_url
      this.name = localStorage.name
      this.signature = localStorage.signature
      this.thumb_url = localStorage.thumb_url
    },
    jumpTo (pageName) {
      this.$router.push({name: pageName})
    }
  }
}
</script>
