import {
  Table,
  Head,
  TdSquare,
  ThSquare,
  TrSquare,
} from './Transaction.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <tr>
          <ThSquare>Type</ThSquare>
          <ThSquare>Amount</ThSquare>
          <ThSquare>Currency</ThSquare>
        </tr>
      </Head>
      <tbody>
        {items.map((item, index) => {
          return (
            <TrSquare key={item.id} index={index}>
              <TdSquare>{item.type}</TdSquare>
              <TdSquare>{item.amount}</TdSquare>
              <TdSquare>{item.currency}</TdSquare>
            </TrSquare>
          );
        })}
      </tbody>
    </Table>
  );
};
