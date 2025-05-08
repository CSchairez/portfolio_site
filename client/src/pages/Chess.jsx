import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import '../App.css';
import { use } from 'react';

const Chess = () => {

    useEffect(() => {

        axios.get('http://localhost:8080/chess')
        .then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        })}, []);

    return (
        <div className='page-content'>
            <div className='page-card-main'>
                <div className='page-card'>
                    <h1>Chess Me</h1>
                    <button className="search-btn">Challenge</button>
                </div>
            </div>
        </div>
    );
};

export default Chess;