<template>
  <div class="home-page">
    <search></search>
    <Swiper v-if="list.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
       <Slide v-for="(item,index) in list" :key="index">
           <img :src="item.url">
       </Slide>
    </Swiper>
    <div class="menu">
       <div class="select-tab">
           <img class="home-img" src="../assets/tab.png">
           <p>查看分类</p>
       </div>
       <div class="select-tab">
           <img class="home-img" src="../assets/hot.png">
           <p>热门推荐</p>
       </div>
       <div class="select-tab">
           <img class="home-img" src="../assets/more-star.png">
           <p>收藏最多</p>
       </div>
    </div>
    <div class="recommend">
        <p class="recommend-title">- 为你推荐 -</p>
        <div class="list">
          <div class="list-block" v-for="(item,index) in recommend_list" :key="index">
            <img :src="'http://localhost:3000/' + item.thumb_url">
            <div class="list-info">
                <p class="info-title">{{item.title}}</p>
                <div class="info-data">
                  <div><img src="../assets/star.png"><span>{{item.star_num}}</span></div>
                  <div><img src="../assets/read.png"><span>{{item.read_num}}</span></div>
                  <div><img src="../assets/comment.png"><span>{{item.comment_num}}</span></div>
                </div>
            </div>
          </div>
        </div>
    </div>
    <footer>- 到底啦 -</footer>
  </div>
</template>

<script>
import search from '../components/search.vue'
import { Swiper, Slide } from 'vue-swiper-component'
export default {
  components: {search, Swiper, Slide},
  data () {
    return {
      list: [
        {
          url: require('../assets/banner/first.jpg')
        },
        {
          url: require('../assets/banner/second.jpg')
        },
        {
          url: require('../assets/banner/third.jpg')
        }
      ],
      recommend_list: [
        // {
        //   url: require('../assets/food1.jpg'),
        //   title: '日系小精致不容错过的豚骨拉面不容错过的豚骨拉面',
        //   star: 10,
        //   read: 400,
        //   comment: 2
        // },
        // {
        //   url: require('../assets/food2.jpg'),
        //   title: '不容错过的豚骨拉面不容错过的豚骨拉面不容错过的豚骨拉面',
        //   star: 10,
        //   read: 400,
        //   comment: 2
        // },
        // {
        //   url: require('../assets/food3.jpg'),
        //   title: '海鲜面不容错过的豚骨拉面不容错过的豚骨拉面',
        //   star: 10,
        //   read: 400,
        //   comment: 2
        // },
        // {
        //   url: require('../assets/food4.jpg'),
        //   title: '日系小精致不容错过的豚骨拉面不容错过的豚骨拉面',
        //   star: 10,
        //   read: 400,
        //   comment: 2
        // }
      ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      let params = {

      }
      this.$api.get(null, '/notes/list', params, r => {
        this.recommend_list = r.data.notes
      })
    }
  }
}
</script>
<style lang="scss">
  @import "../style/base/_reset.scss";
</style>
