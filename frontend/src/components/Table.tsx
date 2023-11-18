import Transaction from "../entities/transaction";
import ContentTable from "./ContentTable";

export default function Table(props: {
    transactions: Transaction[]
}) {
    const { transactions } = props
    return (
        <table>
        <thead>
          <tr>
            <td>Data</td>
            <td>Produto</td>
            <td>Tipo</td>
            <td>Vendedor</td>
            <td>Valor</td>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map((transaction, index) => (
              <ContentTable
                key={index}
                tipo={transaction.tipo}
                data={transaction.data}
                produto={transaction.produto}
                valor={transaction.valor}
                vendedor={transaction.vendedor}
              />
            ))
          }
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Valor Total: {transactions.reduce((acc, transaction) => {return acc + transaction.valor}, 0)}</td>
          </tr>
        </tbody>
      </table>
)
}
