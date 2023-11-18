import Transaction from "../entities/transaction";

export default function ContentTable(props: Transaction) {
    const { data, produto, tipo, valor, vendedor } = props
    return (
        <tr>
            <td>{new Date(data).toLocaleString()}</td>
            <td>{produto}</td>
            <td>{tipo}</td>
            <td>{vendedor}</td>
            <td>{valor}</td>
        </tr> 

    )
}