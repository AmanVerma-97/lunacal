'use client';

import Card from "./card";
import GallerySlider from "./gallery";
import Nav from "./nav";
import Rectangle from "../../public/images/Rectangle.png";
import Image from "next/image";
import ImageUpload from "./imageupload";
import Gallery from '../../public/images/Gallery.jpg';
import { useState } from "react";


export default function Home() {
  const [index, setIndex] = useState(0);
  const [isclicked, setIsclicked] = useState(null);

  const images = [
      // Array of image URLs or data
      Gallery,
      Gallery,
      Gallery,
      Gallery,
      Gallery,
      Gallery,
      Gallery,
    ];

   const handleNext = () => {
    // Stops at the end
    setIsclicked('next');
    if (index < images.length - 3) setIndex(index + 1);
    setTimeout(() => {
      setIsclicked(null);
    }, 800);

  };

  const handlePrev = () => {
    // Stops at the start
    setIsclicked('prev');
    if (index > 0) setIndex(index - 1);
    setTimeout(() => {
      setIsclicked(null);
    }, 800);
  };

  return (
    <div className="flex min-h-screen md:items-start md:justify-items-start items-center justify-center bg-zinc-50 font-sans dark:bg-[#28292F] flex-col md:flex-row px-6 py-3">
        <div className="mt-8 text-center  w-5/6 md:w-3/6" id="left">
          
        </div>
        <div className="mt-2 text-center  w-5/6 md:w-3/6 md:max-w-[720px]" id="right">
          <Card>
                <Nav />
                <div className="w-5/6 m-auto left-0 text-gray-400 mt-2 text-md text-left">
                  <p>
                    Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                    <br></br>
                    <br></br>
                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                  </p>
                </div>
                <Image src={Rectangle} alt="Rectangle" className="w-3 h-16 mb-4 absolute top-[30%] right-0"/>
          </Card>

             
          <Card>
              <div className=" flex w-5/6 m-auto flex-row justify-center items-center gap-2 mb-2 ">
                  <div className="flex-1"> 
                    <div className="w-6/12 bg-black rounded-2xl p-3">Gallery</div>
                  </div>
                  <div className="flex-1 flex justify-between items-center "> 
                    <ImageUpload />
                    <button
                        onClick={handlePrev} id="prev"
                        className={`px-3.5 py-3 text-sm hover:bg-black text-gray cursor-pointer rounded-full shadow-[0px_0px_35px_rgba(0,0,0,0.75),-1px_0px_8px_rgba(255,255,255,0.20)]  ${isclicked === 'prev' ? 'bg-linear-to-r from-[#64717e] to-[#344454]' : 'bg-linear-to-r from-[#303439] to-[#161718] hover:from-black hover:to-[#171717]'}`}
                      >
                        &lt;-
                      </button>

                      <button
                        onClick={handleNext} id="next"
                        className={`px-3.5 py-3 text-sm text-gray cursor-pointer rounded-full  shadow-[0px_0px_35px_rgba(0,0,0,0.75),-1px_0px_8px_rgba(255,255,255,0.20)] hover:bg-black ${isclicked === 'next' ? 'bg-linear-to-r from-[#64717e] to-[#344454]' : 'bg-linear-to-r from-[#303439] to-[#161718] hover:from-black hover:to-[#171717]'}`}
                      >
                        -&gt;
                      </button>
                  </div>
              </div>
              {/* <GallerySlider /> */}
              <div className=" h-[185px] flex w-5/6 overflow-hidden mt-4 m-auto items-center justify-center  bg-transparent">
         
                  <div className="flex justify-between items-center transition-transform duration-700 ease-in-out gap-[3.5%]"
                      style={{
                        transform: `translateX(-${index * (33)}%)`, // Move by 1 position (image + gap)
                        width: `${(images.length * 30) + (images.length - 1) * 5}%`, // total container width with gaps
                      }}  >
                  
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src.src}
                      alt={`img-${i}`}
                      className="min-w-[30%] h-[149px] rounded-2xl grayscale hover:grayscale-0 hover:translate-x-2 hover:-translate-y-2 hover:scale-110 hover:-rotate-2 hover:shadow-[4px_4px_30px_rgba(0,0,0,0.8)] transition-transform duration-400">

                    </img>
                  ))}
              </div>
          </div>
          </Card>
        </div>
      
    </div>
  );
}
