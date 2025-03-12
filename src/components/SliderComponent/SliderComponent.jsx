import { Image } from 'antd';
import React from 'react'
import Slider from 'react-slick';

const NextArow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", alignContent: "center", width: "20px", height: "33px", right: "0" }}
      onClick={onClick}
    />
  );
}

const PrevArow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", alignContent: "center", width: "20px", height: "33px", left: "0"}}
      onClick={onClick}
    />
  );
}


const SliderComponent = ({arrImage}) => {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArow />,
    prevArrow: <PrevArow />,
    };
  return (
    <Slider {...settings}>
        {arrImage.map((image) => {
            return(
                <Image src={image} preview={false} width="100%" height={'186px'}/>
            )
        })}
    </Slider>
  )
}

export default SliderComponent
