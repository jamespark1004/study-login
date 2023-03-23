import styled from "styled-components";
import Join from "./Join";

const StyledTemplete = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10rem;
  border-radius: 4px;
  overflow: hidden;
`;

const StyledTitle = styled.div`
  background: #34bac9;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const JoinTemplete = () => {
  return (
    <StyledTemplete>
      <StyledTitle>회원가입 페이지</StyledTitle>
      <Join />
    </StyledTemplete>
  );
};

export default JoinTemplete;
