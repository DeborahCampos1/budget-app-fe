import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import AllTransactions from "./components/AllTransactions";
import EditTransaction from "./components/EditTransaction";
import ErrorMsg from "./components/ErrorMsg";
import NewTransaction from "./components/NewTransaction";
import ShowTransaction from "./components/ShowTransaction";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<AllTransactions />} />
          <Route path="/new" element={<NewTransaction />} />
          <Route path="/:index" element={<ShowTransaction />} />
          <Route path="/:index/edit" element={<EditTransaction />} />
          <Route path="/error" element={<ErrorMsg />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
