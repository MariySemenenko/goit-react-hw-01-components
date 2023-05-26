

export const TransactionHistory = ({ items }) => {

    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map(({ id, type, amount, currence }) => (
    <>
    <tr  key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currence}</td>
        </tr>
              </>
       ))}
  </tbody>
</table>
 );
 };