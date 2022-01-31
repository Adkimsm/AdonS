<template>
  <Header></Header>
  <Laupad></Laupad>
  <img alt="Vue logo" src="./assets/logo.png">
</template>

<script>
import Header from './components/Header.vue'
import Laupad from './components/Laupad.vue'
export default {
  name: 'App',
  components: {
    Header,
    Laupad
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
