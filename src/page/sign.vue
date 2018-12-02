<template>
  <div class="sign-page">
    <div class="logo"><img src="../assets/food.png"></div>
    <form>
      <div class="form-group form-input">
        <div class="input-style"><input type="text" placeholder="请输入手机号码"></div>
      </div>
      <div class="form-group form-input">
        <div class="input-style"><input type="password" placeholder="请输入验证码"></div>
        <button class="validate-code">获取验证码</button>
      </div>
      <div class="form-group">
        <button class="sign-btn">注册</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
  @import "../style/scss/_sign.scss"
</style>
