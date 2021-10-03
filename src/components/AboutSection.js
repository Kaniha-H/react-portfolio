import React from 'react';
import home1 from './../images/home1.png';

// styled
import { ContainerStyled, DescriptionStyled, HideStyled, ImageStyled } from '../styles';

const Aboutsection = () => {
    return (
        <ContainerStyled>
            <DescriptionStyled>
                <div className="title">
                    <HideStyled>
                        <h2>We work to make</h2>
                    </HideStyled>
                    <HideStyled>
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </HideStyled>
                    <HideStyled>
                        <h2>true.</h2>
                    </HideStyled>
                </div>
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
