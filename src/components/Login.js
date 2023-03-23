import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledForm = styled.div`
  h3 {
    margin: 0;
    margin-top: 1.5rem;
    font-size: 1.5rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  margin-top: 1.5rem;
  border: none;
  border-bottom: 1px solid;
  padding-bottom: 0.5rem;
  width: 100%;
  outline: none;
`;

const StyledLoginButton = styled.button`
  margin-top: 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  outline: none;
  background: #34bac9;
  &:hover {
    background: #b58595;
  }
`;

const StyledJoinButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  display: flex;
  font-size: 1rem;
  color: black;
  margin-left: auto;
  &:hover {
    background: #b58595;
  }
`;

const Login = () => {
  return (
    <StyledForm>
      <h3>로그인</h3>
      <StyledInput name="username" placeholder="아이디"></StyledInput>
      <StyledInput
        type="password"
        name="password"
        placeholder="비밀번호"
      ></StyledInput>
      <StyledLoginButton>로그인</StyledLoginButton>
      <Link to="/join">
        <StyledJoinButton>회원가입</StyledJoinButton>
      </Link>
    </StyledForm>
  );
};

export default Login;
