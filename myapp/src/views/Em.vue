<template>
  <v-container>

  
  <div>
    <Emform @add:em="employadd" />
    <Emtable :employsend="emp"/>
  </div>


  </v-container>
</template>

<script>

  import Emform from "./Emform"
  import Emtable from "./Emtable"

  export default {
      data(){
        return{
          emp:[
            {id:1,name:'hello',email:'hello@mail.com'},
          ],
        }
      },
      methods:{
        employadd(employee){
          const lastid = this.emp.length > 0 ? this.emp[this.emp.length - 1].id : 0;
          const id = lastid + 1
          const NewEmp = {...employee,id};
          console.log(lastid);
          this.emp = [...this.emp ,NewEmp]
        }
      },
      components:{
        Emform,Emtable
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