import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios"
const API = process.env.REACT_APP_API_URL;

export default function ShowTransaction() {
  const [indexedTransaction, setindexedTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(()=>{
    axios.get(`${API}/transactions/${index}`)
    .then((res)=>{
      setindexedTransaction(res.data)
    }).catch((err)=>{
      navigate("/error")
    })
  }, [index, navigate])

  const handleDelete=()=>{
    axios.delete(`${API}/transactions/${index}`)
    .then((res)=>{
      navigate("/")
    }).catch((err)=>{
      console.log(err)
    })
  }
    return (
      <div className="Show">
        <div className="Entry">{indexedTransaction.date}</div>
        <div className="Entry">{indexedTransaction.name}</div>
        <div className="Entry">{indexedTransaction.amount}</div>
        <div className="Entry">{indexedTransaction.from}</div>
        <button><Link to="/">Back</Link></button>
        <button><Link to={`/${index}/edit`}>Edit</Link></button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }
