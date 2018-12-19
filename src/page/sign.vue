<template>
  <div class="sign-page column-page">
    <myHeader :title="title"></myHeader>
    <myLogo></myLogo>
    <form>
      <div class="form-group form-input">
        <div class="input-style"><input v-model="phone" placeholder="请输入手机号码"></div>
      </div>
      <div class="form-group form-input">
        <div class="input-style"><input v-model="code" placeholder="请输入验证码"></div>
        <button v-if="sendCode === false" class="validate-code" @click="getCode">获取验证码</button>
        <button v-else class="validate-code wait">{{time}}s后重新获取</button>
      </div>
      <div class="form-group">
        <button v-bind:class="{active: !sendCode }" class="btn" @click="next">下一步</button>
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
      title: '注册',
      sendCode: false,
      time: 60,
      phone: '',
      code: '',
      coder: '',
      publicPem: ''
    }
  },
  methods: {
    next () {
      if (this.code === '') {
        window.alert('请输入验证码')
      } else if (this.code === this.coder) {
        this.$router.push({
          path: '/password',
          name: 'Password',
          params: {
            publicPem: this.publicPem,
            phone: this.phone
          }
        })
      } else {
        window.alert('验证码错误')
      }
    },
    getCode () {
      if (this.phone === '') {
        window.alert('请输入手机号码！')
      } else {
        this.sendCode = true
        let wait = setInterval(() => {
          this.time--
        }, 1000)
        setTimeout(() => {
          this.sendCode = false
          this.time = 60
          clearInterval(wait)
        }, 60000)
        let param = {
          phone: this.phone
        }
        this.$api.post('/codes/sign', param, r => {
          this.coder = r.data.code
          this.publicPem = r.data.publicPem
        })
      }
    }
  }
}
</script>
<style lang="scss">
  @import "../style/scss/_sign.scss";
  @import "../style/base/_form.scss";
</style>
