import { Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { BsArrowLeft, BsCheck2 } from "react-icons/bs";

const NewGroup = () => {
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [groupName, setGroupName] = useState("");

  return (
    <div className="w-full h-full">
      <div className="flex items-center space-x-10 bg-green-400 text-white pt-16 px-10 pb-5">
        <BsArrowLeft className=" cursor-pointer text-2xl font-bold" />
        <p className="text-xl font-semibold">New Group</p>
      </div>
      <div className="flex flex-col justify-center items-center my-12">
        <label htmlFor="imgInput" className="relative">
          <img
            alt=""
            src="https://images.pexels.com/photos/17371711/pexels-photo-17371711/free-photo-of-pretty-girl-with-a-yellow-flower-between-her-fingers-as-a-ring.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          {isImageUploading && (
            <CircularProgress className=" absolute top-[5rem] left-[6rem]" />
          )}
        </label>
        <input
          type="file"
          id="imgInput"
          className="hidden"
          onChange={() => console.log("Image Change")}
          value={""}
        />
      </div>
      <div className="w-full flex justify-between items-center py-2 px-5">
        <input
          className="w-full outline-none border-b-2 border-green-700 px-2 bg-transparent"
          type="text"
          placeholder="Group Subject"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </div>

      {groupName && (
        <div className="py-10 bg-slate-200 flex items-center justify-center">
          <Button>
            <div className="bg-green-600 rounded-full p-4">
              <BsCheck2 className="text-white font-bold text-3xl" />
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};

export default NewGroup;
