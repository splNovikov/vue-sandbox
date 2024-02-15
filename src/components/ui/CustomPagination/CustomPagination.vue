<template>
  <div class="pagination">
    <div
        v-for="page in pages"
        :key="page"
        class="page"
        :class="{'current-page': page === selectedPage}"
        @click="selectPage(page)"
    >{{ page }}</div>
  </div>
</template>

<script>
export default {
  name: 'custom-pagination',
  props: {
    pages: {
      type: Number,
      required: true
    },
    selectedPage: [Number]
  },
  methods: {
    selectPage(pageNum) {
      this.$emit('onChangePage', pageNum);
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
}

.page {
  display: flex;
  padding: 10px;
  border: 1px solid teal;
  cursor: pointer;
}

.current-page {
  font-weight: bold;
}

.page:not(:last-child) {
  border-right: 0;
}
</style>