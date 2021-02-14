<template>

  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <Navkuy/>

    <v-main>
      <Zawarudo/>
      <!--<HelloWorld/>-->
    </v-main>


  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Zawarudo from './components/index';
import Navkuy from './components/Navbar';
export default {
  name: 'App',
  components: {
    //HelloWorld,
    Zawarudo,Navkuy
  },
  data: () => ({
    return :{
    }
  }),
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
};
</script>

<style>
</style>