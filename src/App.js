import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from './components/Login';
import Verification from './components/Verification';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/> 
        <Route path="/verification" element={< Verification />} />
      </Routes>
    </Router>
  );
}

export default App;
