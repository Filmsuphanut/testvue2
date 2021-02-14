<template>
    <nav>
    <v-app-bar
      app
      color = "primary"
      light
    >  
    
        <v-btn to="/">
        <v-icon left>home</v-icon>
        <span>หน้าa</span>
        </v-btn>

        <v-btn  to="/Testback">
        <v-icon left>home</v-icon>
        <span>หน้าอะไรไม่รู้</span>
        </v-btn>

      <v-spacer></v-spacer>


        <v-btn to="Em">
        <v-icon left>verified</v-icon>
        <span>หน้าEm</span>
        </v-btn>

    </v-app-bar>

    
    </nav>
</template>

<script>
export default {
    //npm install --save material-design-icons-iconfont
    
}
</script>

