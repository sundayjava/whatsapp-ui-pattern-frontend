const MessageCard: React.FC<{
  isReadUserMessage: any;
  content: string;
}> = (props) => {
  return (
    <div
      className={`py-2 px-2 rounded-md max-w-[50%] ${
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
