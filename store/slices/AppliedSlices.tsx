import { createSlice } from "@reduxjs/toolkit";

const jobAppliedSlice = createSlice({
    name: "applyJob",
    initialState: {
        appliedJob: []
    },
    reducers: {
        updateAppliedJob: (state, action) => {
            state.appliedJob.push(action.payload);
        },
        
    }
});

export const { updateAppliedJob } = jobAppliedSlice.actions;
export default jobAppliedSlice.reducer;