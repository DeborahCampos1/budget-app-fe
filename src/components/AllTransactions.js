import { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom"
import { currencyFormatter } from "./Utility";
const API = process.env.REACT_APP_API_URL

export default function AllTransactions({getTotal}) {
  const[transactions, setTransactions] = useState([]);

  useEffect(()=>{
    axios.get(`${API}/transactions`)
    .then((res)=>{
      setTransactions(res.data)
    }).catch((err)=>{
      throw err
    });
  }, [])

let accountTotal = 0 
transactions.forEach(e => {
    accountTotal+= Number(e.amount)
});

getTotal(accountTotal);

let allTransactions = transactions.map((transaction , index)=>{
  return (
    <tbody key={index} className="Display">
      <tr>
        <td>
          {transaction.date}
        </td>
        <td>
          <Link to={`/${index}`}>{transaction.name}</Link>
        </td>
        <td className="Amount">
          {currencyFormatter.format(transaction.amount)}
        </td>
      </tr>
    </tbody>
  )

})
    return (
      <div className="All">
        <h1 className="Total" style={accountTotal > 1000 ? {color: "green"}: accountTotal < 0? {color: "red"}: {color: "white"}}>Bank Account Total: {currencyFormatter.format(accountTotal)}</h1>
      <table>
        {allTransactions}
      </table>
      </div>
    );
  }
