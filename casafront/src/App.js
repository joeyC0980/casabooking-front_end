
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';
import Login from "./pages/login/Login";
import StripeContainer from './components/payment/StripeContainer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotels/:id" element={<Hotel />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/payment" element={<StripeContainer/>}/>
    </Routes>
  );
}

export default App;
