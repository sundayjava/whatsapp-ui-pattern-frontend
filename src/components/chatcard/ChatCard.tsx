type ItemChat = {
  full_name?: string;
  email?: string;
  profile_picture?: string;
};

const ChatCard: React.FC<{
  item: ItemChat;
  isChat?: boolean;
  name?: string;
  userImg?: string;
  notification?: any;
  isNotification?: any;
  message?: any;
}> = (props) => {
  return (
    <div className="flex items-center justify-centerpy-2 group cursor-pointer mb-3">
      <div className="w-[20%">
        <img src={props.userImg} className="h-14 w-14 rounded-full object-cover" />
      </div>
      <div className="pl-5 w-[80%]">
        <div className="flex justify-between items-center">
          <p className="text-lg">{props.name?.slice(0,9)}...</p>
          <p className="text-sm">timestamp</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="italic">message...</p>
          <div className="flex space-x-2 items-center">
            <p className=" text-xs py-1 px-2 text-white bg-green-500 rounded-full">
              5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
