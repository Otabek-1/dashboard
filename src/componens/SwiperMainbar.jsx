import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@material-tailwind/react';

const images = [
    {
        id: 1,
        img: '/Main.png'
    },
    {
        id: 2,
        img: 'https://kriptoparahaber.com/wp-content/uploads/2024/07/massive-bitcoin-and-ethereum-options-expiry-sparks-market-v0-H1nCdpv_VCEyNrEIYBLqy0l9hTO3b3tE7TcDos9GbEw-1200x675-1-975x375.jpg'
    }
]

export default function SwiperMainbar() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
        >
            {images.map(item => {
                return (
                    <>
                        <SwiperSlide>
                            <div className="reletive">
                                <img src="/Main.png" alt="" className="w-full z-0" />
                                <div className="p-10 font-semibold absolute x-20 top-0 w-full h-full rounded-md text-white">
                                    <h1 className='text-3xl leading-[50px]'>
                                        Must expected secret NFT <br /> <br /> assortment is live...
                                    </h1>
                                    <div className="mt-3">
                                        <div className="flex gap-6 text-xl">
                                            <h4 className="">
                                                25k <span className="font-light">Artwork</span>
                                            </h4>
                                            <h4 className="">
                                                75k <span className="font-light">Auction</span>
                                            </h4>
                                            <h4 className="">
                                                16k <span className="font-light">Artist</span>
                                            </h4>
                                        </div>
                                        <Button className="mt-5 t-lg font-extralight bg-[#D90368] w-[165px] h-[40px]">Explore Now</Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="reletive">
                                <img src="https://kriptoparahaber.com/wp-content/uploads/2024/07/massive-bitcoin-and-ethereum-options-expiry-sparks-market-v0-H1nCdpv_VCEyNrEIYBLqy0l9hTO3b3tE7TcDos9GbEw-1200x675-1-975x375.jpg" alt="" className="max-h-[350px] w-full z-0" />
                                <div className="p-10 font-semibold absolute top-0 x-20 w-full h-full rounded-md text-white">
                                    <h1 className='text-3xl leading-[50px]'>
                                        Must expected secret NFT <br /> <br /> assortment is live...
                                    </h1>
                                    <div className="mt-3">
                                        <div className="flex gap-6 text-xl">
                                            <h4 className="">
                                                25k <span className="font-light">Artwork</span>
                                            </h4>
                                            <h4 className="">
                                                75k <span className="font-light">Auction</span>

                                            </h4>
                                            <h4 className="">
                                                16k <span className="font-light">Artist</span>
                                            </h4>
                                        </div>
                                        <Button className="mt-5 t-lg font-extralight bg-[#D90368] w-[165px] h-[40px]">Explore Now</Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="reletive">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4M196naJILxrknzrTD55dJtB9C0Ewp-ztOg&s" alt="" className="max-h-[350px] w-full z-0" />
                                <div className="p-10 font-semibold absolute top-0 x-20 w-full h-full rounded-md text-white">
                                    <h1 className='text-3xl leading-[50px]'>
                                        Must expected secret NFT <br /> <br /> assortment is live...
                                    </h1>
                                    <div className="mt-3">
                                        <div className="flex gap-6 text-xl">
                                            <h4 className="">
                                                25k <span className="font-light">Artwork</span>
                                            </h4>
                                            <h4 className="">
                                                75k <span className="font-light">Auction</span>
                                            </h4>
                                            <h4 className="">
                                                16k <span className="font-light">Artist</span>
                                            </h4>
                                        </div>
                                        <Button className="mt-5 t-lg font-extralight bg-[#D90368] w-[165px] h-[40px]">Explore Now</Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </>
                )
            })}
            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper>
    )
}