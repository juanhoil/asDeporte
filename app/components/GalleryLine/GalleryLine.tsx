"use client"
import React, { Component, useState } from "react";
import ModalGallery from "../ModalGallery/ModalGallery";
// CAROUSEL DATA

interface DataType {
  imgSrc: string;
}

const postData: DataType[] = [
  {
    imgSrc: '/assets/mentor/user1.svg',
  },
  {
    imgSrc: '/assets/mentor/user2.svg',
  },
  {
    imgSrc: '/assets/mentor/user3.svg',
  },
  {
    imgSrc: '/assets/mentor/user4.svg',
  },
  {
    imgSrc: '/assets/mentor/user5.svg',
  },
]
const GalleryLine = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      { 
        isOpen && (
          <ModalGallery closeModal={()=>setIsOpen(false)}></ModalGallery>
        )
      }
      <div className="block md:flex bg-black md:bg-white">
        {/* Lado izquierdo */}
        <div className="md:w-1/4">
          {/* Logo estático */}
          <div className="bg-gray-200 h-20 md:ml-16 flex items-center justify-center md:justify-start">
            <img src={'/assets/logo/Logo3.svg'} alt="Logo" className="hidden md:block" />
            <img src={'/assets/logo/Logo4.svg'} alt="Logo" className="block md:hidden" />
          </div>
        </div>

        {/* Lado derecho */}
        <div className="md:w-3/4 pb-2 bg-black md:bg-white">
          {/* Imágenes */}
          <div className="flex justify-center md:justify-end md:mr-16">
            {postData.map((items, i) => (
              <div key={i}>
                <div className='mt-4 text-center'>
                  <div className='relative'>
                    <img src={items.imgSrc} alt="gaby" onClick={()=>setIsOpen(true)} className="inline-block m-auto ring-2 ring-black md:ring-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryLine;
