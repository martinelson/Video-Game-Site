import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { loadGames } from "../actions/gamesAction";
//components
import Game from '../components/Game';
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
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;

    @media (max-width: 550px) {
        display: flex;
        flex-direction: column;
    }
`;

export default function Home() {
    //get current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    //getting game data 
    const dispatch = useDispatch();

    useEffect(() =>{
      dispatch(loadGames());
    }, [dispatch]);

    const {popular, newGames, upcoming, searched} = useSelector (state => state.games);

    return (
        <GameList variants={fadeIn} initial='hidden' animate='show'>
            <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
            {pathId && <GameDetail pathId={pathId}/> }
            </AnimatePresence>
            {searched.length ? (
            <div className="searched-games">
            <h2>Searched</h2>
            <StyledGames>
                {searched.map(game => (
                    <Game name={game.name} released={game.released} id={game.id}
                    image={game.background_image} key={game.id}/>
                ))}
            </StyledGames>
            </div>
            ) : ''}
            <h2>Popular Games</h2>
            <StyledGames>
                {popular.map(game => (
                    <Game name={game.name} released={game.released} id={game.id}
                    image={game.background_image} key={game.id}/>
                ))}
            </StyledGames>
            <h2>New Games</h2>
            <StyledGames>
                {newGames.map(game => (
                    <Game name={game.name} released={game.released} id={game.id}
                    image={game.background_image} key={game.id}/>
                ))}
            </StyledGames>
            <h2>Upcoming Games</h2>
            <StyledGames>
                {upcoming.map(game => (
                    <Game name={game.name} released={game.released} id={game.id}
                    image={game.background_image} key={game.id}/>
                ))}
            </StyledGames>
            </AnimateSharedLayout>
        </GameList>
    )
}
