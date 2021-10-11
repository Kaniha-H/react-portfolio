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
import { fade, photoAnim, pageAnimation, lineAnim, sliderContainer, slider } from '../animation';
import { useScroll } from '../components/useScroll';

const Ourwork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <WorkStyled
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            style={{ background: "#fff" }}
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider} />
                <Frame2 variants={slider} />
                <Frame3 variants={slider} />
                <Frame4 variants={slider} />
            </motion.div>
            <MovieStyled>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="athlete" />
                    </Hide>
                </Link>
            </MovieStyled>
            <MovieStyled ref={element} variants={fade} animate={controls} initial="hidden">
                <h2>The Racer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="theracer" />
                </Link>
            </MovieStyled>
            <MovieStyled ref={element2} variants={fade} animate={controls2} initial="hidden">
                <h2>Good Times</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="goodtimes" />
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

const MovieStyled = styled(motion.div)`
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

const Hide = styled.div`
    overflow: hidden;
`;

// Frame animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default Ourwork;
