import './App.css';
import React from 'react';
import { Layout, Typography, Space } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";
import HomePage from './Components/HomePage';
import Slide from './Components/Slide';
import AllNotes from './Components/AllNotes';



function App() {
  return (
    <>

      <div className="navbar">
        <Slide />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/Notas" element={<AllNotes/>}></Route>
            </Routes>
          </div>
        </Layout>
        <div className="footer" >
          <Typography.Title level={5} style={{ color: 'Black', textAlign: 'center' }}>
            Bloc de Notas<br />
            All Right Reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/Notas">Revisar Notas</Link>  
          </Space>
        </div>
      </div>
    </>
  );
}

export default App;
