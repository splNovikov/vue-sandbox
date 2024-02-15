<template>
  <select :value="modelValue" @change="handleChange">
    <option disabled value="">Select something</option>
    <option v-for="option in options"
            :value="option.value"
            :key="option.value">
      {{ option.name}}
    </option>
  </select>
</template>

<script>
export default {
  name: 'custom-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleChange(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
}
</script>

<style scoped>

</style>