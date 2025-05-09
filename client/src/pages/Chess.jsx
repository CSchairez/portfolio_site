import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import '../App.css';

const Chess = () => {

    const [response, setResponse] = useState();
    const challenge_profile = 'https://www.chess.com/play/online/new?opponent=urfavoritepawnstar';

    const chessApi = async () => {
        const res = (await axios.get('https://api.chess.com/pub/player/urFavoritePawnStar'))
        setResponse(res.data);
        console.log(res.data);
    };

    useEffect(() => {
        chessApi();
        }, []);

    return (
        <div className='page-content'>
            <div className='page-card-main'>
                <div className='page-card'>
                    <h1>Chess Me</h1>
                    <button className="search-btn" onClick={() => window.open(challenge_profile, '_blank')}>
                        Challenge Me</button>
                </div>
                <ol className="chess-stats">
                    {response &&
                        <li className="chess-stats-item">                           
                        </li>
                    }
                </ol>
            </div>
        </div>
    );
};

export default Chess;