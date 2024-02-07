import { AiOutlineSearch } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import {
  BsEmojiSmile,
  BsFilter,
  BsMicFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { TbCircleDashed } from "react-icons/tb";
import ChatCard from "./chatcard/ChatCard";
import { useEffect, useState } from "react";
import MessageCard from "./messagecard/MessageCard";
import { ImAttachment } from "react-icons/im";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import Profile from "./profile/Profile";
import { Menu, MenuItem } from "@mui/material";
import CreateGroup from "./Group/CreateGroup";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { currentUser, logout } from "../redux/Auth/Action";

const HomePage = () => {
  const [querys, setQuerys] = useState("");
  const [currentChat, setCurrentChat] = useState(false);
  const [content, setContent] = useState("");
  const [isProfile, setIsProfile] = useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isGroup, setIsGroup] = useState(false);
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const token = localStorage.getItem("token");

  const handleClick = (event: any) => {
    setAnchorEl(event);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (e: any) => {
    console.log(e);
  };

  const handleClickOnChatCard = () => {
    setCurrentChat(true);
  };

  const isReadUserMessage = () => {};

  const handleCreateNewMessage = () => {};

  const handleNavigate = () => {
    // navigate("/profile")
    setIsProfile(true);
  };

  useEffect(() => {
    dispatch(currentUser(token));
  }, [token]);

  const handleCloseOpenProfile = () => {
    setIsProfile(false);
  };

  const handleCreateGroup = () => {
    setIsGroup(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signup")
  };

  useEffect(() => {
    if (!auth.regUser) {
      navigate("/signup");
    }
  }, [auth.regUser]);

  return (
    <div className="relative bg-slate-500">
      <div className="py-14 bg-green-400 w-full"></div>
      <div className="flex bg-[#f0f2f5] h-[90vh] absolute top-[5vh] left-[2vw] w-[96vw]">
        <div className="left w-[30%] bg-[#c8c9cc] h-full">
          {isGroup && <CreateGroup />}
          {/*Profile*/}
          {isProfile && (
            <div className="h-full w-full">
              <Profile handleCloseOpenProfile={handleCloseOpenProfile} />
            </div>
          )}
          {/*Home*/}
          {!isProfile && !isGroup && (
            <div className="w-full">
              <div className="flex justify-between items-center p-3">
                <div
                  onClick={handleNavigate}
                  className="flex items-center space-x-3"
                >
                  <img
                    src="https://cdn.pixabay.com/photo/2023/12/12/21/20/dog-8445917_640.jpg"
                    alt="pixabay"
                    className="rounded-full w-10 h-10 cursor-pointer"
                  />
                  <p>{auth.regUser?.full_name}</p>
                </div>
                <div className=" space-x-3 text-2xl flex">
                  <TbCircleDashed
                    className=" cursor-pointer"
                    onClick={() => navigate("/status")}
                  />
                  <BiCommentDetail className=" cursor-pointer" />
                  <div>
                    <BsThreeDotsVertical
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      className=" cursor-pointer"
                      onClick={(e) => handleClick(e.currentTarget)}
                    />

                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleCreateGroup}>
                        Create Group
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </div>
                </div>
              </div>

              <div className=" relative flex justify-center items-center bg-white py-4 px-3">
                <input
                  type="text"
                  className="border-none bg-slate-200 rounded-md w-[90%] pl-9 py-2 outline-none"
                  placeholder="Search or start new chat"
                  onChange={(e) => {
                    setQuerys(e.target.value);
                    handleSearch(e.target.value);
                  }}
                  value={querys}
                />
                <AiOutlineSearch className=" left-5 top-7 absolute" />
                <div>
                  <BsFilter className="ml-4 text-3xl" />
                </div>
              </div>
              {/*All users*/}
              <div className="bg-white overflow-y-scroll h-[72vh] px-3">
                {querys &&
                  [2, 3, 2, 3, 2, 3, 2, 3].map((_) => (
                    <div onClick={handleClickOnChatCard}>
                      <hr />
                      <ChatCard />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
        {/*Default whatsapp page*/}
        {!currentChat && (
          <div className="w-[70%] flex flex-col items-center justify-center h-full">
            <div className="max-w-[70%] text-center">
              <img src="" alt="" />
              <h1 className="text-4xl text-gray-600">Whatsapp web</h1>
              <p className="my-9">
                Send and receive message without longing your phone online. Use
                WhatsApp on up to 4 linked devices and 1 phone at the same time
              </p>
            </div>
          </div>
        )}

        {/*Message part*/}
        {currentChat && (
          <div className="w-[70%] relative bg-blue-200">
            <div className="absolute top-0 w-full bg-[#f0f2f5]">
              <div className="flex justify-between">
                <div className="py-3 space-x-4 flex items-center px-3">
                  <img
                    src="https://cdn.pixabay.com/photo/2024/01/07/11/17/welsh-corgi-8492879_640.jpg"
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <p>username</p>
                </div>
                <div className="py-3 flex space-x-4 items-center px-3">
                  <AiOutlineSearch />
                  <BsThreeDotsVertical />
                </div>
              </div>
            </div>
            {/*Message section*/}
            <div className="px-10 h-[85vh] overflow-y-scroll bg-blue-200">
              <div className="space-x-1 flex flex-col justify-center mt-20 py-2">
                {[1, 3, 2, 3, 2, 3, 2, 3].map((_, i) => (
                  <MessageCard
                    content="Message"
                    isReadUserMessage={i % 2 == 0}
                  />
                ))}
              </div>
            </div>

            {/**/}
            <div className="footer bg-[#f0f2f5] absolute bottom-0 w-full py-3 text-2xl">
              <div className="flex justify-between items-center px-5 ">
                <BsEmojiSmile className=" cursor-pointer" />
                <ImAttachment />
                <input
                  type="text"
                  onChange={(e) => setContent(e.target.value)}
                  className="py-2 outline-none border-none bg-white pl-4 rounded-md w-[85%]"
                  placeholder="type message"
                  value={content}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleCreateNewMessage();
                      setContent("");
                    }
                  }}
                />
                <BsMicFill />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
