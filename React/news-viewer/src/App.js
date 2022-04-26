import './App.css';
import { Routes, Route } from 'react-router-dom';
import NewPage from './pages/NewPage';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

 
  const App = () => {


    return(
      <Routes> 
        <Route path="/" element={<NewPage></NewPage>}></Route>
        <Route path="/:category" element={<NewPage></NewPage>}></Route>
      </Routes>
    )

  }

export default App;
