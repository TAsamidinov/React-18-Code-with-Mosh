import React from 'react'
import styled from "styled-components";

interface Props {
    products: {
        discount: number;
        items: { id: number; name: string; price: number }[];
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


const Product = ({products}: Props) => {
  return (
    <List>
        Products: 
        {products.items.map((product) => (
            <ListItem key={product.id}>
                {product.id}:  {product.name} | {product.price} | {products.discount}
            </ListItem>
        ))}
    </List>

  )
}

export default Product
