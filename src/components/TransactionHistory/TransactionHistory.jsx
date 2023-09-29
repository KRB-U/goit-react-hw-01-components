import transactions from 'components/TransactionHistory/transactions.json';

const TransactionHistory = () => {
  return (
    <div className="profile">
      <div className="description">
        <img src={transactions.avatar} alt="User avatar" className="avatar" />
        <p className="name">{transactions.username}</p>
        <p className="tag">{transactions.tag}</p>
        <p className="location">{transactions.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{transactions.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{transactions.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{transactions.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export { TransactionHistory };
