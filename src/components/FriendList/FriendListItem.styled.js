import styled from 'styled-components';

export const List = styled.ul`
  max-width: 200px;
  height: min-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${p => p.theme.spacing(3)};
`;
