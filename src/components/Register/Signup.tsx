import { Button, Snackbar, Alert } from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { currentUser, register } from "../../redux/Auth/Action";

const Signup = () => {
  const [inputData, setInputData] = useState({
    full_name: "",
    email: "",
    password: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const dispatch = useAppDispatch()
  const auth = useAppSelector(state => state.auth)
  const token = localStorage.getItem("token")

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
    setOpenSnackbar(true);

    dispatch(register(inputData))
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputData((values) => ({ ...values, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  useEffect(()=>{
    if(token)dispatch(currentUser(token))
  },[token])

  useEffect(()=>{
    if(auth.regUser?.full_name){
        navigate("/")
    }
  },[auth.regUser])

  return (
    <div>
      <div className="flex justify-center h-screen items-center">
        <div className="w-[30%] p-10 shadow-md bg-white">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <p className="mb-2">Full Name</p>
              <input
                type="text"
                placeholder="Enter your fullname"
                onChange={(e) => handleChange(e)}
                value={inputData.full_name}
                name="full_name"
                className="py-2 outline outline-green-600 w-full rounded-md border"
              />
            </div>
            <div>
              <p className="mb-2">Email</p>
              <input
                type="text"
                placeholder="Enter your Email"
                onChange={(e) => handleChange(e)}
                value={inputData.email}
                name="email"
                className="py-2 outline outline-green-600 w-full rounded-md border"
              />
            </div>
            <div>
              <p className="mb-2">Password</p>
              <input
                type="text"
                placeholder="Enter your Password"
                onChange={(e) => handleChange(e)}
                value={inputData.password}
                name="password"
                className="py-2 outline outline-green-600 w-full rounded-md border"
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full"
                sx={{ bgcolor: green[700], padding: "0.5rem 0rem" }}
                variant="contained"
              >
                Sign Up
              </Button>
            </div>
          </form>
          <div className="flex space-x-3 items-center mt-5">
            <p className="m-0">Already have an Account?</p>
            <Button variant="text" onClick={() => navigate("/signin")}>
              Sign In
            </Button>
          </div>
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Your account has been created successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signup;
