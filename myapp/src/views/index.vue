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
        <v-btn @click="getdata"><v-icon>dvr</v-icon></v-btn>
        <!--
        <form @submit="postmethod" method="post">
          <input type="text" name="author" v-model="posts.name">
          <input type="text" name="title" v-model="posts.pass"> 
          <button type="submit">Post</button>
        </form>-->
        </div>
        <div>
          <table>
            <tr v-for="i in todos" :key="i.id">
              <td>{{i.id}}</td>
              <td>{{i.title}}</td>
              <td>{{i.completed}}</td>
            </tr>
          </table>
        </div>        

  </v-container>

</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//https://jsonplaceholder.typicode.com/todos
  export default {
    name:"index",
    props:{

    },
    data(){
      return{
        posts:{
          name:null,pass:null
        },

        todos:[
          {id: 0,title: "null",completed:"null"}
        ]


      }
    },

    methods:{
      // postmethod(e){
      //   this.axios.post("http://localhost:3000/",this.posts).then((res)=>{console.warn(JSON.stringify(res.data))})
      //   e.preventDefault();
      // },
      
      async getdata(){
        let buffer = await axios.get("https://jsonplaceholder.typicode.com/todos")
        for(let i = 0 ; i < buffer.data.length ; i++){
          this.todos.push(buffer.data[i])
        }        
        console.log(this.todos)
        
      },
      
      mode(){
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      },


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