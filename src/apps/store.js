import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../stores/counter";
// import userReducer from "../stores/user";
// import productReducer from "../stores/product";

export default configureStore({
  reducer: {
    counter: counterReducer,
    // product: productReducer,
    // user: userReducer,
  },
});
