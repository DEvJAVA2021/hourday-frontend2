import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink  } from '../../components/Auth';
import AuthRadioButton from '../../components/Auth/AuthRadioButton';
import { BrowserRouter as Route } from "react-router-dom";


class Register extends Component {
    render() {
        return (
            <AuthContent title="회원가입">
                <InputWithLabel label="이메일" name="email" placeholder="이메일"/>
                <InputWithLabel label="이름" name="name" placeholder="이름"/>
                <InputWithLabel label="닉네임" name="username" placeholder="닉네임"/>
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
                <InputWithLabel label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호 확인" type="password"/>
                <AuthRadioButton/ >
                {/* <Route exact path="/radiobutton" component={AuthRadioButton} /><AuthTadioButton /> */}
                <AuthButton>회원가입</AuthButton>
                <RightAlignedLink to="/auth/login">로그인</RightAlignedLink>
            </AuthContent>
        );
    }
}

export default Register;