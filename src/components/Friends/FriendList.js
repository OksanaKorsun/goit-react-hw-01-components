import { FriedListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriedListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
};
