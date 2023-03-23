import styled from "styled-components";

const StyledForm = styled.div`
  margin-top: 2rem;
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
const StyledButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: white;
  cursor: pointer;
  outline: none;
  background: #34bac9;
  &:hover {
    background: #b58595;
  }
`;

const Join = () => {
  return (
    <StyledForm>
      <StyledInput
        name="join-number"
        placeholder="휴대폰 번호 또는 이메일 주소"
      ></StyledInput>
      <StyledInput name="join-name" placeholder="성명"></StyledInput>
      <StyledInput name="join-username" placeholder="사용자 이름"></StyledInput>
      <StyledInput
        type="password"
        name="join-password"
        placeholder="비밀번호"
      ></StyledInput>
      <StyledInput
        type="password"
        name="join-passwordcheck"
        placeholder="비밀번호 확인"
      ></StyledInput>
      <StyledButton>가입</StyledButton>
    </StyledForm>
  );
};
export default Join;
