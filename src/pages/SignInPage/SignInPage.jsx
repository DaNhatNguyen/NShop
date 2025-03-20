import React from 'react'
import InputComponent from '../../components/InputComponent/InputComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

const SignInPage = () => {
  return (
    <div>
      <div>
        <h4>Xin Chào,</h4>
        <p>Đăng nhập hoặc tạo tài khoản</p>
        <InputComponent />
        <InputComponent />
        <ButtonComponent 
          size={40}
          styleButton={{
            margin: '30px 0px 10px',
            outline: 'none',
            borderRadius: '4px',
            background: 'rgb(255, 66, 78)',
            padding: '13px 0px',
            width: '100%',
            color: 'rgb(255, 255, 255)',
            border: 'none',
            fontSize: '20px,',
            cursor: 'pointer',
          }}
          textButton={'Đăng Nhập'}
        />
        <a href="#">Quên mật khẩu</a>
        <span>Chưa có tài khoản <a href="#">Tạo tài khoản</a></span>
      </div>
      <div></div>
    </div>
  )
}

export default SignInPage
