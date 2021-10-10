import React from 'react';
import home1 from './../images/home1.png';
// styled
import { ContainerStyled, DescriptionStyled, HideStyled, ImageStyled } from '../styles';
// Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const Aboutsection = () => {
  return (
      <ContainerStyled>
        <DescriptionStyled>
          <motion.div>
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
          <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionnals with amazing skills</motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
        </DescriptionStyled>
        <ImageStyled>
          <motion.img variants={photoAnim} src={ home1 } alt="photographer" />
        </ImageStyled>
        <Wave />
    </ContainerStyled>
  );
};

export default Aboutsection;
