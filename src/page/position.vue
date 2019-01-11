<template>
  <div class="position-page">
    <myHeader :title="title"></myHeader>
    <div class="list">
      <div class="list-block" v-for="(item,index) in list" :key="index" @click="click(index)">
        {{item}}
      </div>
    </div>
  </div>
</template>
<script>
import myHeader from '../components/header.vue'
export default {
  components: { myHeader },
  data () {
    return {
      title: '选择城市',
      list: ['北京', '上海', '福州', '厦门', '杭州']
    }
  },
  methods: {
    click (e) {
      console.log(this.list[e])
      localStorage.setItem('cityName', `${this.list[e]}`)
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
  @import "../style/scss/_position.scss";
</style>
