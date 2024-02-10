import { AppDispatch } from "../store";
import { CREATE_NEW_MESSAGE, GET_ALL_MESSAGE } from "./ActionType";

export const createMessage = (chatId:any, content:string, token:any) => async (dispatch: AppDispatch) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/messages/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({chatId, content}),
        }
      );
      const data = await res.json();
      console.log("New Message ", data);
      dispatch({ type: CREATE_NEW_MESSAGE, payload: data });
    } catch (error) {
      console.log("Catch error ", error);
    }
  };

  export const getAllMessages = (chatId:any, token:any) => async (dispatch: AppDispatch) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/messages/chat/${chatId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        }
      );
      const data = await res.json();
      // console.log("This Chat messages ", data);
      dispatch({ type: GET_ALL_MESSAGE, payload: data });
    } catch (error) {
      console.log("Catch error ", error);
    }
  };