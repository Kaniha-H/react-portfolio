import React from 'react';
// styles
import styled from 'styled-components';
import { ContainerStyled } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <FaqStyled variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start ?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsam, magnam dolores nihil dicta id error culpa quis libero impedit ipsa ab sequi, aperiam, expedita necessitatibus. Possimus odio quidem necessitatibus.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsam, magnam dolores nihil dicta id error culpa quis libero impedit ipsa ab sequi, aperiam, expedita necessitatibus. Possimus odio quidem necessitatibus.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Different Payment Methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsam, magnam dolores nihil dicta id error culpa quis libero impedit ipsa ab sequi, aperiam, expedita necessitatibus. Possimus odio quidem necessitatibus.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="What products do you offer.">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsam, magnam dolores nihil dicta id error culpa quis libero impedit ipsa ab sequi, aperiam, expedita necessitatibus. Possimus odio quidem necessitatibus.
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </FaqStyled>
    );
};

const FaqStyled = styled(ContainerStyled)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #ccc;
        height: .2rem;
        margin: 2rem 0;
        width: 100%;
    }
    .question {
        padding: 3rem 0;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0;
        p {
            padding: 1rem 0;
        }
    }
`;

export default FaqSection;
