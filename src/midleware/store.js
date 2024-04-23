// config
import { configureStore } from "@reduxjs/toolkit";
// reducers
import userReducer from "../reducer_page/userReducer";
import busReducer from "../reducer_page/busReducer";
// store
const store = configureStore({
  // reducer
  reducer: {
    user: userReducer,
    //bus: busReducer,
  },
});
// export
export default store;
