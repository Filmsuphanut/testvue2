<template>
  
  <v-container >
        <div class="home">
            <h1 class="red lighten-1 dark--text">
                Welcome to my website
            </h1>
            <p1 class="blue darken-3 white--text">
                By Filmsuphanut
            </p1>
        </div> 
        
        <v-btn flat @click="mode"><v-icon>dvr</v-icon></v-btn>
  </v-container>


  
</template>

<script>
  export default {
    props:{

    },
    methods:{
      mode(){
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
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