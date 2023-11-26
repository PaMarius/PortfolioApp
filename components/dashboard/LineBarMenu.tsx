export const LineBarMenu = () => {
  const menuItems = ["Work", "About", "Contact"];
  return (
    <div className="w-full h-full text-black  bg-red-5s00 mt-4 font-mono">
      <div className="flex gap-8 w-full justify-end pr-20 ">
        {menuItems.map((item: string, index: number) => (
          <div
            key={index}
            className="font-semibold cursor-pointer hover:animate-pulse w-16 h-16 rounded-full hover:bg-gradient-to-bl from-[#d8d4cd] to-[#ecede7] flex items-center justify-center px-2 box-content"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
