<template>
  <div class="sign-page column-page">
    <myHeader :title="title"></myHeader>
    <myLogo></myLogo>
    <form>
      <div class="form-group form-input">
        <div class="input-style"><input type="text" placeholder="请输入手机号码"></div>
      </div>
      <div class="form-group form-input">
        <div class="input-style"><input type="text" placeholder="请输入验证码"></div>
        <button class="validate-code">获取验证码</button>
      </div>
      <div class="form-group">
        <button class="btn" @click="next">下一步</button>
      </div>
    </form>
  </div>
</template>
<script>
import myHeader from '../components/header.vue'
import myLogo from '../components/logo.vue'
export default {
  components: {myHeader, myLogo},
  data () {
    return {
      title: '注册'
    }
  },
  methods: {
    next () {
      this.$router.push({path: '/password'})
    }
  }
}
</script>
<style lang="scss">
  @import "../style/scss/_sign.scss";
  @import "../style/base/_form.scss";
</style>
