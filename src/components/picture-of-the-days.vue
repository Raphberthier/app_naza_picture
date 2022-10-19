<template>
  <div class="conterner">
    <h2>4 images aleatoire</h2>
    <div class="allCards">
    <div v-for="card in cards"
      v-bind:key="card.id"
       class="pisctureOfTheDay">
    <h3>{{card.title}}</h3>
    <p>date: {{card.date}}</p>
    <img class="img-fluid" alt={{card.title}}  v-bind:src="card.hdurl" />
    <p>{{card.explanation}}</p>

    </div>
   </div>  
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'nasaPicture',
    data() {
        return {
            urlImage: "",
            showImg: false,
            cards: [],
        }
    },
    created() {
      axios.get('https://api.nasa.gov/planetary/apod?count=4&thumbs=true&api_key=3wNqOA1sE1agXYGpYLxpMNWOEacRn5uwek7myrIk')
            .then((res) => {
              const data = res.data;
            this.cards = data;
            console.log(res) })
              
            .catch((err) => console.log(err))
            },
 methode: {
       sendImg() {

       }
    }
    }  
   
    

</script>

<style>
.pisctureOfTheDay {
    margin-bottom: 30px;
    border: solid 1px black;
    width: 350px;
    padding: 15px;

}
.allCards {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
}
</style>