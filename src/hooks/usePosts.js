import {onMounted, ref} from "vue";
import axios from "axios";

export const usePosts = (limit) => {
    const posts = ref([]);
    const page = ref(0);
    const isPostsLoading = ref(true);
    const totalPages = ref(0);
    const loadMorePosts = async () => {
        try {
            page.value += 1;
            const {data, headers} = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page.value,
                }
            });
            totalPages.value = Math.ceil(headers['x-total-count'] / limit);
            posts.value = [...posts.value,...data];
        } catch (error) {
            alert(error);
        } finally {
            isPostsLoading.value = false;
        }
    }

    onMounted(loadMorePosts);

    return {
        posts,
        page,
        loadMorePosts,
        isPostsLoading,
        totalPages,
    }
}