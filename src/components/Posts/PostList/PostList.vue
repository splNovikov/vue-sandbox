<template>
  <div>
    <h3>Posts</h3>
    <post
        v-for="post in posts"
        :post="post"
        @onDeletePost="handleDeletePost"
    />
  </div>
</template>

<script>
import Post from "@/components/Posts/Post/Post.vue";
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  components: {
    Post
  },
  methods: {
    handleDeletePost(post) {
      this.$emit("onDeletePost", post);
    }
  }
}
</script>

<style>
.post {
  margin: 10px 0 0 0;
  padding: 15px;
  border: 1px solid teal;
}
</style>