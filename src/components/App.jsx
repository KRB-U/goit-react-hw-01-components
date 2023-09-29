import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

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
      <Profile></Profile>
      {/* 2 */}
      {/* <Statistics></Statistics> */}
      {/* 3 */}
      {/* <FriendList></FriendList> */}
      {/* 4 */}
      {/* <TransactionHistory></TransactionHistory> */}
    </div>
  );
};
