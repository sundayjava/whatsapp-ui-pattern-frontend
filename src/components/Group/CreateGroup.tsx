import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import SelectedMember from "./SelectedMember";
import ChatCard from "../chatcard/ChatCard";
import NewGroup from "./NewGroup";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { searchUser } from "../../redux/Auth/Action";

const CreateGroup:React.FC<{setIsGroup:any}> = (props) => {
  const [newGroup, setNewGroup] = useState(false);
  const [groupMember, setGroupMember] = useState(new Set());
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");
  const auth = useAppSelector((state) => state.auth);

  const handleRemoveMember = (item: any) => {
    groupMember.delete(item);
    setGroupMember(groupMember);
  };

  const handleSearch = (e: any) => {
    dispatch(searchUser(query, token));
  };

  return (
    <div className="w-full h-full">
      {!newGroup && (
        <div>
          <div className="flex items-center space-x-10 bg-[#008069] text-white pt-16 px-10 pb-5">
            <BsArrowLeft className=" cursor-pointer text-2xl font-bold" />
            <p className="text-xl font-semibold">Add group participants</p>
          </div>
          <div className="relative bg-white py-4 px-3">
            <div className="flex space-x-2 flex-wrap space-y-1">
              {groupMember.size > 0 &&
                Array.from(groupMember).map((item: any) => (
                  <SelectedMember
                    handleRemoveMember={() => handleRemoveMember(item)}
                    member={item}
                  />
                ))}
            </div>
            <input
              type="text"
              onChange={(e) => {
                handleSearch(e.target.value);
                setQuery(e.target.value);
              }}
              className=" outline-none border-b border-[#919191] p-2 w-[90%]"
              placeholder="Search user"
              value={query}
            />
          </div>
          <div className=" bg-white overflow-y-scroll h-[50.2vh]">
            {query &&
              auth.searchUser?.map((item: any, i: any) => (
                <div
                  onClick={() => {
                    groupMember.add(item);
                    setGroupMember(groupMember);
                    setQuery("");
                  }}
                  key={i}
                >
                  <hr />
                  <ChatCard
                    item={item}
                    userImg={
                      item.profile_picture ||
                      "https://cdn.pixabay.com/photo/2023/12/12/21/20/dog-8445917_640.jpg"
                    }
                    name={item.full_name}
                  />
                </div>
              ))}
          </div>
          <div className="bottom-10 py-10 bg-slate-200 flex items-center justify-center">
            <div
              className="bg-green-400 rounded-full p-4 cursor-pointer"
              onClick={() => setNewGroup(true)}
            >
              <BsArrowRight className="text-white  font-bold text-3xl" />
            </div>
          </div>
        </div>
      )}
      {newGroup && <NewGroup setIsGroup={props.setIsGroup} groupMember={groupMember}/>}
    </div>
  );
};

export default CreateGroup;
