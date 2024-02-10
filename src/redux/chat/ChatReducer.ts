import { CREATE_CHAT, CREATE_GROUP, GET_USERS_CHAT } from "./ActionType";

interface ChatState {
  chats?: any;
  createdGroup?: any;
  createdChat?: any;
}

const initialState: ChatState = {};

export const chatReducer = (
  state: ChatState = initialState,
  action: { type: string; payload: any }
) => {
  if (action.type === CREATE_CHAT) {
    return { ...state, createdChat: action.payload };
  } else if (action.type === CREATE_GROUP) {
    return { ...state, createdGroup: action.payload };
  } else if (action.type === GET_USERS_CHAT) {
    return { ...state, chats: action.payload };
  }

  return state;
};
