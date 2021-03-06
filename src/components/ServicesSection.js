import React from 'react';
// Icons
import clock from './../images/clock.svg';
import diaphragm from './../images/diaphragm.svg';
import money from './../images/money.svg';
import teamwork from './../images/teamwork.svg';
import home2 from './../images/home2.png';
// styles
import styled from 'styled-components';
import { ContainerStyled, DescriptionStyled, ImageStyled } from '../styles';
import { fade } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <ServicesStyled variants={fade} animate={controls} initial="hidden" ref={element}>
            <DescriptionStyled>
                <h2>High <span>quality</span> service</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={ clock } alt="" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={ teamwork } alt="" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={ diaphragm } alt="" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={ money } alt="" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </DescriptionStyled>
            <ImageStyled>
                <img src={ home2 } alt="" />
            </ImageStyled>
        </ServicesStyled>
    );
};

const ServicesStyled = styled(ContainerStyled)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0 4rem 0;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: #fff;
            color: #000;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;
