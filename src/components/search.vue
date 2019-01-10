<template>
  <div class="search">
    <img src="../assets/position.png" @click="click">
    <div class="form-search">
      <img class="search-img" src="../assets/search.png">
      <input type="text" placeholder="搜索美食笔记">
    </div>
    <img src="../assets/info.png">
  </div>
</template>
<script>
export default {
  methods: {
    click () {
      this.$router.push({
        path: '/position',
        name: 'Position'
      })
    }
  }
}
</script>
