import {
  LOGIN,
  REGISTER,
  REQ_USER,
  SEARCH_USER,
  UPDATE_USER,
} from "./ActionType";

interface AuthState {
  signup?: any;
  signin?: any;
  regUser?: any;
  searchUser?: any;
  updateUser?: any; // Replace 'any' with the actual type of your signup payload
}

const initialState: AuthState = {};

export const authReducer = (
  state: AuthState = initialState,
  action: { type: string; payload: any }
): AuthState => {
  if (action.type === REGISTER) {
    return { ...state, signup: action.payload };
  } else if (action.type === LOGIN) {
    return { ...state, signin: action.payload };
  } else if (action.type === REQ_USER) {
    return { ...state, regUser: action.payload };
  } else if (action.type === SEARCH_USER) {
    return { ...state, searchUser: action.payload };
  } else if (action.type === UPDATE_USER) {
    return { ...state, updateUser: action.payload };
  }

  return state;
};
