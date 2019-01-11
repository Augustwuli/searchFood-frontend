<template>
  <div class="sort-page">
    <myHeader :title="title"></myHeader>
    <div class="top">
      <div @click="click(1)">推荐商家</div>
      <div @click="click(2)">推荐美食</div>
      <div @click="click(3)">美食攻略</div>
    </div>
    <div class="recommend">
        <div class="list">
          <div class="list-block" v-for="(item,index) in recommend_list" :key="index" @click="click(item.id)">
            <img :src="'http://localhost:3000/' + item.thumb_url">
            <div class="list-info">
                <p class="info-title">{{item.title}}</p>
                <div class="info-data">
                  <div><img src="../assets/read.png"><span>{{item.read_num}}</span></div>
                  <div><img src="../assets/comment.png"><span>{{item.comment_num}}</span></div>
                  <div><img src="../assets/star.png"><span>{{item.star_num}}</span></div>
                </div>
            </div>
          </div>
        </div>
    </div>
    <footer>- 到底啦 -</footer>
  </div>
</template>
<script>
import myHeader from '../components/header.vue'
export default {
  components: { myHeader },
  data () {
    return {
      title: '分类',
      recommend_list: []
    }
  },
  methods: {
    click (id) {
      this.$api.get(null, `/notes/sort/${id}`, null, r => {
        this.recommend_list = r.data.notes
      })
    }
  }
}
</script>
<style lang="sass">
  @import "../style/scss/_sort.scss";
</style>
