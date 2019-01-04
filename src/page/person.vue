<template>
  <div class="person-page">
    <img class="back-icon" src="../assets/back.png" @click="$router.go(-1)"/>
    <div class="head-img" @click="upload">
      <img :src="avatar"/>
      <input id="upload" v-show="false" type="file" accept="image/jpg,image/jpeg,image/png" @change="changeImg($event)">
    </div>
    <div class="person-info">
      <div class="info-item">
        <span>昵称</span>
        <input v-model="name" type="text">
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
      <button class="save-btn" @click="save()">保存</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      gender: '',
      signature: '',
      avatar: require('../assets/header.jpg'),
      avatarBase64: ''
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      this.avatar = localStorage.thumb_url
      this.name = localStorage.name
      this.gender = localStorage.gender
      this.signature = localStorage.signature
    },
    setInfo (name, gender, signature) {
      localStorage.setItem('name', name)
      localStorage.setItem('gender', gender)
      localStorage.setItem('signature', signature)
    },
    save () {
      let jwt = localStorage.jwt
      let param = {
        name: this.name,
        gender: this.gender,
        signature: this.signature,
        avatar: this.avatarBase64
      }
      this.$api.post(jwt, '/users/save', param, r => {
        this.setInfo(r.data.name, r.data.gender, r.data.signature)
      })
    },
    changeImg (e) {
      let file = e.target.files[0]
      let name = file.name
      let arr = name.split('.')
      console.log(arr)
      let reader = new FileReader()
      reader.onload = e => {
        this.avatarBase64 = e.target.result
        console.log(e.target.result)
      }
      if (file) {
        reader.readAsDataURL(file)
        this.avatar = window.URL.createObjectURL(file)
      }
    },
    upload () {
      let uploadFile = document.getElementById('upload')
      uploadFile.click()
    }
  }
}
</script>
<style lang="scss">
@import "../style/scss/_person.scss"
</style>
