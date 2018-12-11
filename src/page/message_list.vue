<template>
  <div class="message">
    <myHeader  v-if="type===0" :title="typeName"></myHeader>
    <myHeader  v-else-if="type===1" :title="typeName"></myHeader>
    <myHeader  v-else-if="type===2" :title="typeName"></myHeader>
    <myHeader  v-else-if="type===3" :title="typeName"></myHeader>
    <message :list="list"></message>
  </div>
</template>

<script>
import myHeader from '../components/header.vue'
import message from '../components/message.vue'
export default {
  components: {myHeader, message},
  data () {
    return {
      type: this.$route.params.type,
      typeName: this.$route.params.typeName,
      list: this.$route.params.list
    }
  }
}
</script>
<style lang="scss">
@import "../style/base/_base.scss";
</style>
