<template>
  <div class="contener">
    <h1>Mars Picture of rover curiosity</h1>
    <img
      src="../assets/planete-mars.webp"
      class="img-fluid"
      alt="photo de la planete mars"
    />
    <p>Camera choisi: {{this.message}}</p>
    <button class="btn btn-primary" @click.prevent="showDropDown">Choisir une caméra</button>
    <div class="fullCam" v-if="showMenu">
    <div class="camera">
    <button class="btn btn-secondary" id="camera1" @click.prevent="camera1">Caméra d'évitement de danger avant</button>
    
    </div>
    <div class="camera">
    <button class="btn btn-secondary" id="camera2" @click.prevent="camera2">Caméra d'évitement de danger arrière</button>
    
    </div>
    <div class="camera">
    <button class="btn btn-secondary" id="camera3" @click.prevent="camera3">Caméra de mât</button>
    
    </div>
    <div class="camera">
    <button class="btn btn-secondary" id="camera4" @click.prevent="camera4">Complexe Chimie et Caméra</button>
    
    </div>
    <div class="camera">
    <button class="btn btn-secondary" id="camera5" @click.prevent="camera5" >Imageur de lentille à main Mars</button>
   
    </div>
    <div class="camera">
    <button class="btn btn-secondary" id="camera5" @click.prevent="camera6">Imageur de descente martienne</button>
    
    </div>
    <div class="camera">
    <button class="btn btn-secondary" id="camera6" @click.prevent="camera7">Caméra de navigation</button>
    
    </div>
    </div>
    <button  class="btn btn-primary" @click="sendMars">
      Clique ici pour voir mars
    </button>
    <div
      class="card"
      v-for="photo in photos"
      v-bind:key="photo.id"
      :photo="photo"
      v-bind="photos.img_src"
    >
      <img class="imgNasa" v-bind:src="photo.img_src" />
      <p>Vue: {{ photo.camera.full_name }}</p>
      <p>Date de la prise:{{ photo.earth_date }}</p>
      <p>Rover: {{ photo.rover.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "testApi",
  data: function () {
    return {
      showMenu: false,
      photos: [],
      camera:"",
      message:"",

    };
  },
  methods: {
    showDropDown: function() {
			this.showMenu = !this.showMenu;
		},
    camera1(){
      this.camera = "fhaz";
      this.message = "Caméra d'évitement de danger avant"
      this.showMenu = false
    },
    camera2(){
      this.camera = "rhaz";
      this.message = "Caméra d'évitement de danger arrière"
      this.showMenu = false
    },
    camera3(){
      this.camera = "mast";
      this.message = "Caméra de mât"
      this.showMenu = false
    },
    camera4(){
      this.camera = "chemcam";
      this.message = "Complexe Chimie et Caméra"
      this.showMenu = false
    },
    camera5(){
      this.camera = "mahli";
      this.message = "Imageur de lentille à main Mars"
      this.showMenu = false
    },
    camera6(){
      this.camera = "mardi";
      this.message = "Imageur de descente martienne"
      this.showMenu = false
    },
    camera7(){
      this.camera = "navcam";
      this.message = "Caméra de navigation"
      this.showMenu = false
    },
    
    sendMars() {
      if (this.camera == ""){
        window.alert('choisi une camera')
      }else{
       axios
        .get(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera="+this.camera+"&api_key=3wNqOA1sE1agXYGpYLxpMNWOEacRn5uwek7myrIk"
        )
        .then((res) => {
          const data = res.data.photos;
          this.photos = data;
          console.log(this.photos);
          console.log(res);
        })
        .catch((err) => console.log(err)); 
      }
      
    },
  },
};
</script>

<style>
.img-fluid {
  margin-bottom: 50px;
}
.btn{
  margin: 10px;
}
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
