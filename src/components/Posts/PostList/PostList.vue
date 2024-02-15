<template>
  <div v-if="posts.length > 0">
    <transition-group name="post-list">
      <post
          v-for="post in posts"
          :post="post"
          @onDeletePost="handleDeletePost"
          :key="post.id"
      />
    </transition-group>
  </div>
  <h5 v-else>No Posts</h5>
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

<style scoped>
.post-list-item {

}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.post-list-move {
  transition: transform 0.3s ease;
}
</style>