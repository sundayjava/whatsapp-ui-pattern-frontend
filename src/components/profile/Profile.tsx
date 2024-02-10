import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { currentUser, updateUser } from "../../redux/Auth/Action";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { BsArrowLeft, BsPencil, BsCheck2 } from "react-icons/bs";

const Profile: React.FC<{
  handleCloseOpenProfile: any;
}> = (props) => {
  const [flag, setFlag] = useState(false);
  const [username, setUsername] = useState("");
  const [imagePicture, setImagePicture] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");

  const auth = useAppSelector((state) => state.auth);

  const handleFlag = () => {
    setFlag(true);
  };

  const handleCheckClick = () => {
    setFlag(false);
    const data = {
      token: localStorage.getItem("token"),
      data: { full_name: username },
    };
    dispatch(updateUser(data));
  };

  const handleChange = (e: any) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    dispatch(currentUser(token));
  }, [auth.regUser.profile_picture, imagePicture]);

  const uploadFileToCloudinary = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const pics = files[0];

      const imgdata = new FormData();
      imgdata.append("file", pics);
      imgdata.append("upload_preset", "wxhu0vye");
      imgdata.append("cloud_name", "dh3p0s6gc");
      fetch("https://api.cloudinary.com/v1_1/dh3p0s6gc/image/upload", {
        method: "POST",
        body: imgdata,
      })
        .then((res) => res.json())
        .then((img) => {
          setImagePicture(img.url);
          console.log("Image", img);
          const data = {
            token: localStorage.getItem("token"),
            data: { profile_picture: img.url },
          };

          if (img.url) {
            dispatch(updateUser(data));
          } else {
            console.log("Error uploading image");
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log("No file selected");
    }
  };

  const handleChangeUsername = (e: any) => {
    const data = {
      token: localStorage.getItem("token"),
      data: { full_name: username },
    };
    if (e.key === "Enter") {
      dispatch(updateUser(data));
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex items-center space-x-10 bg-[#008000] text-white pt-16 px-10 pb-5">
        <BsArrowLeft
          onClick={props.handleCloseOpenProfile}
          className=" cursor-pointer text-2xl font-bold"
        />
        <p className=" cursor-pointer font-semibold">Profile</p>
      </div>
      {/*Update profile section*/}
      <div className="flex flex-col justify-center items-center my-12">
        <label htmlFor="imgInput">
          <img
            src={
              auth.regUser.profile_picture ||
              imagePicture ||
              "https://cdn.pixabay.com/photo/2023/12/12/21/20/dog-8445917_640.jpg"
            }
            className="rounded-full w-[15vw] h-[15vw] cursor-pointer object-cover"
          />
        </label>
        <input
          onChange={(e) => uploadFileToCloudinary(e)}
          type="file"
          id="imgInput"
          className="hidden"
          autoFocus={true}
        />
      </div>

      {/*Name section*/}
      <div className="bg-white px-3">
        <p className="py-3">Your Name</p>
        {!flag && (
          <div className="w-full flex justify-between items-center">
            <p className="py-3">
              {auth.regUser?.full_name || username || "unknown"}
            </p>
            <BsPencil onClick={handleFlag} className=" cursor-pointer" />
          </div>
        )}
        {flag && (
          <div className="flex w-full justify-between items-center py-2">
            <input
              type="text"
              placeholder="Enter your name"
              onKeyPress={handleChangeUsername}
              onChange={handleChange}
              className="w-[80%] outline-none border-b-2 border-blue-700 p-2"
            />
            <BsCheck2
              onClick={handleCheckClick}
              className=" cursor-pointer text-2xl"
            />
          </div>
        )}
      </div>

      <div className="px-3 py-5">
        <p className="py-10">
          This is not your username. this name will be visible to your whatsapp
          contacts
        </p>
      </div>
    </div>
  );
};

export default Profile;
