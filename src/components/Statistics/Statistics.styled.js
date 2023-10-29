import styled from 'styled-components';

export const StatisticSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
`;

export const StatisticTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -2.7px;
  color: ${p => p.theme.colors.black};
`;

export const StatisticList = styled.ul`
  display: flex;
  flex-direction: row;
  border: 1px solid ${p => p.theme.colors.black};
`;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${getRandomColor};
  padding: ${p => p.theme.spacing(3)} ${p => p.theme.spacing(2)};
`;

export const StatisticText = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.32px;
  color: ${p => p.theme.colors.beige};
`;
