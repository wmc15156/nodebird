import { Button, Form, Input } from 'antd';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import useInput from '@hooks/userInput';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../../reducers/user';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 0.625rem;
`;

const LoginForm = () => {
  const [email, , onChangeEmail] = useInput('');
  const [password, , onChangePassword] = useInput('');
  const dispatch = useDispatch();

  const { logInLoading } = useSelector((state) => state?.user);

  const onSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);
  return (
    <div>
      <FormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={email} onChange={onChangeEmail} required />
        </div>
        <div>
          <label htmlFor="user-password">패스워드</label>
          <br />
          <Input name="user-password" value={password} onChange={onChangePassword} required htmlType="password" />
        </div>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" loading={logInLoading} disabled={logInLoading}>
            로그인
          </Button>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </ButtonWrapper>
      </FormWrapper>
    </div>
  );
};

export default LoginForm;
