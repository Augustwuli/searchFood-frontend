<template>
  <div class="detail-page">
    <myHeader :title="title"></myHeader>
    <Swiper v-if="list.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
       <Slide v-for="(item,index) in list" :key="index">
           <img :src="item.url">
       </Slide>
    </Swiper>
    <div class="auth">
      <div class="left">
        <img src="../assets/header.jpg">
        <div class="auth-info">
          <div>叫我小发</div>
          <div>粉丝：200</div>
        </div>
      </div>
      <img class="star" src="../assets/star.png">
    </div>
    <div class="content">
      <div class="read">
        <img src="../assets/read.png">
        <div>1000</div>
      </div>
      <p class="title">【福州】身为福建省会似乎显得不那么有存在感。</p>
      <p>福州，身为福建省会，在厦门的耀眼光芒之下，似乎显得不那么有存在感。曾在这座城市读完大学，整整生活了四年，对它的印象，除去永远杂乱无章、永远在修天桥、修地铁、修路的紊乱交通，除去商业化透了的三坊七巷，当然就是鱼丸、肉燕、芋泥、花生汤、锅边糊、元宵………这些说不完的街边小食，以及蹄髈破店的蹄髈，邓记饭庄的荔枝肉.....这些苍蝇馆子里的地道福州菜。</p>
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
      title: '笔记内容',
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
      ]
    }
  }
}
</script>
<style lang="scss">
  @import "../style/base/_reset.scss";
  @import "../style/scss/_detail.scss";
</style>
