<template>
  <div class="person-page">
    <img class="back-icon" src="../assets/back.png" @click="$router.go(-1)"/>
    <div class="head-img" @click="upload">
      <img src="../assets/header.jpg"/>
      <input id="upload" v-show="false" type="file" >
    </div>
    <div class="person-info">
      <div class="info-item">
        <span>昵称</span>
        <input v-model="name" type="text" >
      </div>
      <div class="info-item">
        <span>性别</span>
        <input v-model="gender" type="text" >
      </div>
      <div class="info-item">
        <span>个性签名</span>
        <input v-model="signature" type="text" >
      </div>
    </div>
    <div class="btn">
      <button class="save-btn">保存</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      gender: '',
      signature: ''
    }
  },
  methods: {
    upload () {
      let uploadFile = document.getElementById('upload')
      uploadFile.onclick = () => {
        console.log('我被点击了')
      }
      uploadFile.click()
    }
  }
}
</script>
<style lang="scss">
@import "../style/scss/_person.scss"
</style>
