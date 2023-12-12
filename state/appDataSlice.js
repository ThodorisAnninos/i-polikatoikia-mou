import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    blockOfFlats: null,
    requests: null,
    posts: null
}

export const appDataSlice = createSlice({
    name: "appData",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
        setBlockOfFlats: (state, action) => {
            state.blockOfFlats = action.payload.blockOfFlats;
        },
        setRequests: (state, action) => {
            state.requests = action.payload.requests;
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        }

    }
})

export const { setUser, setBlockOfFlats, setRequests, setPosts } = appDataSlice.actions;
export default appDataSlice.reducer;