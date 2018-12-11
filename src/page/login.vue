<template>
  <div class="login-page column-page">
    <myLogo></myLogo>
    <form>
      <div class="form-group form-input">
        <input type="text" placeholder="请输入手机号码">
      </div>
      <div class="form-group form-input">
        <input type="password" placeholder="请输入密码">
      </div>
      <div class="form-group">
        <button class="login-btn" @click="login">登 录</button>
        <router-link class="link-style" :to="'/sign'">没有账号？立即注册</router-link>
      </div>
      <div class="form-link">
        <router-link class="link-style forget-link" :to="'/'">忘记密码</router-link>
      </div>
    </form>
  </div>
</template>
<script>
import myLogo from '../components/logo.vue'
export default {
  components: {myLogo},
  methods: {
    login () {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>
<style lang="scss">
  @import "../style/scss/_login.scss"
</style>
