<template>
  <div v-for="post in posts" :key="post.id">
      <div v-if="showPost" >
        <SinglePost :post="post"></SinglePost>
      </div>
  </div>
  <button @click="showPost=!showPost">toggle</button>

  <button @click="posts.pop()">delete</button>
</template>

<script>
import { onMounted, onUnmounted, onUpdated, ref } from '@vue/runtime-core'
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props:['posts'],
    setup(props){
        let showPost = ref(true);
        // console.log(props.posts[1].id)
        onMounted(()=>{
            console.log("mounted")
        })
        onUnmounted(()=>{
            console.log("unmounted")
        })
         onUpdated(()=>{
            console.log("updated")
        })
        return{showPost}
    }
}
</script>

<style>

</style>