import React from 'react'
import { WraperContentText, WraperLabelText } from './style'
import { Checkbox, Rate } from 'antd'

const NavbarComponent = () => {
    const onChange = () => {

    }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return (options.map((option) => {
                    return <WraperContentText>{option}</WraperContentText>
                }))
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ display: 'flex', flexDirection: 'column' }}>
                        {options.map((option) => {
                            return (
                                <Checkbox value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )

            case 'star':
                return options.map((option) => {
                    return (
                        <Rate allowHalf defaultValue={option} />
                    )
                }
                )

            case 'price':
                return options.map((option) => {
                    return (
                        <div style={{borderRadius: '4px', backgroundColor: '#fff', width: 'fit-content'}}>{option}</div>
                    )
                }
                )
            default:
                return {

                }
        }
    }
    return (
        <div>
            <WraperLabelText>Danh Mục</WraperLabelText>
            <WraperContentText>
                {renderContent('text', ['Nhà sách tiki', 'Điện thoai-Máy tính bảng'])}
            </WraperContentText>
            {renderContent('checkbox', [
                { value: 'a', label: 'A' },
                { value: 'b', label: 'B' },
            ],
            )
            }
            {renderContent('star', [3, 4, 5])}
            <WraperContentText>
                {renderContent('price', ['Dưới 15000', 'Trên 20000'])}
            </WraperContentText>
        </div>
    )
}

export default NavbarComponent
