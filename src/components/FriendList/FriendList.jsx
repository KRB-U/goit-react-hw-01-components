const FriendList = ({ friends }) => {
  console.log(friends);
  return friends.map(friend => {
    return (
      <>
        <li key={friend.id} className="item">
          <span className="status"></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      </>
    );
  });
};

export { FriendList };
