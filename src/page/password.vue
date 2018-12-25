<template>
    <div class="password-page column-page">
        <myHeader :title="title"></myHeader>
        <myLogo></myLogo>
        <div class="form-group form-input">
            <div class="input-style"><input v-model="name" type="text" placeholder="请输入用户名"></div>
        </div>
        <div class="form-group form-input">
            <div class="input-style"><input v-model="password" type="password" placeholder="请输入密码"></div>
        </div>
        <div class="form-group form-input">
            <div class="input-style"><input v-model="confirm" type="password" placeholder="确认密码"></div>
        </div>
        <div class="form-group">
            <button class="btn" @click="commit(publicPem)">提交</button>
        </div>
    </div>
</template>

<script>
import myHeader from '../components/header.vue'
import myLogo from '../components/logo.vue'
import { JSEncrypt } from 'jsencrypt'
export default {
  components: {myHeader, myLogo},
  data () {
    return {
      publicPem: this.$route.params.publicPem,
      phone: this.$route.params.phone,
      title: '输入密码',
      name: '',
      password: '',
      confirm: ''
    }
  },
  methods: {
    commit (publicPem) {
      if (this.name === '') {
        window.alert('用户名不能为空')
      } else if (this.password === '') {
        window.alert('密码不能为空')
      } else if (this.confirm === '') {
        window.alert('确认密码不能为空')
      } else if (this.password !== this.confirm) {
        window.alert('两次输入的密码不一致')
      } else {
        let encrypt = new JSEncrypt()
        let password = this.password
        encrypt.setPublicKey(publicPem)
        password = encrypt.encrypt(password)
        let param = {
          phone: this.phone,
          name: this.name,
          password: password
        }
        this.$api.post(null, '/users/sign', param, r => {
          console.log(r)
          this.$router.replace({name: 'Login'})
        })
      }
    }
  }
}
</script>
<style lang="scss">
 @import '../style/base/_form.scss';
</style>
