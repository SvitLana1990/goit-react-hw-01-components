import { FriendItem, FriendName, IsOnline } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem $isOnline={isOnline}>
      <IsOnline $status={isOnline}></IsOnline>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
