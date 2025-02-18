import React from "react";
import anhbia from "../../../../public/content/anhbiacontent.jpg";
import { MdOutlineStar } from "react-icons/md";

const NewMovieUpdated = () => {
  return (
    <div className="h-auto ">
      <span className="to-white font-Bricolage font-semibold text-[25px] text-white  ">
        {" "}
        Phim Lẻ Mới Cập Nhật
      </span>
      <div className="flex flex-wrap  gap-[15px]  mt-5  ">
        {/* Phim 1  */}
        <div className=" w-[calc(100%/5)] h-[350px]  flex flex-col  overflow-hidden  group cursor-pointer ">
          {/* img */}
          <div className="  flex-[2] rounded-md relative overflow-hidden">
            <div className="absolute bg-green-400 right-0 px-3  rounded">
              <span className="font-Vip text-white">Free</span>
            </div>
            <img src={anhbia} alt="" className="w-full h-full object-cover " />
          </div>

          {/* Nội dung */}
          <div className="flex-[3] bg-gray-600 px-3 py-2 flex flex-col justify-between gap-1">
            <div className="flex  ">
              <span className="font-Vip text-white text-lg hover:text-green-400 w-full">
                Tiên Nghịch
              </span>
            </div>
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
                <li className="px-2 bg-gray-500 text-white py-[3px] text-xs">
                  Cổ trang{" "}
                </li>
                <li className="px-2 bg-gray-500 text-white py-[3px] text-xs">
                  Tiên Hiệp
                </li>
                <li className="px-2 bg-gray-500 text-white py-[3px] text-xs">
                  Tu Tiên
                </li>
              </ul>
            </div>
            <div className="">
              <span className="text-white text-xs  overflow-hidden line-clamp-6">
                “Tiên Nghịch” của tác giả Nhĩ Căn, kể về thiếu niên bình phàm
                Vương Lâm xuất thân nông thôn, mang theo nhiệt huyết, tu luyện
                nghịch tiên, không chỉ cầu trường sinh, mà còn muốn thoát khỏi
                thân phận giun dế. Hắn tin rằng đạo do người quyết định, dùng tư
                chất bình phàm bước vào con đường tu chân, trải qua bao phong ba
                bão táp, dựa vào trí tuệ sáng suốt, từng bước một bước lên đỉnh
                cao, dựa vào sức một người, danh chấn Tu chân giới.{" "}
              </span>
            </div>
            <div className="">
              <a href="" className="text-green-400 text-sm flex justify-end">
                more info {">"}{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMovieUpdated;
