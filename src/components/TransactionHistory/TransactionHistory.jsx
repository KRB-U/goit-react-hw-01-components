import css from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={css.transactionHistory}>
        <thead className={css.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(transaction => {
            return (
              <tr className={css.list} key={transaction.id}>
                <td className={css.item}>{transaction.type}</td>
                <td className={css.item}>{transaction.amount}</td>
                <td className={css.item}>{transaction.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export { TransactionHistory };
