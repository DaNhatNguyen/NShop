import React from 'react'
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
  const {size, placeholder, textButton, borderButtonInput, borderRadiusButtonInput, backgroundColorInput, backgroundColorButton, colorButton } = props
  return (
    <div style={{display: 'flex'}}>
      <InputComponent 
        size={size} 
        placeholder={placeholder} 
        style={{
          background: backgroundColorInput,
          border: borderButtonInput,
          borderRadius: borderRadiusButtonInput
        }} 
      />
      <ButtonComponent 
        size={size} 
        icon={<SearchOutlined />}
        textButton={textButton} 
        style={{
          background: backgroundColorButton,
          border: borderButtonInput,
          borderRadius: borderRadiusButtonInput,
          color: colorButton
          }}/>
    </div>
  )
}

export default ButtonInputSearch
