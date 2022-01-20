import {Link} from "react-router-dom"

export default function NavBar() {
    return (
      <nav className="Nav">
        <div><h1><Link to="/">Budget App</Link></h1></div>
        <div><button><Link to="/new">New Transaction</Link></button></div>
      </nav>
    );
  }
  
  