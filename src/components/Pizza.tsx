import React from 'react'
import styled from "styled-components";

interface Props {
    pizza: {
        name: string;
        toppings: string[];
    };
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
const Pizza = ({pizza}: Props) => {
  return (
    <>
      <h2>Pizza Name: {pizza.name}</h2>
      <List>
        {pizza.toppings.map((topping, index) => (
          <ListItem key={index}>{topping}</ListItem>
        ))}
      </List>
    </>
  )
}

export default Pizza
