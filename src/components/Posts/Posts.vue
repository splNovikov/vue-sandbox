<template>
  <div class="posts">
    <add-post-form
        @onAddPost="handleAddPost"
    />
    <post-list
        :posts="posts"
        @onDeletePost="handleDeletePost"
    />
  </div>
</template>

<script>
import AddPostForm from "@/components/Posts/AddPostForm/AddPostForm.vue";
import PostList from "@/components/Posts/PostList/PostList.vue";

export default {
  components: {
    PostList,
    AddPostForm
  },
  data() {
    return {
      posts: [
        {id: 1, title: 'Пост о JS', body: 'JS'},
        {id: 2, title: 'Пост о CSS', body: 'CSS'},
        {id: 3, title: 'Пост о HTML', body: 'HTML'},
        {id: 4, title: 'Пост о SASS', body: 'SASS'},
      ],
    }
  },
  methods: {
    handleAddPost(post) {
      this.posts.push(post);
    },
    handleDeletePost(post) {
      this.posts = this.posts.filter(p => p.id!== post.id);
    }
  }
}
</script>

<style scoped>

</style>