<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header>
      情報工学科
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style style='scss'>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  height: 40px;
  line-height: 50px;
  background-color: #6CA;
  color: white;
  font-size: 24px;
  font-weight: bold;
  padding-left: 20px
}
</style>
