<template id="bimage">
  <v-container>
    <div>
      <table id="testtable" > 
        <tr>
          <th>Employee name</th>
          <th>Employee email</th>
        </tr>
        <tr v-for="employ in employsend" :key="employ.id">
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

        }
      },
      methods:{
      },
      props:{
        employsend: Array
      }
  }
</script>

<style>
#testtable {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#testtable td, #testtable th {
  border: 1px solid #ddd;
  padding: 8px;
}

#testtable tr:nth-child(even){background-color: #f2f2f2;}

#testtable tr:hover {background-color: #ddd;}

#testtable th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>