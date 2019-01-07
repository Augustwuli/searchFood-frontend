<template>
  <div class="publish-page">
    <myHeader :title="title"></myHeader>
    <p>添加封面</p>
    <div class="cover" @click="upload">
      <img class="add-icon" src="../assets/uploadimg.png" v-if="add"/>
      <img :src="cover" v-else/>
      <input id="upload" v-show="false" type="file" accept="image/jpg,image/jpeg,image/png" @change="changeImg($event)">
    </div>
    <p>选择标签</p>
    <div class="labels">
      <div :class="item.className" v-for="(item,index) in label_list" :key="index" @click="click(index)" :data-index="index">
        {{item.name}}
      </div>
    </div>
    <div class="buttons">
      <button class="publish-button" @click="publish">发布笔记</button>
    </div>
  </div>
</template>

<script>
import myHeader from '../components/header.vue'
export default {
  components: {myHeader},
  data () {
    return {
      title: '发布美食笔记',
      add: true,
      cover: '',
      name: this.$route.params.name,
      content: this.$route.params.content,
      label_list: [
        {
          name: '推荐商家',
          className: 'label-block'
        },
        {
          name: '推荐美食',
          className: 'label-block'
        },
        {
          name: '美食攻略',
          className: 'label-block'
        }
      ],
      labelClass: ['label-block', 'label-block', 'label-block'],
      labels: []
    }
  },
  methods: {
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
        this.add = false
        this.cover = window.URL.createObjectURL(file)
      }
    },
    upload () {
      let uploadFile = document.getElementById('upload')
      uploadFile.click()
    },
    click (e) {
      if (this.label_list[e].className === 'label-block') {
        this.label_list[e].className = 'active'
      } else {
        this.label_list[e].className = 'label-block'
      }
    },
    publish () {
      this.labels = []
      let arr = document.getElementsByClassName('active')
      let jwt = localStorage.jwt
      for (let i = 0; i < arr.length; i++) {
        this.labels.push(Number(arr[i].attributes[0].value) + 1)
      }
      if (this.cover === '') {
        alert('您未上传封面')
      } else if (this.labels.length === 0) {
        alert('您未选择标签')
      } else {
        // console.log(this.labels)
        let labels = this.labels.join(',')
        console.log(labels)
        let params = {
          title: this.name,
          content: this.content,
          thumb_url: this.cover,
          labels: labels
        }
        this.$api.post(jwt, '/notes/publish', params, r => {
          console.log(r)
        })
      }
    }
  }
}
</script>
<style lang="scss">
  @import "../style/scss/_publish.scss";
</style>
