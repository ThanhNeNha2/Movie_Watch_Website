import React from "react";
import Header from "../../../Components/Client/Header/Header";
import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { FiShare } from "react-icons/fi";
import { MdBookmarkAdded, MdLiveTv } from "react-icons/md";
import { BiDownload } from "react-icons/bi";
import { FaListUl } from "react-icons/fa6";
import { FaPhotoVideo } from "react-icons/fa";
const Play = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoUrl =
    "https://vip.opstream12.com/20240924/23748_d8bc5c8d/index.m3u8";

  useEffect(() => {
    if (!videoRef.current) return; // Kiểm tra nếu videoRef chưa gán giá trị

    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoUrl;
    }
  }, []);
  return (
    <div style={{ background: "rgb(17, 19, 25)" }}>
      <Header />
      <div className="px-[150px] mt-5">
        <div className="flex  h-[553px]">
          {/* TRAI  */}
          <div className="flex-[4]  flex flex-col  ">
            <div className="bg-black h-[503px] overflow-hidden">
              {/* <video ref={videoRef} controls className="w-full h-full"></video> */}
              <video
                src="https://cdn.pixabay.com/video/2021/08/10/84574-586228759_large.mp4"
                controls
              ></video>
            </div>
            <div
              className="h-[50px] text-white px-10 flex justify-between"
              style={{ background: "rgb(26, 28, 34)" }}
            >
              {/* trai */}
              <div className="flex items-center gap-7">
                <div className="flex items-center gap-2 text-base cursor-pointer hover:text-green-400">
                  <div className="text-xl">
                    {" "}
                    <MdBookmarkAdded />
                  </div>
                  <span>Sưu Tập</span>
                </div>
                <div className="flex items-center gap-2 text-base cursor-pointer hover:text-green-400">
                  <div className="text-xl">
                    <FiShare />
                  </div>

                  <span>Chia sẻ</span>
                </div>
              </div>

              {/* phai */}
              <div className="flex items-center gap-7">
                <div className="flex items-center gap-2 text-base cursor-pointer hover:text-green-400">
                  <div className="text-xl">
                    <MdLiveTv />
                  </div>

                  <span>Xem trên tivi</span>
                </div>
                <div className="flex items-center gap-2 text-base cursor-pointer hover:text-green-400">
                  {" "}
                  <div className="text-xl">
                    <BiDownload />{" "}
                  </div>
                  <span>Chiếu ở thiết bị đầu cuối khách hàng </span>
                </div>
              </div>
            </div>
          </div>
          {/* PHAI */}
          <div
            className="flex-[1.2] flex flex-col px-4 py-5 gap-3 text-white"
            style={{ background: "rgb(26, 28, 34)" }}
          >
            {/*  */}
            <div>
              <span className="font-Bricolage font-semibold text-2xl ">
                Tiên Nghịch
              </span>
            </div>
            {/*  */}
            <div className="flex justify-between">
              <button className="flex items-center justify-center py-2 rounded-l gap-2  flex-1 bg-gray-700 px-2 hover:text-green-400">
                {" "}
                <FaPhotoVideo /> Chọn tập
              </button>
              <button className="flex items-center justify-center py-2 rou gap-2 rounded-r flex-1 bg-gray-800 px-2 hover:text-green-400 ">
                {" "}
                Nội dung đặc sắc
              </button>
            </div>
            {/*  */}
            <div className="flex justify-between items-center text-xl ">
              <span className="text-sm hover:text-white">Chọn tập 1-36 </span>
              <div className="hover:text-green-400 cursor-pointer">
                <FaListUl />
              </div>
            </div>
            {/*  */}
            <div className="  overflow-y-auto   border-gray-700   custom-scrollbar ">
              <ul className="flex flex-wrap gap-3 justify-center pb-5 mb-7">
                {Array.from({ length: 45 }, (_, index) => (
                  <li
                    key={index}
                    className="w-10 h-10 flex justify-center items-center text-lg bg-gray-600 font-Bricolage font-medium text-white hover:text-green-400 cursor-pointer"
                  >
                    {index + 1}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
