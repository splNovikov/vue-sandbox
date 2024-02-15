<template>
  <div class="posts">
    <h2>Posts</h2>

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

    <div v-if="isPostsLoading">Loading Posts...</div>
    <post-list
        v-else
        :posts="sortedPosts"
        @onDeletePost="handleDeletePost"
    />
  </div>
</template>

<script>
import axios from "axios";
import AddPostForm from "@/components/Posts/AddPostForm/AddPostForm.vue";
import PostList from "@/components/Posts/PostList/PostList.vue";
import CustomDialog from "@/components/ui/CustomDialog/CustomDialog.vue";
import CustomButton from "@/components/ui/CustomButton/CustomButton.vue";
import CustomSelect from "@/components/ui/CustomSelect/CustomSelect.vue";

export default {
  components: {
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
    async fetchPosts() {
      this.isPostsLoading = true;
      try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = data;
      } catch (error) {
        alert(error);
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts]
          .sort((post1, post2) =>
              post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
          );
    }
  },
  watch: {}
}
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
}
</style>