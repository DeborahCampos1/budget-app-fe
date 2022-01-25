import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from "axios";
const API = process.env.REACT_APP_API_URL

export default function EditTransaction() {
  let { index } = useParams();
  let navigate = useNavigate();

  const[transaction, setTransaction] = useState({
      date: "",
      name: "",
      amount: 0,
      from: ""
  });
  useEffect(()=>{
    axios.get(`${API}/transactions/${index}`)
    .then((res)=>{
      setTransaction(res.data)
    }).catch((err)=>{
      navigate("/error")
    })
  }, [index, navigate]);

  const handleInputChange =(e)=>{
    setTransaction({...transaction, [e.target.id]: e.target.value}
  )}

  const handleSubmit =(e)=>{
    e.preventDefault();

    axios.put(`${API}/transactions/${index}`, transaction)
    .then((res)=>{
      navigate(`/${index}`)
    }).catch((err)=>{
      navigate("/error")
    })
  };

    return (
      <div className="Edit">
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

