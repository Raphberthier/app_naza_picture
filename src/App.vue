<template>
  <div class="conterner">
    <Nav></Nav>
    <router-view />
   <TestApiSms />
    <PictureOfTheDays />
  </div>
 
 
</template>

<script>


import TestApiSms from './components/test-api-sms.vue';
import PictureOfTheDays from './components/picture-of-the-days.vue';
import Nav from './components/nav.vue';
export default {
  name: 'App',
  components: {
    TestApiSms,
    PictureOfTheDays,
    Nav
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
