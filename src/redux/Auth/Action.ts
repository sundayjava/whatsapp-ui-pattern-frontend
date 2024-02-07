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

const baseUrl = "http://localhost:5454";

export const register = (data: any) => async (dispatch: AppDispatch) => {
  try {
    const res = await fetch(`${baseUrl}/auth/signup`, {
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
    const res = await fetch(`${baseUrl}/auth/signin`, {
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
  console.log("Current user ", token);
  try {
    const res = await fetch(`${baseUrl}/api/users/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const resData = await res.json();
    console.log("Current user", resData);
    dispatch({ type: REQ_USER, payload: resData });
  } catch (error) {
    console.log("Catch error ", error);
  }
};

export const searchUser = async (data: any) => {
  const dispatch = useAppDispatch();
  try {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/users/search?name=${data.keyword}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
      }
    );

    const resData = await res.json();
    console.log("Search user user", resData);
    dispatch({ type: SEARCH_USER, payload: resData });
  } catch (error) {
    console.log("Catch error ", error);
  }
};

export const updateUser = async (data: any) => {
  const dispatch = useAppDispatch();
  try {
    const res = await fetch(
      `${process.env.BASE_API_URL}/api/users/update/${data.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
      }
    );

    const resData = await res.json();
    console.log("Search user user", resData);
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
