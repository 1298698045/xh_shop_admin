<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  #table ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background-color: white;
  }
  #table ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px #dddddd;
      background-color: #dddddd; /*滚动条的背景颜色*/
  }
</style>
