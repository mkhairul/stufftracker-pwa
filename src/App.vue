<template>
  <div id="app" class="viewport">
    <md-toolbar :md-elevation="1">
        <span class="md-title center ">Stuff Tracker</span>
    </md-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.center{ text-align: center; display: block; width: 100%; }
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}
</style>
