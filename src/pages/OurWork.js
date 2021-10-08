import React from 'react';
// styles
import styled from 'styled-components';
// route
import { Link } from 'react-router-dom';
// images
import athlete from './../images/athlete-small.png';
import theracer from './../images/theracer-small.png';
import goodtimes from './../images/goodtimes-small.png';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const Ourwork = () => {
    return (
        <WorkStyled 
            exit="exit" 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            style={{background:"#fff"}}
        >
            <MovieStyled>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={ athlete } alt="athlete" />
                </Link>
            </MovieStyled>
            <MovieStyled>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={ theracer } alt="theracer" />
                </Link>
            </MovieStyled>
            <MovieStyled>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={ goodtimes } alt="goodtimes" />
                </Link>
            </MovieStyled>
        </WorkStyled>
    );
};

const WorkStyled = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0;
        color: #000;
    }
`;

const MovieStyled = styled.div`
    padding-bottom: 10rem;
    .line {
        height: .5rem;
        background: #1db57d;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default Ourwork;
