import { createSlice } from "@reduxjs/toolkit";

const savedJobSlice = createSlice({
    name: "savedJob",
    initialState: {
        savedJob: []
    },

    reducers: {
        updateSavedJob: (state, action) => {
            state.savedJob.push(action.payload);
        },        
    }
});

export const { updateSavedJob } = savedJobSlice.actions;
export default savedJobSlice.reducer;