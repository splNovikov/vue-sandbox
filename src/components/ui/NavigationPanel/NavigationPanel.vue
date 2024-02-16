<template>
  <div class="navigation-panel">
    <custom-button @click="$router.push('/')">
      Home
    </custom-button>
    <router-link to="/posts">
      <custom-button>
        Posts
      </custom-button>
    </router-link>
    <router-link to="/about">
      <custom-button>
        About
      </custom-button>
    </router-link>
    <router-link to="/posts-with-store">
      <custom-button>
        Posts with store
      </custom-button>
    </router-link>
  </div>
</template>

<script>
import CustomButton from "@/components/ui/CustomButton/CustomButton.vue";

export default {
  name: 'navigation-panel',
  components: {CustomButton},
}
</script>

<style>
.navigation-panel {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px rgb(128, 128, 128);
  display: flex;
  align-items: center;
  padding: 0 15px;
}
</style>