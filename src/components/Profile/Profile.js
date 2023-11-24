import { Wraper, Avatar, Text, List, Accent } from './Profile.styled';

export const Profile = ({ username, location, avatar, tag, stats: {followers, views, likes} }) => {
  return (
    <Wraper>
      <div className="description">
        <Avatar src={avatar} alt={username} />
        <Text $variant="bold">{username}</Text>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </div>

      <List>
        <li>
          <Accent>Followers </Accent>
          <Accent $variant="bold">{followers}</Accent>
        </li>
        <li>
          <Accent>Views </Accent>
          <Accent $variant="bold">{views}</Accent>
        </li>
        <li>
          <Accent>Likes </Accent>
          <Accent $variant="bold">{likes}</Accent>
        </li>
      </List>
    </Wraper>
  );
};
