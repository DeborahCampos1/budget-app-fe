import {Link} from "react-router-dom"

export default function NavBar() {
    return (
      <nav className="Nav">
        <div><h1>Budget App</h1></div>
        <div><button><Link to="/">Transaction Summary</Link></button></div>
        <div><button><Link to="/new">New Transaction</Link></button></div>
      </nav>
    );
  }
  
  