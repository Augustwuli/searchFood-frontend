<template>
  <div class="add-page">
    <myHeader :title="title"></myHeader>
    <div class="add-title">
      <span class="bar"></span>
      <input v-model="name" type="text" placeholder="请输入标题">
    </div>
    <div id="addImage" class="add-imgs" @click="upload">
      <p>添加图片</p>
      <img class="add-icon" src="../assets/uploadimg.png"/>
      <input id="upload" v-show="false" type="file" accept="image/jpg,image/jpeg,image/png" @change="changeImg($event)">
    </div>
    <div class="add-content">
      <textarea v-model="content" placeholder="请输入正文内容" maxlength="1500"></textarea>
    </div>
    <div class="buttons">
      <button class="add-button" @click="add">创建笔记</button>
    </div>
  </div>
</template>
<script>
import myHeader from '../components/header.vue'
export default {
  components: {myHeader},
  data () {
    return {
      title: '创建美食笔记',
      name: '',
      content: '',
      imgs: []
    }
  },
  methods: {
    upload () {
      let uploadFile = document.getElementById('upload')
      uploadFile.click()
    },
    changeImg (e) {
      let add = document.getElementById('addImage')
      let img = document.createElement('img')
      let file = e.target.files[0]
      let name = file.name
      let arr = name.split('.')
      console.log(arr)
      let reader = new FileReader()
      reader.onload = e => {
        this.imgs.push(e.target.result)
      }
      if (file) {
        img.className = 'imgs'
        if (document.getElementsByClassName('imgs').length === 9) {
          alert('图片最多只能上传9张')
        } else {
          reader.readAsDataURL(file)
          img.src = window.URL.createObjectURL(file)
          add.appendChild(img)
        }
      }
    },
    add () {
      if (this.name === '') {
        alert('标题不能为空')
      } else if (this.content === '') {
        alert('内容不能为空')
      } else {
        console.log(this.imgs)
        this.$router.push({
          path: '/publish',
          name: 'Publish',
          params: {
            name: this.name,
            content: this.content
          }
        })
      }
    }
  }
}
</script>
<style lang="scss">
@import "../style/scss/_add.scss"
</style>
