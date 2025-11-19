import React from "react";
import styled from "styled-components";

interface Props {
  children: string;
  maxChars?: number;
  isExpanded?: boolean;
}
const P = styled.p`
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
const ExpandableText = ({ children, maxChars = 100, isExpanded }: Props) => {

    if (isExpanded || children.length <= maxChars) {
        return <P style={{ whiteSpace: "pre-line" }}>{children}</P>
    }
    const substring = children.substring(0, maxChars) + "...";
    return <P>{substring}</P>;
};

export default ExpandableText;
