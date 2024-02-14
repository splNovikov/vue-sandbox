<template>
  <form @submit="handleSubmit" @submit.prevent>
    <h3>Add Post</h3>
    <input
        v-model="post.title"
        class="input"
        type="text"
        placeholder="Title"/>
    <input
        v-model="post.body"
        class="input"
        type="text"
        placeholder="Description"/>
    <custom-button type="submit">Add Post</custom-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('onAddPost', {id: new Date, ...this.post})
      this.post = {};
    }
  },
}
</script>

<style scoped>
.input {
  border: 1px solid teal;
  padding: 5px;
}
</style>