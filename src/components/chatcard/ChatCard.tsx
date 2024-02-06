const ChatCard = () => {
  return (
    <div className="flex items-center justify-centerpy-2 group cursor-pointer mb-3">
      <div className="w-[20%">
        <img
          src="https://cdn.pixabay.com/photo/2023/12/12/15/47/welding-8445458_640.jpg"
          className="h-14 w-14 rounded-full"
        />
      </div>
      <div className="pl-5 w-[80%]">
        <div className="flex justify-between items-center">
          <p className="text-lg">username</p>
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
