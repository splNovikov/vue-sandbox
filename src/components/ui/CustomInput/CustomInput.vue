<template>
  <input
      :value="modelValue"
      @input="updateModel"
      class="input"
      type="text"
      placeholder="Title"/>
</template>

<script>
export default {
  name: 'custom-input',
  props: {
    modelValue: [String, Number,]
  },
  methods: {
    updateModel(e){
      this.$emit('update:modelValue', e.target.value);
    }
  }
}

</script>

<style scoped>
.input {
  border: 1px solid teal;
  padding: 5px;
}
</style>