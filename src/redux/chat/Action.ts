import { AppDispatch } from "../store";
import { CREATE_CHAT, CREATE_GROUP, GET_USERS_CHAT } from "./ActionType";

export const createChat = (userId:number, token:any) => async (dispatch: AppDispatch) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/chats/single`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userId),
      }
    );
    const data = await res.json();
    console.log("Current Chat", data);
    dispatch({ type: CREATE_CHAT, payload: data });
  } catch (error) {
    console.log("Catch error ", error);
  }
};

export const createGroupChat = (data:any) => async (dispatch: AppDispatch) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/chats/group`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify(data.group),
      }
    );
    const resData = await res.json();
    console.log("Current Group", resData);
    dispatch({ type: CREATE_GROUP, payload: resData });
  } catch (error) {
    console.log("Catch error ", error);
  }
};

export const getUsersChat = (token:any) => async (dispatch: AppDispatch) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/chats/user`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      }
    );
    const data = await res.json();
    console.log("All chat", data);
    dispatch({ type: GET_USERS_CHAT, payload: data });
  } catch (error) {
    console.log("Catch error ", error);
  }
};
