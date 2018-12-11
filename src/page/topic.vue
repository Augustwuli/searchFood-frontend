<template>
  <div class="topic-tab">
    <div class="topic-list">
      <div class="list-block" v-for="(item, index) in list" :key="index">
        <img class="list-img" :src="item.url">
        <div class="mask">
          <p class="num">- 共{{item.num}}条笔记 -</p>
          <p>{{item.title}}</p>
        </div>
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
          url: require('../assets/topic/1.jpg'),
          title: '你吃过什么样的草莓料理',
          num: 25
        },
        {
          url: require('../assets/topic/2.jpg'),
          title: '你吃过什么样的草莓料理',
          num: 63
        },
        {
          url: require('../assets/topic/1.jpg'),
          title: '你吃过什么样的草莓料理',
          num: 98
        }
      ]
    }
  }
}
</script>
