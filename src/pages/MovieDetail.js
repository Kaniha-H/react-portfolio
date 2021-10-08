import React, { useState, useEffect } from 'react';
// style
import styled from 'styled-components';
// Router
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const Moviedetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    // useEffect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url]);
    return (
        <>
            {movie && (
                <DetailsStyled exit="exit" variants={pageAnimation} initial="hidden" animate="show">
                    <HeadLineStyled>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt={movie.title} />
                        <p>{movie.description}</p>
                    </HeadLineStyled>
                    <Awards>
                        {movie.awards.map((award) => (
                            <Award title={award.title} description={award.description} key={award.title}/>
                        ))}
                    </Awards>
                    <ImageDisplayStyled>
                        <img src={movie.secondaryImg} alt="" />
                    </ImageDisplayStyled>
                </DetailsStyled>
            )}
        </>
    );
};

const DetailsStyled = styled(motion.div)`
    color: #fff;
`;

const HeadLineStyled = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 5%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    p {
        margin: 10rem 10rem 0 10rem;
        padding-bottom: 0;
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 0 10rem 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`; 

const AwardStyled = styled.div`
    padding: 0 3rem;
    h3 {
        font-size: 1.8rem;
    }
    .line {
        width: 100%;
        background: #1db57d;
        height: .5rem;
        margin: 1rem 0;
    }
    p {
        padding: 2rem 0;
    }
`; 
const ImageDisplayStyled = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

// Award component
const Award = ({title, description}) => {
    return (
        <AwardStyled>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyled>
    );
};

export default Moviedetail;
