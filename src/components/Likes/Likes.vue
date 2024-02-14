<template>
  <div>
    <div>
      <button @click="like">Like</button>
      <button @click="dislike">Dislike</button>
    </div>
    <div>
      <div>Likes: {{ likes }}</div>
      <div>Dislikes: {{ dislikes }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0
    }
  },
  methods: {
    like() {
      this.likes += 1
    },
    dislike() {
      this.dislikes += 1
    }
  }
}
</script>

<style>

</style>
