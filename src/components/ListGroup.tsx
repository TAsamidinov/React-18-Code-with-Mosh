import { MouseEvent } from "react";
import { useState } from "react";
import styled from "styled-components";

interface ListItemProps {
  active: boolean;
}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
const ListItem = styled.li<ListItemProps>`
  padding: 10px 15px;
  border: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background: #0d6efd;
  }

  background: ${(props) => (props.active ? '#0d6efd' : "none")};
`;

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  if (items.length === 0) {
    return (
      <>
        <h1> {heading} </h1>
        <p>List is empty!</p>
      </>
    );
  }
  return (
    <>
      <h1> {heading} </h1>
      <List>
        {items.map((item, index) => (
          <ListItem active
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
