import { MdOutlineStar } from "react-icons/md";
import anhbia from "../../../../public/content/anhbiacontent.jpg";
import { FaPlay } from "react-icons/fa";
import { MdBookmarkAdded } from "react-icons/md";

const Content = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="h-auto ">
      <ul className="flex flex-wrap gap-4 pt-10 pb-5">
        <li className="py-2 px-3 bg-gray-500 font-Bricolage font-medium text-white hover:text-green-400 cursor-pointer">
          Tất cả phim{" "}
        </li>
        <li className="py-2 px-3 bg-gray-500 font-Bricolage font-medium text-white hover:text-green-400 cursor-pointer">
          Trung Quốc{" "}
        </li>
        <li className="py-2 px-3 bg-gray-500 font-Bricolage font-medium text-white hover:text-green-400 cursor-pointer">
          Hàn Quốc{" "}
        </li>
        <li className="py-2 px-3 bg-gray-500 font-Bricolage font-medium text-white hover:text-green-400 cursor-pointer">
          Nhật Bản{" "}
        </li>
        <li className="py-2 px-3 bg-gray-500 font-Bricolage font-medium text-white hover:text-green-400 cursor-pointer">
          Thái Lan{" "}
        </li>
        <li className="py-2 px-3 bg-gray-500 font-Bricolage font-medium text-white hover:text-green-400 cursor-pointer">
          Mỹ{" "}
        </li>
        <li className="py-2 px-3 bg-gray-500 font-Bricolage font-medium text-white hover:text-green-400 cursor-pointer">
          Đài Loan
        </li>
        <li className="py-2 px-3 bg-gray-500 font-Bricolage font-medium text-white hover:text-green-400 cursor-pointer">
          Hồng Kông{" "}
        </li>
        <li className="py-2 px-3 bg-gray-500 font-Bricolage font-medium text-white hover:text-green-400 cursor-pointer">
          Ấn Độ{" "}
        </li>
        <li className="py-2 px-3 bg-gray-500 font-Bricolage font-medium text-white hover:text-green-400 cursor-pointer">
          Anh
        </li>
        <li className="py-2 px-3 bg-gray-500 font-Bricolage font-medium text-white hover:text-green-400 cursor-pointer">
          Pháp
        </li>
        <li className="py-2 px-3 bg-gray-500 font-Bricolage font-medium text-white hover:text-green-400 cursor-pointer">
          Việt nam
        </li>
        <li className="py-2 px-3 bg-gray-500 font-Bricolage font-medium text-white hover:text-green-400 cursor-pointer">
          .....
        </li>
      </ul>

      <div className="flex justify-between">
        {" "}
        <span className=" font-Bricolage font-semibold text-[25px] text-white  ">
          {" "}
          Phim Đề Cử
        </span>
        <span className="text-white hover:text-green-400 cursor-pointer">
          Xem tất cả
        </span>
      </div>
      <div className="flex flex-wrap justify-between  mt-5  ">
        {arr.map(() => (
          <div className="relative group w-[calc(100%/6-12px)] overflow-visible cursor-pointer mb-10">
            {/* Thumbnail */}
            <div className="h-[281px] rounded-md relative">
              <div className="absolute bg-green-400 right-0 px-3 overflow-hidden rounded">
                <span className="font-Vip text-white">Free</span>
              </div>
              <img src={anhbia} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Tên phim */}
            <span className="text-white group-hover:text-green-400">
              Tiên Nghịch
            </span>

            {/* Nội dung hiển thị khi hover */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-5  bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 shadow-lg rounded-md">
              {/* Phim 1  */}
              <div className=" w-[285px] h-[350px] flex flex-col  overflow-hidden rounded group cursor-pointer ">
                {/* img */}
                <div className="  flex-[2] rounded-md relative overflow-hidden">
                  <div className="absolute bg-green-400 right-0 px-3  rounded">
                    <span className="font-Vip text-white">Free</span>
                  </div>
                  <img
                    src={anhbia}
                    alt=""
                    className="w-full h-full object-cover "
                  />
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
                      <MdOutlineStar />{" "}
                      <span className="text-green-400">9.4</span>
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
                      “Tiên Nghịch” của tác giả Nhĩ Căn, kể về thiếu niên bình
                      phàm Vương Lâm xuất thân nông thôn, mang theo nhiệt huyết,
                      tu luyện nghịch tiên, không chỉ cầu trường sinh, mà còn
                      muốn thoát khỏi thân phận giun dế. Hắn tin rằng đạo do
                      người quyết định, dùng tư chất bình phàm bước vào con
                      đường tu chân, trải qua bao phong ba bão táp, dựa vào trí
                      tuệ sáng suốt, từng bước một bước lên đỉnh cao, dựa vào
                      sức một người, danh chấn Tu chân giới.{" "}
                    </span>
                  </div>
                  <div className="">
                    <a
                      href=""
                      className="text-green-400 text-sm flex justify-end"
                    >
                      more info {">"}{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
