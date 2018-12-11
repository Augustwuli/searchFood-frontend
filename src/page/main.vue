<template>
    <div class="main-page">
      <router-view/>
      <tabar :currentTab="currentTab" @setCurrentTab="setCurrentTab"></tabar>
    </div>
</template>

<script>
import tabar from '../components/tabar.vue'
import search from '../components/search.vue'
export default {
  components: {tabar, search},
  data () {
    return {
      currentTab: 'Home'
    }
  },
  methods: {
    setCurrentTab (pageName) {
      this.currentTab = pageName
    }
  }
}
</script>
<style lang="scss">
@import "../style/scss/_main.scss"
</style>
