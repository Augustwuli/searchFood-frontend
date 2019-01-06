<template>
  <div class="add-page">
    <myHeader :title="title"></myHeader>
    <div class="add-title">
      <span class="bar"></span>
      <input v-model="name" type="text" placeholder="请输入标题">
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
      content: ''
    }
  },
  methods: {
    add () {
      if (this.name === '') {
        alert('标题不能为空')
      } else if (this.content === '') {
        alert('内容不能为空')
      } else {
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
