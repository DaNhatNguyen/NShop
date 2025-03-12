import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WraperButtonMore, WraperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'
import CardComponent from '../../components/CardComponent/CardComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'

const NextArow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const PrevArow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const HomePage = () => {
  const arr = ['TV', 'Tủ Lạnh', 'Máy Giặt']
  return (
    <div style={{ padding: '0 120px', backgroundColor: 'rgb(245 245 250)' }}>
      <WraperTypeProduct>
        {arr.map((item) => {
          return (
            <TypeProduct name={item} key={item} />
          )
        })}
      </WraperTypeProduct>
      <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
        <SliderComponent arrImage={[image1, image2, image3]} />
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />

        </div>
        <div style={{display: 'flex', justifyContent: 'center', gap: '30px'}}>
          <WraperButtonMore
            textButton='Xem Thêm'
            styleButton={{
              width: '240px',
              height: '40px',
              background: 'transparent',
              marginTop: '12px',
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid rgb(10, 104, 255)',
              color: 'rgb(10, 104, 255)',
              fontSize: '16px',
              lineHeight: '150%',
              textAlign: 'center'

            }} />
        </div>
      </div>

    </div>
  )
}

export default HomePage
