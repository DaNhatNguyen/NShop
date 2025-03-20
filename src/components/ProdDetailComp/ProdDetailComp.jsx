import { Col, Image, Row } from 'antd'
import React from 'react'
import Iphone16Image from '../../assets/images/iphone16.png'
import { WrapAddToCardBtn, WrapBuyBtn, WrapColImageSmall, WrapContent, WrapContentShipInf, WrapContentshipInf, WrapDiscPrice, WrapImageProd, WrapImageSmall, WrapLabel, WrapLocaInf, WrapNameLocaInf, WrapNameProd, WrapNameRateProd, WrapPriceProd, WrapProdPrice, WrapQuanButton, WrapQuanInput, WrapQuantityInput, WrapShipInf } from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';

const ProdDetailComp = () => {
  return (
    <Row style={{paddingTop: '16px', flexWrap: 'nowrap', gap: '16px'}}>
        <Col style={{}} span={10}>
            <WrapContent style={{padding: '16px', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden'}}>
                <WrapImageProd>
                    <Image src={Iphone16Image} alt='image product' preview={false}/>
                </WrapImageProd>
                <Row style={{display: 'flex', justifyContent: 'space-between', paddingTop: '12px', flex: 'none'}}>
                    <WrapColImageSmall span={4} >
                        <WrapImageProd>
                            <Image style={{width: '64px', height: '64px'}} src={Iphone16Image} alt='image small' preview={false}/>
                        </WrapImageProd>
                    </WrapColImageSmall>
                    <WrapColImageSmall span={4} >
                        <WrapImageProd>
                            <Image style={{width: '64px', height: '64px'}} src={Iphone16Image} alt='image small' preview={false}/>
                        </WrapImageProd>
                    </WrapColImageSmall>
                    <WrapColImageSmall span={4} >
                        <WrapImageProd>
                            <Image style={{width: '64px', height: '64px'}} src={Iphone16Image} alt='image small' preview={false}/>
                        </WrapImageProd>
                    </WrapColImageSmall>
                    <WrapColImageSmall span={4} >
                        <WrapImageProd>
                            <Image style={{width: '64px', height: '64px'}} src={Iphone16Image} alt='image small' preview={false}/>
                        </WrapImageProd>
                    </WrapColImageSmall>
                    <WrapColImageSmall span={4} >
                        <WrapImageProd>
                            <Image style={{width: '64px', height: '64px'}} src={Iphone16Image} alt='image small' preview={false}/>
                        </WrapImageProd>
                    </WrapColImageSmall>
                    <WrapColImageSmall span={4} >
                        <WrapImageProd>
                            <Image style={{width: '64px', height: '64px'}} src={Iphone16Image} alt='image small' preview={false}/>
                        </WrapImageProd>
                    </WrapColImageSmall>
                </Row>
            </WrapContent>
        </Col>
        <Col span={14}>
            <WrapContent>
                <WrapNameRateProd>
                    <div></div>
                    <WrapNameProd>Apple iPhone 16</WrapNameProd>
                    <div style={{display: 'flex'}}>
                        <div>
                            <StarFilled style={{color: 'rgb(255, 196, 0)'}}/>
                            <StarFilled style={{color: 'rgb(255, 196, 0)'}}/>
                            <StarFilled style={{color: 'rgb(255, 196, 0)'}}/>
                            <StarFilled style={{color: 'rgb(255, 196, 0)'}}/>
                            <StarFilled style={{color: 'rgb(255, 196, 0)'}}/>
                        </div>
                        <div style={{margin: '0px 8px'}}>|</div>
                        <div>Đã bán 227</div>
                    </div>
                </WrapNameRateProd>
                <WrapProdPrice>
                    <WrapPriceProd style={{color: 'rgb(255, 66, 78)'}}>18.990.000đ</WrapPriceProd>
                    <WrapDiscPrice>-17%</WrapDiscPrice>
                </WrapProdPrice>
                <WrapContentShipInf>
                    <WrapLocaInf>
                        <WrapNameLocaInf>Giao đến Q. Hoàng Mai, P. Giáp Bát, Hà Nội</WrapNameLocaInf>
                        <span style={{color: 'rgb(10, 104, 255)'}}>Đổi</span>
                        <div></div>
                    </WrapLocaInf>
                </WrapContentShipInf>
                <WrapQuantityInput>
                    <WrapLabel>Số lượng</WrapLabel>
                    <div style={{display: 'flex', }}>
                        <WrapQuanButton style={{padding: '0px 10px'}}>
                            <MinusOutlined />
                        </WrapQuanButton>
                            <WrapQuanInput type="text" value={2}  style={{width: '40px', margin: '0px 4px',}}/>
                        <WrapQuanButton style={{padding: '0px 10px'}}>
                            <PlusOutlined />
                        </WrapQuanButton>
                    </div>
                </WrapQuantityInput>
                <div style={{display: 'flex', width: '400px', height: '40px', marginTop: '12px'}}>
                    <WrapBuyBtn>Mua ngay</WrapBuyBtn>
                    <WrapAddToCardBtn>Thêm vào giỏ</WrapAddToCardBtn>
                </div>
            </WrapContent>
        </Col>
    </Row>
  )
}

export default ProdDetailComp
