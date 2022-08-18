<template>
  <div class="contener">
    <button @click="sendMars">Clique ici pour voir mars</button>
   <div class="card" v-for="photo in photos" v-bind:key="photo.id" :photo="photo" v-bind="photos.img_src">
   
   <img class="imgNasa" v-bind:src="photo.img_src" />
   <p>Vue: {{photo.camera.full_name}}</p>
   <p>Date de la prise:{{photo.earth_date}}</p>
   <p>Rover: {{photo.rover.name}}</p>
   </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: "testApi",
data: function () {
    return{
    photos:[],    
    }

},
methods: {
    sendMars () {

axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=3wNqOA1sE1agXYGpYLxpMNWOEacRn5uwek7myrIk')
.then((res) => {
    const data = res.data.photos

  
    
    this.photos = data
    
   console.log(this.photos)
    console.log(res)
})
.catch((err) => console.log(err))}
}
}




</script>

<style>


.card {
  display: flex;
  margin: 20px;
  border: 1px solid black;
}
.contener {
  display: flex;
    flex-direction: column;
    align-items: center;
}
</style>