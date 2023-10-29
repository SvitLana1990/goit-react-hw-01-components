import { HeaderTitle, Table, TableHead } from './TransactionHisory.styled';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import items from './transactions.json';

export const TransactionHistory = () => {
  return (
    <Table className="transaction-history">
      <TableHead>
        <tr>
          <HeaderTitle>Type</HeaderTitle>
          <HeaderTitle>Amount</HeaderTitle>
          <HeaderTitle>Currency</HeaderTitle>
        </tr>
      </TableHead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </Table>
  );
};
