import React from 'react'
import InputComponent from '../../components/InputComponent/InputComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import signBanner from '../../assets/images/signBanner.png'
import { WraperCreateAccout, WraperCreateAccoutSpan, WraperForgotPass } from '../SignInPage/style'

const SignUpPage = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#333', height: '100vh'}}>
      <div style={{display: 'flex', backgroundColor: 'rgb(255, 255, 255)', marginBottom: '200px', width: '800px', height: '530px', borderRadius: '20px', overflow: 'hidden'}}>
        <div style={{width: '500px', padding: '40px 45px 24px'}}>
          <div>
          <div style={{marginBottom: '20px', fontSize: '15px'}}>
            <h4 style={{fontSize: '24px', fontWeight: '500', marginBottom: '10px'}}>Đăng Ký Tài Khoản</h4>
          </div>
          <InputComponent 
            placeholder={'Tài khoản'}
            style={{
              marginBottom: '15px',
            }}
          />
          <InputComponent 
            placeholder={'Mật khẩu'}
            style={{marginBottom: '15px'}}
          />
          <InputComponent 
            placeholder={'Xác nhận mật khẩu'}
            style={{marginBottom: '15px'}}
          />
          <ButtonComponent 
            size={40}
            styleButton={{
              margin: '20px 0px 10px',
              outline: 'none',
              borderRadius: '4px',
              background: 'rgb(255, 66, 78)',
              padding: '20px 0px',
              width: '100%',
              color: 'rgb(255, 255, 255)',
              border: 'none',
              fontSize: '20px,',
              cursor: 'pointer',
            }}
            textButton={'Xác Nhận'}
          />
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <WraperCreateAccout style={{}}>Đã có tài khoản <WraperCreateAccoutSpan>Đăng nhập</WraperCreateAccoutSpan></WraperCreateAccout>
          </div>
          </div>
        </div>
        <div style={{backgroundColor: 'rgb(222, 235, 255)', width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <img style={{width: '200px', height: '200px'}} src={signBanner}/>
          <div>
            <h4>Mua sắm tại NShop</h4>
            <span>Siêu ưu đãi mỗi ngày</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
