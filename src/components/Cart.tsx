import React from "react";
import styled from "styled-components";

interface Props {
  items: string[];
  heading: string;
  itemsCount: number;
}
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
const ListItem = styled.li`
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: red;
  }

  color: white;
  background: #0d6efd;
`;

const Cart = ({ items, heading, itemsCount }: Props) => {
  if (items.length === 0) {
    return (
      <>
        <h1>
          {" "}
          {heading}: {itemsCount}{" "}
        </h1>
        <p>List is empty!</p>
      </>
    );
  }
  return (
    <>
      <h1>
        {" "}
        {heading}: {itemsCount}{" "}
      </h1>
      <List>
        {items.map((item, index) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
    </>
  );
};

export default Cart;
