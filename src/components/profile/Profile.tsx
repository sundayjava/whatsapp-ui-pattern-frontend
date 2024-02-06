import { useState } from "react";
import { BsArrowLeft, BsCheck2, BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Profile: React.FC<{
  handleCloseOpenProfile: any;
}> = (props) => {
  const [flag, setFlag] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleFlag = () => {
    setFlag(true);
  };

  const handleCheckClick = () => {
    setFlag(false);
  };

  const handleChange = (e: any) => {
    setUsername(e.target.value);
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
            src="https://cdn.pixabay.com/photo/2023/12/12/21/20/dog-8445917_640.jpg"
            className="rounded-full w-[15vw] h-[15vw] cursor-pointer object-cover"
          />
        </label>
        <input type="file" id="imgInput" className="hidden" autoFocus={true} />
      </div>

      {/*Name section*/}
      <div className="bg-white px-3">
        <p className="py-3">Your Name</p>
        {!flag && (
          <div className="w-full flex justify-between items-center">
            <p className="py-3">{username || "sunday advis"}</p>
            <BsPencil onClick={handleFlag} className=" cursor-pointer" />
          </div>
        )}
        {flag && (
          <div className="flex w-full justify-between items-center py-2">
            <input
              type="text"
              placeholder="Enter your name"
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
