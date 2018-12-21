<template>
  <div class="person-page">
    <img class="back-icon" src="../assets/back.png"/>
    <div class="head-img">
      <img src="../assets/header.jpg"/>
    </div>
    <div class="person-info">
      <div class="info-item">
        <span>昵称</span>
        <input v-model="name" type="text" >
      </div>
      <div class="info-item">
        <span>性别</span>
        <input v-model="gender" type="text" >
      </div>
      <div class="info-item">
        <span>个性签名</span>
        <input v-model="gender" type="text" >
      </div>
    </div>
    <div class="btn">
      <button class="save-btn">保存</button>
    </div>
  </div>
</template>

<style lang="scss">
@import "../style/scss/_person.scss"
</style>
