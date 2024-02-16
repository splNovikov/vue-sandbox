import {computed, ref} from "vue";

export const useSortedAndSearched = (sortedPosts) => {
    const searchQueryText = ref('');
    const sortedAndSearchedPosts = computed(() => sortedPosts.value
        .filter(post =>
            post.title
                .toLowerCase()
                .includes(searchQueryText.value.toLowerCase())));

    return {
        searchQueryText,
        sortedAndSearchedPosts,
    }
}

