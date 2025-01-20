import { MdOutlineWatchLater } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { HiMiniFolderArrowDown } from "react-icons/hi2";
import { BiSolidDownArrow } from "react-icons/bi";
// import { BiSolidUpArrow } from "react-icons/bi";
import { RiVipCrown2Fill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="  h-[60px] px-12 flex justify-between bg-black text-white">
      {/* LEFT */}
      <div className=" flex items-center gap-5 h-full font-Vip  ">
        <span className="text-green-500 font-bold text-3xl cursor-pointer">
          CTPlay
        </span>
        <span className="font-semibold text-base cursor-pointer hover:text-green-500">
          Đề xuất{" "}
        </span>
        <span className="font-medium text-base cursor-pointer hover:text-green-500">
          Bạch Nguyệt Phạn Tinh{" "}
        </span>
        <div className="flex items-center gap-1  cursor-pointer hover:text-green-500">
          <span className="font-medium text-base">Khác </span>
          <div className="text-xs">
            {" "}
            <BiSolidDownArrow />
          </div>
        </div>
      </div>
      {/* RIGHT */}

      <div className=" flex items-center gap-5">
        {/*  */}
        <div className="  relative rounded-md shadow-sm">
          <input
            type="text"
            className="     rounded-md w-full focus:outline-none focus:ring-2 focus:ring-black text-gray-300 py-[5px] px-1 pr-14 pl-3"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              border: "none",
            }}
            placeholder="Giọt Mưa Mang Mùi Rỉ Sét  "
          />
          <div
            className="absolute top-0 right-0 flex items-center h-full text-white font-bold border-l px-3 cursor-pointer hover:text-blue-500"
            style={{
              borderLeft: "2px solid rgba(255, 255, 255, 0.2)", // Sử dụng borderLeft để chỉ định cạnh trái
            }}
          >
            <FaSearch />
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col  justify-center items-center cursor-pointer hover:text-green-500">
          <div className="text-lg ">
            {" "}
            <MdOutlineWatchLater />
          </div>
          <i className="text-sm">Lịch sử xem </i>
        </div>{" "}
        {/*  */}
        <div className="flex flex-col  justify-center items-center cursor-pointer hover:text-green-500  ">
          <div className="text-lg ">
            {" "}
            <MdLanguage />
          </div>
          <i className="text-sm">Ngôn ngữ</i>
        </div>
        {/*  */}
        <div className="flex flex-col  justify-center items-center  cursor-pointer hover:text-green-500">
          <FaRegUser />
          <span className="text-sm">Của tôi </span>
        </div>
        {/*  */}
        <div className="flex items-center gap-2  border border-gray-200 hover:border-green-500 px-4 py-2 rounded-md cursor-pointer hover:text-green-500">
          <div className="font-bold   text-xl">
            {" "}
            <HiMiniFolderArrowDown />
          </div>
          <i className="font-medium">App </i>
        </div>
        {/*  */}
        <div
          className="flex items-center gap-2  px-4 py-2 rounded-md relative"
          style={{
            background: "rgb(242, 191, 131)",
          }}
        >
          <div className="font-bold text-black text-xl">
            {" "}
            <RiVipCrown2Fill />
          </div>
          <span className="font-semibold text-base text-black  font-Vip  ">
            Vip{" "}
          </span>
          <div
            className="absolute right-0 px-1  bg-red-500 flex items-center justify-center"
            style={{
              top: "0", // Canh trên
              transform: "translate(0%, -50%)", // Dịch chuyển để nằm giữa đường viền
              borderRadius: "3px", // Tùy chọn góc bo tròn
            }}
          >
            <span className="text-white text-xs">0.06$/day</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
