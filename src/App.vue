<template>
  <navigation-panel/>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>

import NavigationPanel from "@/components/ui/NavigationPanel/NavigationPanel.vue";

export default {
  components: {NavigationPanel}

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
