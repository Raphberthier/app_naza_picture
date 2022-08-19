<template>
  <div class="conterner">
    
    <TestApiSms /> 
  </div>
 
 
</template>

<script>


import TestApiSms from './components/test-api-sms.vue';
export default {
  name: 'App',
  components: {
    TestApiSms
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
