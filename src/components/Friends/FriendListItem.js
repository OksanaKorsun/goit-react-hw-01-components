import { Item, Accent } from './FriendListItem.styled';
export const FriedListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Accent status={isOnline}></Accent>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </Item>
  );
};
