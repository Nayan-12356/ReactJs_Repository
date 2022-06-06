
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AddEmployeeComponent from './components/AddEmployeeComponent';
//import EmployeeService from './services/EmployeeService';

function App() {
  return (
    <div>
      <Router>
        
      <HeaderComponent/>
      <div className="container">
        
        <Routes>
                <Route path="/" element={<ListEmployeeComponent/>} exact/>
                <Route path="/employees" element={<ListEmployeeComponent/>} exact/>
                <Route path="/add-employee" element={<AddEmployeeComponent/>} exact/>
                <Route path="/edit-employee/:id" element={<AddEmployeeComponent/>} exact/>
    
      </Routes>
    </div>
    <FooterComponent/>
    
    </Router>
    </div>
    
  );
}

export default App;
