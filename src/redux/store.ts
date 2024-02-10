import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { chatReducer } from "./chat/ChatReducer";
import { messageReducer } from "./message/MessageReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  message:messageReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  // Other configuration options as needed
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
