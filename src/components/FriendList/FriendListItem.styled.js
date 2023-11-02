import styled from 'styled-components';

const getBorderColor = p => {
  switch (p.$isOnline) {
    case true:
      return p.theme.colors.verde;
    case false:
      return p.theme.colors.red;
    default:
      return p.theme.colors.black;
  }
};

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid ${getBorderColor};
  border-radius: 8px;
`;

export const IsOnline = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props =>
    props.$status ? props.theme.colors.verde : props.theme.colors.red};
`;

export const FriendName = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.81px;
  color: ${p => p.theme.colors.accent};
`;
