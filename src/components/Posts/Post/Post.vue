<template>
  <div class="post">
    <div>{{ post.id }}</div>
    <div><strong>Title:</strong> {{ post.title }}</div>
    <div><strong>Description:</strong> {{ post.body }}</div>
    <div class="post-footer">
      <custom-button type="button">
        <router-link
            :to="{name: 'post-details', params: {id: post.id}}">
          Open
        </router-link>
      </custom-button>
      <custom-button
          type="button"
          @click="handleDelete">
        Delete
      </custom-button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleDelete() {
      this.$emit('onDeletePost', this.post);
    }
  }
}
</script>

<style scoped>
.post {
  margin: 10px 0 0 0;
  padding: 15px;
  border: 1px solid teal;
}
</style>