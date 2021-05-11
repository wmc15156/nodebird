import { FC, useState } from 'react';
import Link from 'next/link';
import { Col, Input, Menu, Row } from 'antd';
import UserProfile from '../UserProfile';
import LoginForm from '../LoginForm';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const InputWrapper = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const me = useSelector((state) => state?.user?.me);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <InputWrapper />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://www.naver.com" target="_blank" rel="noreferrer noopener">
            네이버
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;
