import { Wrapper, Title, List, Item, Label } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({id, label, percentage }) => {
          return (
            <Item key={id} $variant={label}>
              <Label>{label}</Label>
              <Label $variant="bold">{percentage}%</Label>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
};
