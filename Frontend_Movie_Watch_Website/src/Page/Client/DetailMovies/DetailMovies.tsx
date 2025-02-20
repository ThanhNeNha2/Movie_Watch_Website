import React from "react";
import Header from "../../../Components/Client/Header/Header";
import TienNghich from "../../../../public/Slider/454973789_1043086304140741_634917588460075684_n.jpg";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa6";
import {
  MdBookmarkAdded,
  MdOutlineIosShare,
  MdOutlineStar,
} from "react-icons/md";
import { RiArrowDownBoxLine, RiVipCrown2Fill } from "react-icons/ri";

const DetailMovies = () => {
  return (
    <div className="" style={{ background: "rgb(17, 19, 25)" }}>
      <Header />
      <div className="flex pl-12 relative">
        <div className="flex-1 " style={{ background: "rgb(17, 19, 25)" }}>
          {" "}
        </div>
        <div
          className=" flex-[3] transition-all duration-1000 ease-in-out   "
          style={{
            backgroundImage: `
            linear-gradient(to right, rgb(17, 19, 25) 35%, rgba(17, 19, 25, 0.6) 60%, transparent 100%), 
            url('/Slider/454973789_1043086304140741_634917588460075684_n.jpg')
          `,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            height: "561px",
          }}
        ></div>

        <div className="absolute top-[70px]">
          <div className="text-white flex flex-col gap-3">
            <span className="font-Bricolage font-semibold text-[40px] ">
              Tiên Nghịch
            </span>
            <button className="bg-green-400 w-14   flex justify-center items-center rounded">
              Free
            </button>
            <div className="flex gap-2 items-center   ">
              <div className="flex items-center text-green-400 ">
                {" "}
                <MdOutlineStar /> <span className="text-green-400">9.4</span>
              </div>
              <div className="border h-3"></div>
              <span className="text-white text-sm">T13</span>
              <div className="border h-3"></div>
              <span className="text-white text-sm">2021</span>
            </div>
            <div>
              <ul className="flex gap-3 items-center">
                <li className=" rounded-sm px-2 bg-gray-500 text-white py-[3px] text-xs">
                  Cổ trang{" "}
                </li>
                <li className=" rounded-sm px-2 bg-gray-500 text-white py-[3px] text-xs">
                  Tiên Hiệp
                </li>
                <li className=" rounded-sm px-2 bg-gray-500 text-white py-[3px] text-xs">
                  Tu Tiên
                </li>
              </ul>
            </div>

            {/*  */}

            <div>
              <button
                className="flex gap-1 items-center px-4 py-[7px] rounded font-Vip font-semibold text-black"
                style={{ background: "rgb(242, 191, 131)" }}
              >
                {" "}
                <RiVipCrown2Fill />
                Tháng đầu chỉ với 23,000Đ
              </button>
            </div>
            <div className="w-[40vw]">
              <span> Description:</span>
              <span>
                “Tiên Nghịch” của tác giả Nhĩ Căn, kể về thiếu niên bình phàm
                Vương Lâm xuất thân nông thôn, mang theo nhiệt huyết, tu luyện
                nghịch tiên, không chỉ cầu trường sinh, mà còn muốn thoát khỏi
                thân phận giun dế. Hắn tin rằng đạo do người quyết định, dùng tư
                chất bình phàm bước vào con đường tu chân, trải qua bao phong ba
                bão táp, dựa vào trí tuệ sáng suốt, từng bước một bước lên đỉnh
                cao, dựa vào sức một người, danh chấn Tu chân giới.
              </span>
            </div>

            {/*  */}
            <div className="flex gap-3">
              <button className="py-1 px-4 bg-green-500 font-Vip  text-lg text-white hover:text-green-400 cursor-pointer flex items-center gap-2 rounded">
                <FaPlay /> Play
              </button>
              <button className="py-1 px-4 bg-gray-700 font-Vip  text-lg text-white hover:text-green-400 cursor-pointer flex items-center gap-2 rounded">
                <MdOutlineIosShare /> Share
              </button>
              <button className="py-1 px-4 bg-gray-700 font-Vip  text-lg text-white hover:text-green-400 cursor-pointer flex items-center gap-2 rounded">
                <RiArrowDownBoxLine /> App
              </button>
              <button className="py-1 px-4 bg-gray-700 font-Vip  text-lg text-white hover:text-green-400 cursor-pointer flex items-center gap-2 rounded">
                <MdBookmarkAdded /> Watch Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovies;
