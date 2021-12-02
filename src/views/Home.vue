<template>
  <p> My name is {{name}} and I'm {{age}} year old </p>

  <input type="text" v-model="person"> {{person}} 
  <button @click="changeName">change</button>
  <button @click="age++">increase</button>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'


export default {
  setup(){
    let name = ref('Hmue');
    let person = ref('');
    let fname = ref('Hmue Thiha')
    let lname =reactive()
    let age = ref(20);
    let changeName = ()=>{
      console.log(name) //ref ka obj return pyn
      return name.value ='Hmue Thiha Naung'
    }
    return{name,age,person,fname,lname,changeName}
  }
}
</script>

<style>
  button{
    margin: 10px;
  }
</style>
