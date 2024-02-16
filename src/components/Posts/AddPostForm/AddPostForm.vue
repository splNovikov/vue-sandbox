<template>
  <form @submit="handleSubmit" @submit.prevent>
    <h3>Add Post</h3>
    <custom-input
        v-model="post.title"
        placeholder="Title"
        v-focus
    />
    <custom-input
        v-model="post.body"
        placeholder="Description"
    />
    <custom-button type="submit">Add Post</custom-button>
  </form>
</template>

<script>
import CustomInput from "@/components/ui/CustomInput/CustomInput.vue";

export default {
  components: {CustomInput},
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
