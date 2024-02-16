<template>
  <div class="posts">
    <h2>Posts</h2>

    <custom-input
        :model-value="searchQueryText"
        @update:model-value="setSearchQueryText"
        placeholder="Search"
        v-focus
    />

    <div class="controls">
      <custom-button @click="showDialog">Add Post</custom-button>
      <custom-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
      />
    </div>

    <custom-dialog v-model:show="dialogVisible">
      <add-post-form
          @onAddPost="handleAddPost"
      />
    </custom-dialog>

    <post-list
        :posts="sortedAndSearchedPosts"
        @onDeletePost="handleDeletePost"
    />
    <div v-if="isPostsLoading">Loading Posts...</div>

    <div
        v-intersection="loadMorePosts"
        class="observer">
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import AddPostForm from "@/components/Posts/AddPostForm/AddPostForm.vue";
import PostList from "@/components/Posts/PostList/PostList.vue";
import CustomDialog from "@/components/ui/CustomDialog/CustomDialog.vue";
import CustomButton from "@/components/ui/CustomButton/CustomButton.vue";
import CustomSelect from "@/components/ui/CustomSelect/CustomSelect.vue";
import CustomInput from "@/components/ui/CustomInput/CustomInput.vue";
import CustomPagination from "@/components/ui/CustomPagination/CustomPagination.vue";

export default {
  components: {
    CustomPagination,
    CustomInput,
    CustomSelect,
    CustomButton,
    CustomDialog,
    PostList,
    AddPostForm
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQueryText: 'post/setSearchQueryText',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts"
    }),
    handleAddPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    handleDeletePost(post) {
      this.posts = this.posts.filter(p => p.id!== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.loadMorePosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQueryText: state => state.post.searchQueryText,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.page,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts"
    })
  },

  watch: {
  }
}
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
}

.observer {
  height: 30px;
  background-color: antiquewhite;
}
</style>