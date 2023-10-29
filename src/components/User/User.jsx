import {
  ProfileContainer,
  DescriptionContainer,
  Name,
  StatsLabel,
  StatsQuantity,
  StatsList,
  StatsItem,
  TagAndLocation,
} from './User.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <DescriptionContainer>
        <img src={avatar} alt={username} width="150" height="150" />
        <Name>{username}</Name>
        <TagAndLocation>@{tag}</TagAndLocation>
        <TagAndLocation>{location}</TagAndLocation>
      </DescriptionContainer>

      <StatsList>
        <StatsItem>
          <StatsLabel>Followers&nbsp;</StatsLabel>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views&nbsp;</StatsLabel>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes&nbsp;</StatsLabel>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ProfileContainer>
  );
};
