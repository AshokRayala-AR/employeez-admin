import { createSlice } from "@reduxjs/toolkit";

const SignUpSlice = createSlice({
    name: "SignUp",
    initialState: {
        details: {
            phoneNumber: "",
            email: ""
        }
    },
    reducers: {
        updatePhoneNumber: (state, action) => {
            state.details.phoneNumber = action.payload;
        },
        updateEmail: (state, action) => {
            state.details.email = action.payload;
        }
    }
});

export const { updatePhoneNumber, updateEmail } = SignUpSlice.actions;
export default SignUpSlice.reducer;