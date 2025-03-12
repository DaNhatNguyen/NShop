import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({size, type, styleButton, textButton, ...rest}) => {
  return (
    <Button 
      size={size} 
      type={type}
      // icon={<SearchOutlined />} 
      style={styleButton}
      {...rest}
      >
      {textButton}
    </Button>
  )
}

export default ButtonComponent
