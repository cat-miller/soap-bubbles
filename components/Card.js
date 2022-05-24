import styled from 'styled-components';
import Button from './Button';

export default function Card({ children }) {
  return (
    <StyledCard>
      <h2>{children}</h2>
      <Button></Button>
    </StyledCard>
  );
}
const StyledCard = styled.section`
  display: flex;
  background-color: pink;
  border-radius: 1rem;
  color: teal;
  gap: 5px;
`;
