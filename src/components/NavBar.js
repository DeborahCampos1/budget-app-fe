import {Link} from "react-router-dom"
import { currencyFormatter } from "./Utility";

export default function NavBar({total}) {
    return (
        <nav className="Nav-container">
          <div className="Nav-items">
            <div><h1>Budget App </h1></div>
            <div><h3 style={total > 1000 ? {color: "green"}: total < 0? {color: "red"}: {color: "white"}}>Amount Total: {currencyFormatter.format(total)}</h3></div>
            <div><button><Link to="/">Transaction Summary</Link></button></div>
            <div className="nav"><button><Link to="/new">New Transaction</Link></button></div>
          </div>
        </nav>
    );
  }
  
  