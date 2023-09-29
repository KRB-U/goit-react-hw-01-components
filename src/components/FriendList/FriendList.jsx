import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul class="friendList">
        {friends.map(friend => {
          return (
            <li key={friend.id} className={css.item}>
              <span className={css.isOnline ? css.online : css.offline}></span>
              <img
                className={css.avatar}
                src={friend.avatar}
                alt={friend.name}
                width="48"
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
