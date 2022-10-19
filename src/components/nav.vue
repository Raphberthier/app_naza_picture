<template>
  <div class="nav">
    <button class="btn btn primary">
       <router-link to="/homeApp">home</router-link>
    </button>
   
    
  </div>
</template>

<script>
export default {
name: "nav_bar"
}
</script>

<style>
.nav {
  display: flex;
  justify-content: center;
  
}
.btn {
  border: 1px solid black;
}
</style>