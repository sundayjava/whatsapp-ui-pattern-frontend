import { useAppDispatch } from "../hook";
import { AppDispatch } from "../store";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  REQ_USER,
  SEARCH_USER,
  UPDATE_USER,
} from "./ActionType";

export const register = (data: any) => async (dispatch: AppDispatch) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await res.json();
    if (resData.jwt) {
      localStorage.setItem("token", resData.jwt);
    }
    console.log("Register", resData);
    dispatch({ type: REGISTER, payload: resData });
  } catch (error) {
    console.log("Catch error ", error);
  }
};

export const login = (data: any) => async (dispatch: AppDispatch) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await res.json();
    if (resData.jwt) {
      localStorage.setItem("token", resData.jwt);
    }
    console.log("Login", resData);
    dispatch({ type: LOGIN, payload: resData });
  } catch (error) {
    console.log("Catch error ", error);
  }
};

export const currentUser = (token: any) => async (dispatch: AppDispatch) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/users/profile`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const resData = await res.json();
    // console.log("Current user", resData);
    dispatch({ type: REQ_USER, payload: resData });
  } catch (error) {
    console.log("Catch error ", error);
  }
};

export const searchUser =
  (keyword: string, token: any) => async (dispatch: AppDispatch) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/users/search?keyword=${keyword}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const resData = await res.json();
      console.log("Search user", resData);
      dispatch({ type: SEARCH_USER, payload: resData });
    } catch (error) {
      console.log("Catch error ", error);
    }
  };

export const updateUser = (data: any) => async (dispatch: AppDispatch) => {
  console.log(data.data);
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/users/user/update`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        body: JSON.stringify(data.data),
      }
    );

    const resData = await res.json();
    console.log("Update user", resData);
    dispatch({ type: UPDATE_USER, payload: resData });
  } catch (error) {
    console.log("Catch error ", error);
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT, payload: null });
  dispatch({ type: REQ_USER, payload: null });
};
