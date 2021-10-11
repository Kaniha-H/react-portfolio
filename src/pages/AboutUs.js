import React from 'react';
// Pages components
import Aboutsection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServicesSection from '../components/ServicesSection';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

const Aboutus = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <Aboutsection />
            <ServicesSection />
            <FaqSection />
            <ScrollTop />
        </motion.div>
    );
}

export default Aboutus;
