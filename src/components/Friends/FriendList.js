import { List } from './FriendList.styled';
import { FriedListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriedListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
};
