<template>
  <div class="dialog"
       v-if="show"
       @click="hideDialog">
    <div class="dialog-content" @click.stop>
      <div class="dialog-header">
      </div>
      <div class="dialog-body">
        <slot></slot>
      </div>
      <div class="footer">
      </div>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: 'custom-dialog',
  mixins: [toggleMixin],
  methods: {
  }
}
</script>

<style scoped>
.dialog {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
}

.dialog-content {
  margin: auto;
  background: white;
  border-radius: 4px;
  min-height: 100px;
  min-width: 300px;
  padding: 20px;
}
</style>