const MessageCard: React.FC<{
  isReadUserMessage: any;
  content: string;
}> = (props) => {
  return (
    <div
      className={`px-2 mb-2 py-1 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] shadow-lg max-w-[50%] ${
        props.isReadUserMessage
          ? " self-start bg-white"
          : " self-end bg-green-300"
      }`}
    >
      <p>{props.content}</p>
    </div>
  );
};

export default MessageCard;
