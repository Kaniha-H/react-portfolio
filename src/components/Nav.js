import React from 'react';
import styled from "styled-components";
// Route
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <NavStyled>
            <h1>
                <Link id="logo" to="/">Capture</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                </li>
            </ul>
        </NavStyled>
    );
};

const NavStyled = styled.nav`
    position: sticky;
    top: 0;
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    z-index: 10;
    a {
        color: #fff;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 1.8rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 10rem;
    }
`;

export default Nav;
