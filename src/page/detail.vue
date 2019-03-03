<template>
  <div class="detail-page">
    <myHeader :title="title"></myHeader>
    <Swiper v-if="list.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
       <Slide v-for="(item,index) in list" :key="index">
           <img :src="'http://localhost:3000/' + item">
       </Slide>
    </Swiper>
    <div class="auth">
      <div class="left">
        <img v-if="auth_info.thumb_url" :src="'http://localhost:3000/' + auth_info.thumb_url">
        <img v-else="">
        <div class="auth-info">
          <div>{{auth_info.name}}</div>
          <div>粉丝：{{auth_info.fans}}</div>
        </div>
      </div>
      <img class="star" v-if="star" src="../assets/star.png" @click="getStar">
      <img class="star" v-else src="../assets/unstar.png" @click="getStar">
    </div>
    <div class="content">
      <div class="read">
        <img src="../assets/read.png">
        <div>{{detail.read_num}}</div>
      </div>
      <p class="title">{{detail.title}}</p>
      <p>{{detail.content}}</p>
    </div>
    <div class="comment">
      <div class="title">
        <div>评论</div>
        <div>12条</div>
      </div>
      <div class="comment-list">
        <div class="list-block" v-for="(item,index) in comment_list" :key="index">
          <div class="info">
            <div>{{item.name}}</div>
            <div>{{item.date}}</div>
          </div>
          <div class="comment-content">{{item.content}}</div>
        </div>
      </div>
      <div class="btns">
        <button>更多评论</button>
      </div>
    </div>
    <div class="add-comment">
      <img :src="thumb_url">
      <input v-model="comment" placeholder="添加评论...">
      <button @click="confirm">确认</button>
    </div>
  </div>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component'
import myHeader from '../components/header.vue'
export default {
  components: {Swiper, Slide, myHeader},
  data () {
    return {
      noteId: this.$route.params.id,
      comment: '',
      title: '笔记内容',
      list: [],
      thumb_url: '',
      auth_info: {},
      detail: {},
      comment_list: [
        {
          name: '用户123',
          date: '2019-01-02',
          content: '说的真好'
        }
      ],
      star: false
    }
  },
  created () {
    this.getData()
  },
  beforeDestroy () {
    let params = {
      noteId: this.noteId,
      read_num: this.detail.read_num
    }
    console.log(params)
    this.$api.post(null, `/notes/read`, params, r => {})
  },
  methods: {
    getData () {
      this.$api.get(null, `/notes/${this.noteId}`, null, r => {
        this.thumb_url = localStorage.thumb_url
        this.list = r.data.img_lists
        this.auth_info = r.data.auth_info
        this.detail = r.data.detail
        console.log(r.data)
      })
    },
    getStar () {
      this.star = !this.star
      let jwt = localStorage.jwt
      let params = {
        noteId: this.noteId,
        star: this.star
      }
      console.log(params)
      this.$api.post(jwt, '/notes/star', params, r => {
      })
    },
    confirm () {
      console.log(this.noteId)
      let jwt = localStorage.jwt
      let params = {
        noteId: this.noteId,
        content: this.comment
      }
      console.log(params)
      this.$api.post(jwt, '/comments/publish', params, r => {
      })
    }
  }
}
</script>
<style lang="scss">
  @import "../style/base/_reset.scss";
  @import "../style/scss/_detail.scss";
</style>
