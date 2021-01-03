import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import controller from '../img/controller.png';
//styles and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {fadeIn} from '../animation';
//redux
import {fetchSearch} from '../actions/gamesAction';
import { useDispatch } from 'react-redux';


const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        margin-top: 1rem;
        border: none;
        box-shadow: 0 0 30px rgba(0,0,0,0.2);
    }
    button{
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
    }
    h1 {
        cursor: pointer;
    }

    @media (max-width: 550px) {
            input{
                width: 90%;
            }
            padding: 2%;
            button{
                margin: 1rem 0;
            }
        }
`;

const Logo = styled(motion.div)`
    margin: 1rem 0;
    img{
        max-width: 10%;
        margin: 0.5rem auto;
    }
    p{
        display: inline;
        margin: 1rem;
    }

    @media (max-width: 550px) {
        img{
            max-width: 30%;
        }
    }

`
export default function Nav() {
    const dispatch = useDispatch();
    const [textSearch, setTextSearch] = useState('');

    const searchHandler = (e) => {
        setTextSearch(e.target.value)
    };

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textSearch));
        setTextSearch("")
    };

    const clearSearch = () => {
        dispatch({type: "CLEAR_SEARCH"});
    }

    return (
        <StyledNav variants={fadeIn} initial='hidden' animate='show'>
            <Logo>
                <Link to="/"><img src={controller} onClick={clearSearch} alt="controller" /></Link>
                <Link to="/playing"><p>What I'm Playing</p></Link>
                <Link to="/review"><p>My Reviews</p></Link>
            </Logo>
            <form className="search">
                <Link to="/"><input value={textSearch} onChange={searchHandler} type="text"/></Link>
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
            <div>
            </div>
        </StyledNav>
    )
}
