import { TableItem } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <TableItem $type={type}>{type}</TableItem>
      <TableItem $type={type}>{amount}</TableItem>
      <TableItem $type={type}>{currency}</TableItem>
    </tr>
  );
};
