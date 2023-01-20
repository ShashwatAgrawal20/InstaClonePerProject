const Story = (props) => {
  return (
    <div>
      <img
        src={props.image}
        alt="Error"
        className="h-14 w-14 rounded-full p-[2px] border-red-500 border-2 object-contain hover:scale-110 transition transform duration-200 ease-out"
      />
      <p className="text-xs w-14 truncate text-center">{props.username}</p>
    </div>
  );
};

export default Story;
