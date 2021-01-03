import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { findPlaying } from "../actions/gamesAction";
//components
import PlayingComponent from '../components/PlayingComponent';
import GameDetail from '../components/GameDetail';
//styles and animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import {fadeIn} from '../animation';

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
    min-height: 50vh;
    max-width: 40vw;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;

    @media (max-width: 950px){
        max-width: 90%;
    }

    @media (max-width: 550px) {
        display: flex;
        flex-direction: column;
        max-width: 80%;
    }
`;

export default function Playing() {
    //get current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    
    //getting game data 
    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(findPlaying());
    }, [dispatch]);
    
    const {hades, animalCrossing, ori, goose} = useSelector (state => state.games);

    return (
        <GameList variants={fadeIn} initial='hidden' animate='show'>
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                {pathId && <GameDetail pathId={pathId}/> }
                </AnimatePresence>
                <h2>What I'm Playing</h2>
                <StyledGames>
                    {hades.map(game => (
                        <PlayingComponent name={game.name} released={game.released} id={game.id}
                        image={game.background_image} key={game.id}/>
                    ))}
                </StyledGames>
                <StyledGames>
                    {animalCrossing.map(game => (
                        <PlayingComponent name={game.name} released={game.released} id={game.id}
                        image={game.background_image} key={game.id}/>
                    ))}
                </StyledGames>
                <StyledGames>
                    {ori.map(game => (
                        <PlayingComponent name={game.name} released={game.released} id={game.id}
                        image={game.background_image} key={game.id}/>
                    ))}
                </StyledGames>
                <StyledGames>
                    {goose.map(game => (
                        <PlayingComponent name={game.name} released={game.released} id={game.id}
                        image={game.background_image} key={game.id}/>
                    ))}
                </StyledGames>
            </AnimateSharedLayout>
        </GameList>
    )
}
