<template>
    <h2>Person One</h2>
    <p> {{personOne.name}} </p>
    <p> {{personOne.age}} </p>

    <button @click="changeOne">change1</button>

    <h2>Person Two</h2>
    <p> {{personTwo.name}} </p>
    <p> {{personTwo.age}} </p>

    <button @click="changeTwo">change2</button>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
export default {
    setup(){
        let personOne = ref({name:"Hmue Thiha Naung" ,age:20})

        let changeOne=()=>{
            personOne.value.name = "Aung Aung"
        }

        let personTwo = reactive({name:"Aung Kyaw Tun" ,age:20})

        let changeTwo=()=>{
            personTwo.name = "Aung Aung"
        }
        return {personOne,personTwo,changeOne,changeTwo}
    }
}
</script>

<style>

</style>