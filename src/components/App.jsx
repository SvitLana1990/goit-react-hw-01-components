import user from './User/user.json';
import { Profile } from './User/User.jsx';
import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics.jsx';
import friends from './FriendList/friends.json';
import { FriendList } from './FriendList/FriendList.jsx';
import items from './TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

const title = true;
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {title ? (
        <Statistics title="Upload stats" stats={data} />
      ) : (
        <Statistics stats={data} />
      )}
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
