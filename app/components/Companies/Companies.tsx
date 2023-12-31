"use client"
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
  imgSrc: string;
}

const data: Data[] = [
  {
    imgSrc: "/assets/slickCompany/epura.svg"
  },
  {
    imgSrc: "/assets/slickCompany/aeromexico.svg"
  },
  {
    imgSrc: "/assets/slickCompany/santander.svg"
  },
  {
    imgSrc: "/assets/slickCompany/g.svg"
  },
  {
    imgSrc: "/assets/slickCompany/gmc.svg"
  },
  {
    imgSrc: "/assets/slickCompany/w.svg"
  },
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
          },
          {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
          },
          {
            breakpoint: 500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
          }
        ]
      };

      return (
        <div className='text-center' >
          <div className="mx-auto max-w-2xl pb-6 lg:max-w-7xl md:px-8">
            <h2 className="text-xs my-10 text-lightgrey uppercase">socios comerciales</h2>
            <div>
              <Slider {...settings}>
                {data.map((item, i) =>
                  <div key={i} className="flex justify-center items-center h-20 border-solid border-2 border-grey500">
                    <div className="text-white text-center z-1">
                      <img src={item.imgSrc} alt={item.imgSrc} className="mt-6 mx-auto"/>
                    </div>
                  </div>
                )}
              </Slider>
            </div>
          </div>
        </div>
      )
    }
}
