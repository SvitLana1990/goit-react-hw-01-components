import {
  StatisticItem,
  StatisticList,
  StatisticSection,
  StatisticText,
  StatisticTitle,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticList>
        {stats.map(item => (
          <StatisticItem key={item.id}>
            <StatisticText>{item.label}</StatisticText>&nbsp;
            <StatisticText>{item.percentage}%</StatisticText>
          </StatisticItem>
        ))}
      </StatisticList>
    </StatisticSection>
  );
};
