import styled from 'styled-components';

const getTextColor = p => {
  switch (p.$type) {
    case 'invoice':
      return p.theme.colors.verde;
    case 'payment':
      return p.theme.colors.orange;
    case 'withdrawal':
      return p.theme.colors.accent;
    case 'deposit':
      return p.theme.colors.grey;
    default:
      return p.theme.colors.black;
  }
};

export const TableItem = styled.td`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -1.44px;
  color: ${getTextColor};
  text-align: center;
`;
