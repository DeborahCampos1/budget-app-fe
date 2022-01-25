import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"
const API = process.env.REACT_APP_API_URL


export default function NewTransaction() {
  let navigate= useNavigate();
  const[transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
    from: ""
  });
  const handleInputChange=(e)=>{
    setTransaction({...transaction, [e.target.id] : e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();

    axios.post(`${API}/transactions`, transaction)
    .then((res)=>{
      navigate("/")
    }).catch((err)=>{
      navigate("/*")
    })
  }
    return (
      <div className="New">
        <form onSubmit={handleSubmit}>
          <label htmlFor="date">Date:</label>
          <input
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleInputChange}
          placeholder="Date"
          required
          />
          <label htmlFor="name">Name:</label>
          <input
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleInputChange}
          placeholder="Name"
          required
          />
          <label htmlFor="amount">Amount:</label>
          <input
          id="amount"
          value={transaction.amount}
          type="number"
          onChange={handleInputChange}
          placeholder="Amount"
          required
          />
          <label htmlFor="from">From:</label>
          <input
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleInputChange}
          placeholder="From"
          required
          />
          <input className="EditSubmit" type="submit" />
        </form>
        <div className="EditButton"><button><Link to={`/`}>Back</Link></button></div>
      </div>
    );
  }
