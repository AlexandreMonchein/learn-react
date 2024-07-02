import { configureStore } from "@reduxjs/toolkit";
import { stateReducer } from "./state.reducers";

export default configureStore({
  reducer: stateReducer,
});
