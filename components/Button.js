import styled from 'styled-components';

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: hotpink;
  border-style: none;
  border-radius: 50px;
  margin: 0.6rem;
  padding: 0.6rem 0;
`;
