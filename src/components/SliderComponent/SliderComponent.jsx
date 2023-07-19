import React from 'react'
import Slider from "react-slick";
export default function SliderComponent({arrimg}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autospeed:1000
      };
  return (
    <div>
        <Slider {...settings}>
        {arrimg.map((img)=>{
        return (
            <img src={img} alt={img} preview={false} width="100%"  height="274px" />
        )
    })}
        </Slider>
    
 </div>
  )
}
