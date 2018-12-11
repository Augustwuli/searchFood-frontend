<template>
  <header class="header">
    <img src="../assets/return.png" @click="$router.go(-1)">
    <span>{{title}}</span>
  </header>
</template>
<script>
export default {
  props: ['title']
}
</script>
