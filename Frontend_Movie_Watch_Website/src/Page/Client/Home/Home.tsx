import Header from "../../../Components/Header/Header";
import TienNghich from "../../../../public/Slider/454973789_1043086304140741_634917588460075684_n.jpg";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

import { MdBookmarkAdded } from "react-icons/md";
import { useState } from "react";
import { InfoPhim } from "../../../Util/typeApi";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Quản lý trạng thái hiển thị

  const content =
    "“Tiên Nghịch” của tác giả Nhĩ Căn, kể về thiếu niên bình phàm Vương Lâm xuất thân nông thôn, mang theo nhiệt huyết, tu luyện nghịch tiên, không chỉ cầu trường sinh, mà còn muốn thoát khỏi thân phận giun dế. Hắn tin rằng đạo do người quyết định, dùng tư chất bình phàm bước vào con đường tu chân, trải qua bao phong ba bão táp, dựa vào trí tuệ sáng suốt, từng bước một bước lên đỉnh cao, dựa vào sức một người, danh chấn Tu chân giới.";

  const toggleContent = () => {
    setIsExpanded(!isExpanded); // Đổi trạng thái giữa thu gọn và mở rộng
  };
  const listPhim: InfoPhim[] = [
    {
      imgMain: TienNghich,
      name: "Tiên Nghịch",
      rank: [
        "Top 1",
        "Top Bảng Xếp Hạng",
        "CTPlay Sản Xuất ",
        "Chỉ Có Trên CTPlay",
      ],
      evaluate: [8.8, 2025, "72/??"],
      kindPhim: ["CN Animation", "Cổ Trang", "Huyền Huyễn", "Tiên Hiệp"], // Có ít thể loại hơn
      description:
        "“Tiên Nghịch” của tác giả Nhĩ Căn, kể về thiếu niên bình phàm Vương Lâm xuất thân nông thôn, mang theo nhiệt huyết, tu luyện nghịch tiên, không chỉ cầu trường sinh, mà còn muốn thoát khỏi thân phận giun dế. Hắn tin rằng đạo do người quyết định, dùng tư chất bình phàm bước vào con đường tu chân, trải qua bao phong ba bão táp, dựa vào trí tuệ sáng suốt, từng bước một bước lên đỉnh cao, dựa vào sức một người, danh chấn Tu chân giới.",
    },
    {
      imgMain: TienNghich,
      name: "Thế Giới Hoàn Mỹ ",
      rank: [
        "Top6",
        "Top Bảng Xếp Hạng",
        "CTPlay Sản Xuất ",
        "Chỉ Có Trên CTPlay",
      ],
      evaluate: [8.2, 2021, "198/??"],
      kindPhim: ["CN Animation", "HHKungFu", "Huyền Huyễn", "Tiên Hiệp"], // Có ít thể loại hơn

      description:
        "Thế Giới Hoàn Mỹ cải biên từ tiểu thuyết cùng tên. Hắn vì tu đạo mà sinh, vì ứng kiếp mà đến. Hắn hoá thân thành vô vàn mưa máu, vẩy rơi năm tháng vạn cổ, trải qua vô số tu luyện của thời không và thử thách của dòng chảy tháng năm. Hắn hoá thành vạn cổ, hoá thành tự tại. Xem nam chính Thạch Hạo làm thế nào đạt đến huy hoàng đỉnh cao một đời, tạo ra truyền thuyết vô tận.",
    },
  ];

  return (
    <div className="h-auto">
      {/*  */}
      <div
        className="h-[951px] bg-red-200"
        style={{
          backgroundImage: `url(${TienNghich})`, // Đúng cú pháp
          backgroundSize: "cover", // Để hình ảnh bao phủ toàn bộ
          backgroundPosition: "left", // Căn giữa hình ảnh
        }}
      >
        <Header />
        <div className="relative flex justify-between items-center h-screen px-4 text-white ">
          <div className="bg-gray-500 p-3 rounded-full cursor-pointer">
            <FaChevronLeft />
          </div>
          <div className="bg-gray-500 p-3 rounded-full cursor-pointer">
            <FaChevronRight />
          </div>
          {/* Div chứa chữ sẽ được căn giữa theo chiều ngang và nằm ở dưới cùng */}
          <div className="absolute bottom-1/4 left-24  bg-gray-600 bg-opacity-50 p-4 flex flex-col gap-2 rounded-md w-[40%]">
            {/* <div className="   w-full text-center "> */}
            <span className="font-Bricolage font-medium text-[45px]   ">
              Tiên Nghịch
            </span>
            {/* </div> */}
            {/* Bang xep hang  */}
            <div className="flex gap-2">
              <span className="bg-green-500 font-semibold px-2 rounded-sm">
                {" "}
                Top 2{" "}
              </span>
              <span className="bg-gray-500  font-semibold px-2 rounded-sm">
                {" "}
                Top Bảng Xếp Hạng{" "}
              </span>
              <span className="bg-green-500 font-semibold px-2 rounded-sm">
                {" "}
                CTPlay Sản Xuất{" "}
              </span>
              <span className="bg-green-500 font-semibold px-2 rounded-sm">
                {" "}
                Chỉ có Trên CTPlay
              </span>
            </div>
            {/* Dánh gia  */}
            <div className="flex gap-2">
              <div className="flex items-center gap-1 text-green-500 font-semibold">
                <IoStar /> <span> 9.9 </span>
              </div>

              <span> 2023 </span>
              <span> NC-17 </span>
              <span> Số tập 72/?? </span>
            </div>
            <div className="flex  gap-2">
              <span className="bg-gray-400 bg-opacity-50 px-1 rounded-sm">
                CN Animation
              </span>
              <span className="bg-gray-400 bg-opacity-50 px-1 rounded-sm">
                Cổ Trang
              </span>
              <span className="bg-gray-400 bg-opacity-50 px-1 rounded-sm">
                Huyền Huyễn
              </span>
              <span className="bg-gray-400 bg-opacity-50 px-1 rounded-sm">
                Tiên Hiệp
              </span>
            </div>
            <div>
              <span>
                {isExpanded ? content : `${content.slice(0, 120)}...`}{" "}
                {/* Hiển thị 30 chữ (~90 ký tự) nếu chưa mở rộng */}
              </span>
              <button
                onClick={toggleContent}
                className="ml-2 text-blue-500 hover:underline"
              >
                {isExpanded ? "Thu gọn" : "Xem thêm"} {/* Nút chuyển đổi */}
              </button>
            </div>
            <div className="flex gap-2 items-center h-14 overflow-hidden">
              <div className="h-12 w-12 bg-green-500 rounded-full flex justify-center items-center text-center text-lg cursor-pointer hover:bg-green-400">
                {" "}
                <FaPlay />{" "}
              </div>
              <div className=" h-12 w-12 bg-gray-300 rounded-full flex justify-center items-center text-center  text-xl text-black cursor-pointer hover:bg-gray-500 hover:text-gray-200">
                {" "}
                <MdBookmarkAdded />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div>Vo chi thanh </div>
    </div>
  );
};

export default Home;
