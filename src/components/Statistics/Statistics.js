import { Wrapper, Title, List, Item, Label } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(stat => {
          return (
            <Item key={stat.id} $variant={stat.label}>
              <Label>{stat.label}</Label>
              <Label $variant="bold">{stat.percentage}%</Label>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
};
