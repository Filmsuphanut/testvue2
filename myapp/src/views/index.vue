<template>
  
  <v-container>
   
        <div class="red lighten-1 dark--text">
            <h1 >
                Welcome to my website
            </h1>
        </div>
          <!--
            <p1 id="p" class="blue darken-3 white--text">
                By Filmsuphanut
            </p1>
            -->
        
         
        <div> 
        <v-btn @click="mode"><v-icon>dvr</v-icon></v-btn>
        
        <form @submit="postmethod" method="post">
          <input type="text" name="author" v-model="posts.author">
          <input type="text" name="title" v-model="posts.title"> 
          <button type="submit">Post</button>
        </form>
        </div>

  </v-container>


  
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

  export default {
    name:"index",
    props:{

    },
    data(){
      return{
        posts:{
          title:null,author:null
        }
      }
    },
    methods:{
      mode(){
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      },
      postmethod(e){
        this.axios("http://localhost:3000/").then((result)=>{console.warn(result)})
        console.log(this.posts)
        e.preventDefault();
      }


    }
  }
</script>


<style>

</style>

    <!-- dark button >
    <div>
      <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="info" small fab @click="darkMode">
            <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode On</span>
      </v-tooltip>

      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="info" small fab @click="darkMode">
            <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode Off</span>
      </v-tooltip>
    </div>
    <-->