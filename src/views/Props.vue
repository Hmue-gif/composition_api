<template>
  <Posts :posts="posts"></Posts>
</template>

<script>
import Posts from '../components/Posts'
import { ref } from '@vue/reactivity'
export default {
  components: { Posts },
    setup(){
        let posts = ref([
            {
                id:1,
                title: "post title 1",
                details : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eaque autem dolorum quo eveniet,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eaque autem dolorum quo eveniet,  ipsa illo maxime reprehenderit? Nulla aliquid omnis explicabo fugiat ratione quae quasi, eligendi consectetur voluptates reiciendis."
            },
              {
                id:2,
                title: "post title 2",
                details : "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            }
        ])
        return{posts}
    }
}
</script>

<style>

</style>