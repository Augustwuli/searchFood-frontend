<template>
    <div class="password-page column-page">
        <myHeader :title="title"></myHeader>
        <myLogo></myLogo>
        <div class="form-group form-input">
            <div class="input-style"><input type="password" placeholder="请输入密码"></div>
        </div>
        <div class="form-group form-input">
            <div class="input-style"><input type="password" placeholder="确认密码"></div>
        </div>
        <div class="form-group">
            <button class="btn">提交</button>
        </div>
    </div>
</template>

<script>
import myHeader from '../components/header.vue'
import myLogo from '../components/logo.vue'
export default {
  components: {myHeader, myLogo},
  data () {
    return {
      title: '输入密码'
    }
  }
}
</script>
<style lang="scss">
 @import '../style/base/_form.scss';
</style>
