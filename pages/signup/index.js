import { Button, Checkbox, Form, Input } from 'antd';
import { useCallback, useState } from 'react';
import useInput from '../../hooks/userInput';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST } from '../../reducers/user';

const Signup = () => {
  const [email, , onChangeEmail] = useInput('');
  const [nickname, , onChangeNickname] = useInput('');
  const [password, , onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector((state) => state?.user);

  const onChangeTerm = useCallback(
    (e) => {
      setTerm(e.target.checked);
      setTermError(false);
    },
    [term, termError],
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },

    [password],
  );

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }
    console.log(email, nickname, password);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [password, passwordCheck, term]);
  return (
    <Form onFinish={onSubmit}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <Input name="user-email" value={email} required onChange={onChangeEmail} />
      </div>

      <div>
        <label htmlFor="user-nickname">닉네임</label>
        <br />
        <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
      </div>

      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password-check" type="password" value={password} required onChange={onChangePassword} />
      </div>

      <div>
        <label htmlFor="user-password-check">비밀번호 확인</label>
        <br />
        <Input
          name="user-password-check"
          type="password"
          value={passwordCheck}
          required
          onChange={onChangePasswordCheck}
        />
        {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
      </div>

      <div>
        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
          약관에 동의 합니다.
        </Checkbox>
        {termError && <div style={{ color: 'red' }}>약관에 동의 하셔야 합니다.</div>}
      </div>

      <div>
        <Button type="primary" htmlType="submit" loading={signUpLoading} disabled={signUpLoading}>
          가입하기
        </Button>
      </div>
    </Form>
  );
};

export default Signup;
