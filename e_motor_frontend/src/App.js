import './App.css';
import Vehicle_Details from './Quotation/Vehicle_Details';
import Quotation from './Quotation/Quotation';


import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Vehicle_Details />} />      
      <Route path="/quotation" element={<Quotation />} />      
    </Routes>
  </Router>
  );
}

export default App;
