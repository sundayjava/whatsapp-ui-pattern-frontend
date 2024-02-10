import { AiOutlineClose } from "react-icons/ai";

const SelectedMember: React.FC<{ handleRemoveMember: any; member: any }> = (
  props
) => {
  return (
    <div className="flex items-center bg-slate-300 rounded-full">
      <img
        src={
          props.member.profile_picture ||
          "https://images.pexels.com/photos/16176620/pexels-photo-16176620/free-photo-of-portrait-of-a-woman-with-curly-hair-against-orange-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
        alt=""
        className="w-7 h-7 rounded-full object-cover"
      />
      <p className="px-2">{props.member.full_name}</p>
      <AiOutlineClose
        onClick={props.handleRemoveMember}
        className="pr-1 cursor-pointer"
      />
    </div>
  );
};

export default SelectedMember;
