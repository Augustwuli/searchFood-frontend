<template>
  <div class="login-page">
    <div class="logo"><img src="../assets/food.png"></div>
    <form>
      <div class="form-group form-input">
        <input type="text" placeholder="请输入手机号码">
      </div>
      <div class="form-group form-input">
        <input type="password" placeholder="请输入密码">
      </div>
      <div class="form-group">
        <button class="login-btn">登 录</button>
        <router-link class="link-style" :to="'/sign'">没有账号？立即注册</router-link>
      </div>
      <div class="form-link">
        <router-link class="link-style forget-link" :to="'/'">忘记密码</router-link>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
  @import "../style/scss/_login.scss"
</style>
