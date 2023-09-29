import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

// JSON DATA
import data from 'data/data.json';
import user from 'data/user.json';
import friends from 'data/friends';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* 1 */}
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
      {/* 2 */}
      {/* <Statistics title="Upload stats" stats={data}></Statistics> */}
      {/* 3 */}
      <FriendList friends={friends} />
      {/* 4 */}
      {/* <TransactionHistory></TransactionHistory> */}
    </div>
  );
};
