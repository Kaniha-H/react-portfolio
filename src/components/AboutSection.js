import React from 'react';
import home1 from './../images/home1.png';
// styled
import { ContainerStyled, DescriptionStyled, HideStyled, ImageStyled } from '../styles';
// Framer Motion
import { motion } from 'framer-motion';

const Aboutsection = () => {
    const titleAnim = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 2 } },
    };
    const container = {
        hidden: { x: 100 },
        show: { x: 0, transition: { duration: .75, ease: "easeOut", staggerChildren: 1 } }
    };
    return (
        <ContainerStyled>
            <DescriptionStyled>
                <motion.div 
                    className="title" 
                    variants={container}
                    initial="hidden" 
                    animate="show"
                >
                    <HideStyled>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </HideStyled>
                    <HideStyled>
                        <motion.h2 variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </HideStyled>
                    <HideStyled>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </HideStyled>
                </motion.div>
                <p>Contact us for any photography or videography ideas that you have. We have professionnals with amazing skills</p>
                <button>Contact Us</button>
            </DescriptionStyled>
            <ImageStyled>
                <img src={ home1 } alt="photographer" />
            </ImageStyled>
        </ContainerStyled>
    );
}

export default Aboutsection;
