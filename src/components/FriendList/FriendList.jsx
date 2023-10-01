import css from './FriendList.module.css';
// import iconSize from '../constans/iconSize';
const iconSize = {
  md: 48,
};

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friendList}>
        {friends.map(friend => {
          const isOnline = friend.isOnline ? css.true : css.false;
          return (
            <li key={friend.id} className={css.item}>
              <span className={`${css.status} ${isOnline}`}></span>
              <img
                className={css.avatar}
                src={friend.avatar}
                alt={friend.name}
                width={iconSize['md']}
              />
              <p className={css.name}>{friend.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { FriendList };
