import { useState, useEffect } from "react";
import axios from "axios"
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
// let transactions
    return (
      <div className="All">
        <h1>Bank Account Total: </h1>
  
      </div>
    );
  }
