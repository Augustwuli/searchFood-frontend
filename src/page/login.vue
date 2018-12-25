<template>
  <div class="login-page column-page">
    <myLogo></myLogo>
    <form>
      <div class="form-group form-input">
        <input v-model="phone" type="text" placeholder="请输入手机号码">
      </div>
      <div class="form-group form-input">
        <input v-model="password" type="password" placeholder="请输入密码">
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
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.phone === '') {
        window.alert('手机号码不能为空')
      } else if (this.password === '') {
        window.alert('密码不能为空')
      } else {
        // 登录暂无加密处理
        let param = {
          phone: this.phone,
          password: this.password
        }
        this.$api.post(null, '/users/login', param, r => {
          if (r.statu === 1) {
            localStorage.setItem('jwt', r.data.jwt)
            this.$router.push({name: 'Home'})
          }
        })
      }
    }
  }
}
</script>
<style lang="scss">
  @import "../style/scss/_login.scss"
</style>
