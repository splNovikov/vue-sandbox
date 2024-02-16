<template>
  <div class="posts">
    <h2>Posts (Composition API)</h2>

    <custom-input
        v-model="searchQueryText"
        placeholder="Search"
        v-focus
    />

    <div class="controls">
      <custom-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>

    <post-list
        :posts="sortedAndSearchedPosts"
    />
    <div v-if="isPostsLoading">Loading Posts...</div>

    <div
        v-intersection="loadMorePosts"
        class="observer">
    </div>
  </div>
</template>

<script>
import AddPostForm from "@/components/Posts/AddPostForm/AddPostForm.vue";
import PostList from "@/components/Posts/PostList/PostList.vue";
import CustomDialog from "@/components/ui/CustomDialog/CustomDialog.vue";
import CustomButton from "@/components/ui/CustomButton/CustomButton.vue";
import CustomSelect from "@/components/ui/CustomSelect/CustomSelect.vue";
import CustomInput from "@/components/ui/CustomInput/CustomInput.vue";
import CustomPagination from "@/components/ui/CustomPagination/CustomPagination.vue";
import {usePosts} from "@/hooks/usePosts";
import {useSorted} from "@/hooks/useSorted";
import {useSortedAndSearched} from "@/hooks/useSortedAndSearched";

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
      sortOptions: [
        {value: "title", name: "Title"},
        {value: "body", name: "Description"},
      ]
    }
  },
  setup(props) {
    const {posts, page, loadMorePosts, isPostsLoading, totalPages} = usePosts(10);
    const {selectedSort, sortedPosts} = useSorted(posts)
    const {searchQueryText, sortedAndSearchedPosts} = useSortedAndSearched(sortedPosts)

    return {
      posts,
      page,
      loadMorePosts,
      isPostsLoading,
      totalPages,
      selectedSort,
      searchQueryText,
      sortedAndSearchedPosts,
    }
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