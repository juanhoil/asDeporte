"use client"
import React, { Component, useState } from "react";
import ImageGallery from 'react-image-gallery';

interface ModalGalleryProps {
  closeModal: () => void;
}
const images = [
  {
    original: '/assets/mentor/user6.svg',
    thumbnail: '/assets/mentor/user6.svg',
    customComponent: <div>Contenido HTML personalizado 1</div>,
  },
  {
    original: '/assets/mentor/user2.svg',
    thumbnail: '/assets/mentor/user2.svg',
  },
  {
    original: '/assets/mentor/user3.svg',
    thumbnail: '/assets/mentor/user3.svg',
  },
  {
    original: '/assets/mentor/user4.svg',
    thumbnail: '/assets/mentor/user4.svg',
  },
  {
    original: '/assets/mentor/user5.svg',
    thumbnail: '/assets/mentor/user5.svg',
  }
];

const ModalGallery = ({ closeModal }: ModalGalleryProps) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (currentIndex:any) => {
    setCurrentSlide(currentIndex)
    console.log(currentIndex);
  };
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex h-full items-center justify-center text-center sm:items-center sm:p-0">
          <div className="relative  w-80 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            
            <div className="bg-black">
              <button type="button" onClick={closeModal} className="absolute z-10 top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM7.41668 7.41667C7.6468 7.18655 8.0199 7.18655 8.25002 7.41667L12 11.1667L15.7501 7.41667C15.9802 7.18655 16.3533 7.18655 16.5834 7.41667C16.8135 7.64679 16.8135 8.01988 16.5834 8.25L12.8334 12L16.5834 15.75C16.8135 15.9801 16.8135 16.3532 16.5834 16.5833C16.3532 16.8135 15.9801 16.8135 15.75 16.5833L12 12.8334L8.25006 16.5833C8.01994 16.8135 7.64684 16.8135 7.41672 16.5833C7.18661 16.3532 7.18661 15.9801 7.41672 15.75L11.1667 12L7.41668 8.25C7.18657 8.01988 7.18657 7.64679 7.41668 7.41667Z" fill="white"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>

              
              <div className="w-full m-auto">
                { currentSlide === 0 && (
                    <span className="absolute bg-whithe z-1 h-48 md:h-80 w-full flex justify-center items-center">
                      <svg className="block md:hidden" width="78" height="76" viewBox="0 0 78 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M65 38C65 44.7188 62.2607 51.1624 57.3848 55.9134C52.5088 60.6643 45.8956 63.3333 39 63.3333C32.1044 63.3333 25.4912 60.6643 20.6152 55.9134C15.7393 51.1624 13 44.7188 13 38C13 31.2812 15.7393 24.8375 20.6152 20.0866C25.4912 15.3357 32.1044 12.6667 39 12.6667C45.8956 12.6667 52.5088 15.3357 57.3848 20.0866C62.2607 24.8375 65 31.2812 65 38V38ZM35.0675 28.7945C34.8245 28.6259 34.5386 28.5258 34.2411 28.505C33.9436 28.4842 33.6459 28.5437 33.3808 28.6768C33.1156 28.8099 32.8932 29.0115 32.7378 29.2596C32.5825 29.5077 32.5002 29.7927 32.5 30.0833V45.9167C32.5002 46.2073 32.5825 46.4923 32.7378 46.7404C32.8932 46.9885 33.1156 47.1901 33.3808 47.3232C33.6459 47.4563 33.9436 47.5157 34.2411 47.495C34.5386 47.4742 34.8245 47.3741 35.0675 47.2055L46.4425 39.2888C46.6532 39.1424 46.8249 38.949 46.9433 38.7248C47.0618 38.5006 47.1236 38.2521 47.1236 38C47.1236 37.7478 47.0618 37.4993 46.9433 37.2752C46.8249 37.051 46.6532 36.8576 46.4425 36.7112L35.0675 28.7945V28.7945Z" fill="#FFFF01"/>
                      </svg>
                      <svg className="hidden md:block" width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M56.6667 34C56.6667 40.0116 54.2786 45.7769 50.0278 50.0277C45.7769 54.2786 40.0116 56.6666 34 56.6666C27.9884 56.6666 22.2231 54.2786 17.9722 50.0277C13.7214 45.7769 11.3333 40.0116 11.3333 34C11.3333 27.9884 13.7214 22.2231 17.9722 17.9722C22.2231 13.7214 27.9884 11.3333 34 11.3333C40.0116 11.3333 45.7769 13.7214 50.0278 17.9722C54.2786 22.2231 56.6667 27.9884 56.6667 34V34ZM30.5717 25.7635C30.3598 25.6127 30.1106 25.5231 29.8512 25.5045C29.5918 25.4859 29.3324 25.5391 29.1012 25.6582C28.87 25.7773 28.6761 25.9577 28.5407 26.1797C28.4052 26.4016 28.3335 26.6566 28.3333 26.9166V41.0833C28.3335 41.3434 28.4052 41.5983 28.5407 41.8203C28.6761 42.0423 28.87 42.2227 29.1012 42.3418C29.3324 42.4609 29.5918 42.5141 29.8512 42.4955C30.1106 42.4769 30.3598 42.3873 30.5717 42.2365L40.4883 35.1531C40.672 35.0221 40.8217 34.8491 40.9249 34.6485C41.0282 34.4479 41.0821 34.2256 41.0821 34C41.0821 33.7744 41.0282 33.552 40.9249 33.3515C40.8217 33.1509 40.672 32.9779 40.4883 32.8468L30.5717 25.7635V25.7635Z" fill="white"/>
                      </svg>

                    </span>
                  )
                }
              <ImageGallery
                onSlide={handleSlideChange}
                items={images} 
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={false}
                />
              </div>

              {/*<div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                  </div>
                </div>
              </div>*/}
            </div>

          </div>
        </div>
      </div>
    </div>
    
  );
};
export default ModalGallery;