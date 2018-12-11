<template>
  <div class="new-page">
    <div class="menu">
      <p v-bind:class="{active: currentTab === 'Topic'}" @click="jump('Topic')">话题</p>
      <p v-bind:class="{active: currentTab === 'Discuss'}" @click="jump('Discuss')">讨论</p>
      <p v-bind:class="{active: currentTab === 'Follow'}" @click="jump('Follow')">关注</p>
    </div>
    <router-view/>
    <footer>- 到底啦 -</footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTab: 'Topic'
    }
  },
  methods: {
    jump (pageName) {
      this.currentTab = pageName
      this.$router.replace({name: pageName})
    }
  }
}
</script>
<style lang="scss">
@import "../style/scss/_new.scss";
</style>
