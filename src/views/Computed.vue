<template>
    <input type="text" v-model="search"> 
    <p>search items - {{search}} </p>
    <div v-for="name in filterNames" :key="name">
        <p> {{name}} </p>
    </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
export default {
    setup(){
        let names = ref(['aung aung','kyaw kyaw','zaw zaw','mon mon','su su'])
        let search = ref('')
        let filterNames = computed(()=>{
            return names.value.filter(name=>{
                return name.includes(search.value)
            })
        })
        return{names,search,filterNames}
    }
}
</script>

<style>

</style>