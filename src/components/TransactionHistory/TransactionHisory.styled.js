import styled from 'styled-components';

export const Table = styled.table`
  width: 320px;
  border: 2px solid ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.white};
`;

export const TableHead = styled.thead`
  background-color: ${p => p.theme.colors.accent};
`;

export const HeaderTitle = styled.th`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -1.44px;
  color: ${p => p.theme.colors.white};
`;
