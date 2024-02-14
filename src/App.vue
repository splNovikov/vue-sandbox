<template>
  <div class="app">
    <posts />
  </div>
</template>

<script>
import Posts from "@/components/Posts/Posts.vue";

export default {
  components: {
    Posts
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
