import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Mousewheel, Navigation } from 'swiper/modules';

export default function SwiperCard() {
    return (
        <div>
            <h2 className="text-[18px] font-semibold">Tranding</h2>
            <div className="flex">
                
            </div>
            <div className="flex gap-[30px] mt-5 overflow-hidden ">
                <div className="relative w-[350px] h-[95px] mb-5">
                    <img src="/card1.png" alt="" className="w-full h-full object-cover rounded-md" />

                    <div className="w-full h-full top-0 pt-5 absolute bg-black bg-opacity-50 text-center text-white rounded-md">
                        <h3 className="text-[20px] font-sans">Cyber Kongz</h3>
                        <p className="text-[15px]">5000.22 ETH </p>
                    </div>
                </div>
                <div className="relative w-[350px] h-[95px] mb-5">
                    <img src="/card2.png" alt="" className="w-full h-full object-cover rounded-md" />

                    <div className="w-full h-full top-0 pt-5 absolute bg-black bg-opacity-50 text-center text-white rounded-md">
                        <h3 className="text-[20px] font-sans">Cyber Kongz</h3>
                        <p className="text-[15px]">5000.22 ETH </p>
                    </div>
                </div>
                <div className="relative w-[350px] h-[95px] mb-5">
                    <img src="/card3.png" alt="" className="w-full h-full object-cover rounded-md" />

                    <div className="w-full h-full top-0 pt-5 absolute bg-black bg-opacity-50 text-center text-white rounded-md">
                        <h3 className="text-[20px] font-sans">Cyber Kongz</h3>
                        <p className="text-[15px]">5000.22 ETH </p>
                    </div>
                </div>
                <div className="relative w-[350px] h-[95px] mb-5">
                    <img src="/card4.png" alt="" className="w-full h-full object-cover rounded-md" />

                    <div className="w-full h-full top-0 pt-5 absolute bg-black bg-opacity-50 text-center text-white rounded-md">
                        <h3 className="text-[20px] font-sans">Cyber Kongz</h3>
                        <p className="text-[15px]">5000.22 ETH </p>
                    </div>
                </div>
            </div>
        </div>
    )
}