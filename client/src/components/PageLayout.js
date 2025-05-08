import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import '../App.css';

const PageLayout = () => {
  return (
    <>
      <main className="app-content">
      <div className='page'>
        <Navbar />
        <Outlet />
        </div>
        <footer className="footer">© 2025 CSmike</footer>
      </main>
      
    </>
  );
};

export default PageLayout;