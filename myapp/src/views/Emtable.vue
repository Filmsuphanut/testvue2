<template>
  <v-container>

    <div id="showem">
      <table id="testtable" > 
        <tr>
          <th>Employee id</th>
          <th>Employee name</th>
          <th>Employee email</th>
        </tr>
        <tr v-for="employ in employsend" :key="employ.id">
          <td>{{ employ.id }}</td>
          <td>{{ employ.name }}</td>
          <td>{{ employ.email }}</td>
        </tr>
      </table>
    </div>

  </v-container>
</template>

<script>



  export default {
      data(){
        return{
          emp:[
            {id:1,name:'kuy1',email:'kuymail1'},
          ],
        }
      },
      methods:{

      },
      components:{

      },    
      props:{
        employsend: Array
      },

  }
</script>

