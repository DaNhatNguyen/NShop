import React from 'react'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import { WrapContent, WrapProdCat } from './style'

const TypeProductPage = () => {
    const onChange = () => {

    }
  return (
    <div style={{padding: '0 120px', backgroundColor: 'rgb(245 245 250)'}}>
        <WrapContent style={{display: 'flex', gap: '12px', flexWrap: 'nowrap'}}>
            <WrapProdCat span={4}>
                <NavbarComponent />
            </WrapProdCat>
            <Col span={20} style={{}}>
                <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '16px'}}>
                    <Pagination onChange={onChange} total={100} />
                </div>
            </Col>
        </WrapContent>
    </div>
  )
}

export default TypeProductPage
