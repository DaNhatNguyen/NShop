import { Image } from 'antd';
import React from 'react'
import { WraperSlider } from './style';


const SliderComponent = ({arrImage}) => {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    };
  return (
    <WraperSlider {...settings}>
        {arrImage.map((image) => {
            return(
                <Image src={image} preview={false} width="100%" height={'250px'}/>
            )
        })}
    </WraperSlider>
  )
}

export default SliderComponent
