import { Card } from 'antd'
import React from 'react'
import { WraperBrandText, WraperDiscoutText, WraperNameProdText, WraperPriceText, WraperReviewText } from './style'
import { StarFilled } from '@ant-design/icons';
import ipad from '../../assets/images/ipad.png'

const CardComponent = () => {
  return (
    <Card
        hoverable
        bodyStyle={{padding: '12px'}}
        style={{ width: 236 }}
        cover={<img alt="example" src={ipad} width={236} height={236}/>}

    >
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <WraperPriceText>
                    19.000.000đ
                </WraperPriceText>
                <WraperDiscoutText>
                    -1%
                </WraperDiscoutText>
            </div>
            <WraperBrandText>
                APPLE
            </WraperBrandText>
            <WraperNameProdText>
                Apple iPad mini 7 (A17 Pro) Wi-Fi 2024
            </WraperNameProdText>
            <WraperReviewText>
                <span>
                    <span>4.96 </span><StarFilled style={{fontSize: '12px', color: 'rgb(255, 196, 0)'}}/>
                </span>
                <span> | Đã bán 200+</span>
            </WraperReviewText>
        </div>
    </Card>
  )
}

export default CardComponent
