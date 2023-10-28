export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className="transaction-item">{type}</td>
      <td className="transaction-item">{amount}</td>
      <td className="transaction-item">{currency}</td>
    </tr>
  );
};
