import React from 'react';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const Contactus = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <h1>Contact us</h1>
        </motion.div>
    );
}

export default Contactus;
