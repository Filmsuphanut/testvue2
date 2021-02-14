<template>

  <v-app>
   
    <v-main>
      <!--<HelloWorld/>-->
      <Navkuy/>
      <router-view :employsend="emp" id="bimage"></router-view>
      
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
      emp: [
        {id:1,name:'kuy1',email:'kuymail1'},{id:2,name:'kuy2',email:'kuymail2'},{id:3,name:'kuy3',email:'kuymail3'},
      ],    
    }
  },
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
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