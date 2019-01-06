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
          name: '推荐店家',
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
      label: []
    }
  },
  mounted () {
    console.log(this.content)
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
        // if (this.label.indexOf(e) === -1) {
        //   this.label.push(e)
        // }
      } else {
        this.label_list[e].className = 'label-block'
        // this.label.splice(this.label.indexOf(e)) 
      }
    },
    publish () {
      let arr = document.getElementsByClassName('active')
      for (let i = 0;i < arr.length;i++){
        this.label.push(arr[i].attributes[0].value)
      }
      console.log(this.label)
    }
  }
}
</script>
<style lang="scss">
  @import "../style/scss/_publish.scss";
</style>
