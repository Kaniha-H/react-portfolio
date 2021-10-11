import React from 'react';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';

const Contactus = () => {
    return (
        <ContactStyled
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            style={{ background: "#fff" }}
        >
            <TitleStyled>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </Hide>
            </TitleStyled>
            <div>
                <Hide>
                    <SocialStyled variants={titleAnim}>
                        <CircleStyled />
                        <h2>Send Us A Message</h2>
                    </SocialStyled>
                </Hide>
                <Hide>
                    <SocialStyled variants={titleAnim}>
                        <CircleStyled />
                        <h2>Send An Email</h2>
                    </SocialStyled>
                </Hide>
                <Hide>
                    <SocialStyled variants={titleAnim}>
                        <CircleStyled />
                        <h2>Social Media</h2>
                    </SocialStyled>
                </Hide>
            </div>
        </ContactStyled>
    );
};

const ContactStyled = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
`;

const TitleStyled = styled.div`
    margin-bottom: 4rem;
    color: #000;
`;

const Hide = styled.div`
    overflow: hidden;
`;

const CircleStyled = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;

const SocialStyled = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
`;

export default Contactus;
