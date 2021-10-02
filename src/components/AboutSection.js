import React from 'react';
import home1 from './../images/home1.png';

// styled
import styled from 'styled-components';

const Aboutsection = () => {
    return (
        <AboutStyled>
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
        </AboutStyled>
    );
}

// styled components
const AboutStyled = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: #fff;
`;

const DescriptionStyled = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;

const ImageStyled = styled.image`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const HideStyled = styled.div`
    overflow: hidden;
`;
export default Aboutsection;
