import React from 'react'
import axios from 'axios'
import './App.css'
import Transaction from './entities/transaction'
import Table from './components/Table'

export default function App() {
  const [transactions, setTransactions] = React.useState<Transaction[] | null>(null)
  const [file, setFile] = React.useState<File | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    setFile(event.target.files[0])
  }

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event?.preventDefault()

    if(!file) {
      return;
    }

    let formData = new FormData()
    formData.append('file', file)

    const transactions =await axios.post("http://localhost:3000/upload", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    setTransactions(transactions.data.transactions)
  }

  return (
    <>
      <h1>Upload de Arquivo
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Escolhar um arquivo: </label>
          
          <input
            type="file"
            name="file"
            id="file"
            required
            onChange={handleChange}
          />

          <br/>

          <input
            type="submit"
            value="Upload"
          />
        </form>
      </h1>

      {
        !transactions ? <></> : <Table transactions={transactions}/>
      }
    </>
  )
}
