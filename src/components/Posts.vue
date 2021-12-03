<template>
  <div v-for="post in posts" :key="post.id">
     <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props:['posts'],
    setup(props){
        console.log(props.posts[1].id)
    }
}
</script>

<style>

</style>