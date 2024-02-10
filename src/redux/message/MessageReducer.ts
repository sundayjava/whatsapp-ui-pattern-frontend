import {CREATE_NEW_MESSAGE, GET_ALL_MESSAGE,} from "./ActionType";

interface MessageState {
  messages?: any;
  newMessage?: any;
}

const initialState: MessageState = {
  messages: [],
  newMessage:{}
};

export const messageReducer = (
  state: MessageState = initialState,
  action: { type: string; payload: any }
) => {
  if (action.type === CREATE_NEW_MESSAGE) {
    return { ...state, newMessage: action.payload };
  } else if (action.type === GET_ALL_MESSAGE) {
    return { ...state, messages: action.payload };
  } 

  return state;
};
