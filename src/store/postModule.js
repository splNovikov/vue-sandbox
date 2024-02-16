import axios from "axios";

export const postModule = {
    namespaced: true,
    state() {
        return {
            posts: [],
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
    getters: {
        sortedPosts(state) {
            return [...state.posts]
                .sort((post1, post2) =>
                    post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
                );
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts
                .filter(post =>
                    post.title
                        .toLowerCase()
                        .includes(state.searchQueryText.toLowerCase()))
        }

    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoadingPosts(state, isLoading) {
            state.isPostsLoading = isLoading;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setSearchQueryText(state, searchQueryText) {
            state.searchQueryText = searchQueryText;
        },
        setPage(state, page) {
            state.page = page;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        }
    },
    actions: {
        async loadMorePosts({state, commit}) {
            try {
                commit('setPage', state.page + 1);
                commit('setLoadingPosts', true);
                const {data, headers} = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _limit: state.limit,
                        _page: state.page,
                    }
                });
                commit('setTotalPages', Math.ceil(headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts,...data]);
            } catch (error) {
                alert(error);
            } finally {
                commit('setLoadingPosts', false);
            }
        },
    },
}