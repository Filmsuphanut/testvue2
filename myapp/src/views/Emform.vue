<template>
    <v-container>

  <div>
    <form @submit.prevent="handleSubmit">
    <label>Employee name</label>
    <input v-model="emin.name" type="text">
    <label>Employee email</label>
    <input v-model="emin.email" type="text">
    <button>Add Employee</button>
    </form>
  </div>
  
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            emin:{
            name:'',
            email:''
          },
        }
    },
    methods:{
        handleSubmit(){
          this.$emit('add:em',this.emin)
        }
    }
}
</script>