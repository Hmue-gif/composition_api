<template>  
      <h3> {{post.title}} </h3>
      <h4> {{cutString}} </h4>
</template>     

<script>
import { computed } from '@vue/reactivity'
export default {
    props:['post'],
    setup(props){
        let cutString = computed(()=>{
            return props.post.details.substring(0,100)+".....see more"
        })
        return {cutString}
    }
}
</script>

<style>

</style>