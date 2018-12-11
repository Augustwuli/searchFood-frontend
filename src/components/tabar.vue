<template>
    <div class="tabar">
        <div class="tabar-icon" @click="jump('Home')">
            <img v-if="currentTab === 'Home'" src="../assets/home.png">
            <img v-else src="../assets/uhome.png">
            <p v-bind:class="{ active: currentTab === 'Home' }">首页</p>
        </div>
        <div class="tabar-icon" @click="jump('New')">
            <img v-if="currentTab === 'New'" src="../assets/new.png">
            <img v-else src="../assets/unew.png">
            <p v-bind:class="{ active: currentTab === 'New' }">动态</p>
        </div>
        <div class="tabar-icon tabar-add" @click="jump('Add')">
            <img src="../assets/add.png">
        </div>
        <div class="tabar-icon" @click="jump('Message')">
            <img v-if="currentTab === 'Message'" src="../assets/message.png">
            <img v-else src="../assets/umessage.png">
            <p v-bind:class="{ active: currentTab === 'Message' }">消息</p>
        </div>
        <div class="tabar-icon" @click="jump('My')">
            <img v-if="currentTab === 'My'" src="../assets/my.png">
            <img v-else src="../assets/umy.png">
            <p v-bind:class="{ active: currentTab === 'My' }">我的</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ['currentTab'],
  methods: {
    jump (pageName) {
      let page = pageName
      this.$emit('setCurrentTab', page)
      this.$router.replace({name: pageName})
    }
  }
}
</script>
