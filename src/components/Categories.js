import styled from "styled-components";
import { Outlet } from "react-router-dom";

const categories = [
  {
    name: "category1",
    text: "category1",
  },
  {
    name: "category2",
    text: "category2",
  },
  {
    name: "category3",
    text: "category3",
  },
  {
    name: "category4",
    text: "category4",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 80px;
  width: 384px;
  height: 768px;
  padding: 1rem;
  background: #52d8c8;
`;

const Category = styled.div`
  font-size: 2rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-left: 5rem;
  padding-top: 3rem;
  &:hover {
    color: #495057;
  }
`;

const Categories = () => {
  return (
    <>
      <Outlet />
      <CategoriesBlock>
        {categories.map((c) => (
          <Category key={c.name}>{c.text}</Category>
        ))}
      </CategoriesBlock>
    </>
  );
};

export default Categories;
