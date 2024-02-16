<template>
  <div class="posts">
    <h2>Posts</h2>

    <custom-input
        v-model="searchQueryText"
        placeholder="Search"
        v-focus
    />

    <div class="controls">
      <custom-button @click="showDialog">Add Post</custom-button>
      <custom-select
          v-model="selectedSort"
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
import axios from "axios";
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
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      searchQueryText: "",
      page: 0,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: "title", name: "Title"},
        {value: "body", name: "Description"},
      ]
    }
  },
  methods: {
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
    async loadMorePosts() {
      try {
        this.page += 1;
        this.isPostsLoading = true;
        const {data, headers} = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: this.limit,
            _page: this.page,
          }
        });
        this.totalPages = Math.ceil(headers['x-total-count'] / this.limit);
        this.posts = [...this.posts,...data];
      } catch (error) {
        alert(error);
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.loadMorePosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts]
          .sort((post1, post2) =>
              post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
          );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts
          .filter(post =>
              post.title
                  .toLowerCase()
                  .includes(this.searchQueryText.toLowerCase()))
    }
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