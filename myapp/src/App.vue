<template>

  <v-app>
   
    <v-main>
      <!--<HelloWorld/>-->
      <Navkuy/>
      <router-view></router-view>
      
    </v-main>


  </v-app>
  
</template>

<script>
//import HelloWorld from './components/HelloWorld';
 import Navkuy from './views/Navbar';


export default {
  name: 'App',
  components: {
    //HelloWorld,
    Navkuy
  },
  data() {
    return{    
    }
  },
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },
  method:{

  }
};
</script>

<style>
#bimage{
  background: url('./image/backjj.jpg')
    no-repeat center center fixed !important;
  background-size: cover;
}
</style>