<template>
  <div id="app">
<!--     <b-alert show>Default Alert</b-alert>
    -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
