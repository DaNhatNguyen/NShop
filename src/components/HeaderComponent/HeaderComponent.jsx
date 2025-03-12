import React from 'react'
import { Col } from 'antd';
import { WraperHeader, WraperTextHeader, WraperHeaderAccount, WraperTextHeaderSmall } from './style'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons'

const HeaderComponent = () => {
  return (
    <div>
      <WraperHeader  style={{padding: '10px 120px'}}>
        <Col span={6} style={{ textAlign: 'left' }}>
          <a href="#">
            <WraperTextHeader>
              NShop
            </WraperTextHeader>
          </a>
        </Col>
        <Col span={12}>
            <ButtonInputSearch
              size='large'
              placeholder='Nhập để tìm kiếm'
              textButton='Tìm kiếm'
              borderRadiusButtonInput='0px'
              borderButtonInput='none'
              backgroundColorButton='rgb(13, 92, 182)'
              colorButton='#fff'
            />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <WraperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px'}}/>
              <div>
                <WraperTextHeaderSmall>Đăng Nhập/Đăng ký</WraperTextHeaderSmall>
                <div>
                  <WraperTextHeaderSmall>Tài Khoản</WraperTextHeaderSmall>
                  <CaretDownOutlined />
                </div>
              </div>
          </WraperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
            <WraperTextHeaderSmall>Giỏ Hàng</WraperTextHeaderSmall>
          </div>
        </Col>
      </WraperHeader>
    </div>
  )
}

export default HeaderComponent
