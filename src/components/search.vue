<template>
  <div class="search">
    <img src="../assets/position.png" @click="click">
    <div class="form-search">
      <img class="search-img" src="../assets/search.png">
      <input type="text" placeholder="搜索美食笔记"  @change="getSearch" v-model="search">
    </div>
    <img src="../assets/info.png">
  </div>
</template>
<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    click () {
      this.$router.push({
        path: '/position',
        name: 'Position'
      })
    },
    getSearch () {
      this.$api.get(null, `/notes/search/${this.search}`, null, r => {
      })
    }
  }
}
</script>
