import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";

const boards = [
  { name: "board1", text: "게시판" },
  { name: "board2", text: "게시판" },
  { name: "board3", text: "게시판" },
  { name: "board4", text: "게시판" },
  { name: "board5", text: "게시판" },
  { name: "board6", text: "게시판" },
  { name: "board7", text: "게시판" },
  { name: "board8", text: "게시판" },
  { name: "board9", text: "게시판" },
  { name: "board10", text: "게시판" },
  { name: "board11", text: "게시판" },
  { name: "board12", text: "게시판" },
];

const BoardsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 100px);
  background: #52d8c8;
  width: 768px;
  height: 100px;
  margin: 10px auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;
const Board = styled.div`
  font-size: 1.025rem;
  cursor: pointer;
  color: inherit;
  padding: 0.25rem;
  margin: auto;
  &:hover {
    color: #495057;
  }
`;

const Boards = () => {
  const navigate = useNavigate();
  const goArticles = () => {
    navigate("/articles");
  };

  return (
    <>
      <Outlet />
      <BoardsBlock>
        {boards.map((b) => (
          <Board key={b.name} onClick={goArticles}>
            {b.text}
          </Board>
        ))}
      </BoardsBlock>
    </>
  );
};

export default Boards;
