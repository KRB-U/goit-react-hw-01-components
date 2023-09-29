import friends from 'components/FriendList/friends';

const FriendList = () => {
  return friends.map(friend => {
    return `<li classname="item">
      <span classname="status"></span>
      <img
        classname="avatar"
        src={friends.avatar}
        alt={friends.name}
        width="48"
      />
      <p classname="name"></p>
    </li>`;
  });
};

export { FriendList };
