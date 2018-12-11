<template>
  <div class="follow-tab">
    <div class="follow-list">
      <div class="list-block" v-for="(item, index) in list" :key="index">
        <img src="../assets/header.jpg">
        <div class="list-info">
          <span class="front">{{item.front}}</span>
          <span class="do">{{item.do}}</span>
          <span class="end">{{item.end}}</span>
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
          front: '我是小 fa',
          do: '关注',
          end: '不知道起什么名字'
        },
        {
          front: '我是小 fa',
          do: '发布',
          end: '《我最喜欢吃的福州菜》'
        },
        {
          front: '我是小 fa',
          do: '发布',
          end: '《我最喜欢吃的福州菜》'
        }
      ]
    }
  }
}
</script>
