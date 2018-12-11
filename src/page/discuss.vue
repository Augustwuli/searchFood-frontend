<template>
  <div class="discuss-tab">
    <div class="discuss-list">
      <div class="list-block" v-for="(item, index) in list" :key="index">
        <div class="list-info">
          <div class="list-person">
            <img class="person-image" :src="item.url">
            <div class="person-info">
              <p class="person-name">{{item.name}}</p>
              <p class="person-description">{{item.description}}·{{item.time}}</p>
            </div>
          </div>
          <div class="list-content">{{item.content}}</div>
        </div>
        <div class="list-data">
          <div class="list-icon">
            <img src="../assets/like.png">
            <span>{{item.like}}</span>
          </div>
          <div class="list-icon">
            <img src="../assets/new-comment.png">
            <span>{{item.comment}}</span>
          </div>
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
          url: require('../assets/header.jpg'),
          name: '我叫小 fa',
          description: '个性签名个性签名',
          content: '福州哪能吃到茄盒呀福州哪能吃到茄盒呀福州哪能吃到茄盒呀福州哪能吃到茄盒呀福州哪能吃到茄盒呀',
          time: '三天前',
          like: 12,
          comment: 5
        },
        {
          url: require('../assets/header.jpg'),
          name: '我叫小 fa',
          description: '个性签名个性签名',
          content: '福州哪能吃到茄盒呀',
          time: '三天前',
          like: 12,
          comment: 5
        },
        {
          url: require('../assets/header.jpg'),
          name: '我叫小 fa',
          description: '个性签名个性签名',
          content: '福州哪能吃到茄盒呀',
          time: '三天前',
          like: 12,
          comment: 5
        }
      ]
    }
  }
}
</script>
