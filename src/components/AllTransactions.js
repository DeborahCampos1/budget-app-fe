import { useState, useEffect } from "react";
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
const API = process.env.REACT_APP_API_URL

export default function AllTransactions() {
  const[transactions, setTransactions] = useState([]);

  useEffect(()=>{
    axios.get(`${API}/transactions`)
    .then((res)=>{
      console.log(res)
      setTransactions(res.data)
    }).catch((err)=>{
      throw err
    });
  }, [])

console.log(transactions)
let accountTotal = 0 
transactions.forEach(e => {
    accountTotal+= Number(e.amount)
});
let allTransactions = transactions.map((transaction , index)=>{
  return (
    <tbody className="Display">
      <tr>
        <td>
          {transaction.date}
        </td>
        <td>
          <Link to={`/${index}`}>{transaction.name}</Link>
        </td>
        <td className="Amount">
          {transaction.amount}
        </td>
      </tr>
    </tbody>
  )

})
    return (
      <div className="All">
        <h1 classname="Total" style={accountTotal > 1000 ? {color: "green"}: accountTotal < 0? {color: "red"}: {color: "white"}}>Bank Account Total: {accountTotal}</h1>
      <table>
        {allTransactions}
      </table>
      </div>
    );
  }
