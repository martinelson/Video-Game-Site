import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { findPlaying } from "../actions/gamesAction";
//components
import ReviewComponent from '../components/ReviewComponent';
import ACPartOne from '../components/animalCrossingReview/ACPartOne';
import ACPartTwo from '../components/animalCrossingReview/ACPartTwo';
//styles and animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import {fadeIn} from '../animation';
//media
import ac1 from '../img/acnh/ac1.JPG';
import ac2 from '../img/acnh/ac2.JPG';
import ac6 from '../img/acnh/ac6.JPG';
import ac8 from '../img/acnh/ac8.JPG';
import ac13 from '../img/acnh/ac13.JPG';
import ac14 from '../img/acnh/ac14.JPG';
import ac15 from '../img/acnh/ac15.JPG';
import ac16 from '../img/acnh/ac16.JPG';
import ac18 from '../img/acnh/ac18.JPG';
import ac19 from '../img/acnh/ac19.JPG';


const GameList = styled(motion.div)`
    padding: 0 5rem;
    h2{
        padding: 5rem 0;
    }

    @media (max-width: 550px) {
        padding: 5rem 0;
        margin: 0 5%;
        h2{
            width: 80%;
            margin: 0 2%;
            padding: 5% 0;
        }
        }
`;

const StyledGames = styled(motion.div)`

    margin: 2rem auto;
    @media (max-width: 950px){
        max-width: 90%;
    }

    
`;

const StyledGallery = styled(motion.div)`
    text-align: center;
    img{
        width: 75%;
        margin: 2rem auto;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        border-radius: 1rem;
    }

    @media (max-width: 550px) {
        img{
            width: 90%;
        }
    }

`

export default function Review() {
    //get current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    
    //getting game data 
    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(findPlaying());
    }, [dispatch]);
    
    const {animalCrossing} = useSelector (state => state.games);

    return (
        <GameList variants={fadeIn} initial='hidden' animate='show'>
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                {pathId }
                </AnimatePresence>
                <StyledGames>
                    {animalCrossing.map(game => (
                        <ReviewComponent name={game.name} released={game.released} id={game.id}
                        image={game.background_image} key={game.id}/>
                    ))}
                </StyledGames>
                <ACPartOne/>
                <StyledGallery>
                    <img src={ac1} alt="Gameplay-img"/>
                    <img src={ac2} alt="Gameplay-img"/>
                    <img src={ac6} alt="Gameplay-img"/>
                </StyledGallery>
                <ACPartTwo/>
                <StyledGallery>
                    <img src={ac13} alt="Gameplay-img"/>
                    <img src={ac14} alt="Gameplay-img"/>
                    <img src={ac15} alt="Gameplay-img"/>
                    <img src={ac16} alt="Gameplay-img"/>
                    <img src={ac18} alt="Gameplay-img"/>
                    <img src={ac19} alt="Gameplay-img"/>
                    <img src={ac8} alt="Gameplay-img"/>
                </StyledGallery>
            </AnimateSharedLayout>
        </GameList>
    )
}