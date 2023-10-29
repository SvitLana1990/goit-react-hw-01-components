import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -2.7px;
  color: ${p => p.theme.colors.black};
`;

export const TagAndLocation = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -2.7px;
  color: ${p => p.theme.colors.grey};
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.grey};
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(2)};
`;

export const StatsLabel = styled.span`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.32px;
  color: ${p => p.theme.colors.black};
`;

export const StatsQuantity = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.32px;
  color: ${p => p.theme.colors.white};
`;
