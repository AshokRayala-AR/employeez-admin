import { configureStore } from "@reduxjs/toolkit";
import SignupSlice from "./slices/SignUpSlice";
import appliedSlice from "./slices/AppliedSlices";
import savedSlice from "./slices/SavedSlice";
const store = configureStore({
  reducer: {
    SignUp: SignupSlice,
    applied:appliedSlice,
    saved:savedSlice
  },
});

export default store;