import axios from 'axios';
import {popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL, hadesURL, animalCrossingURL, oriURL, untitledGooseURL} from '../api';

export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newData = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            newGames: newData.data.results,
            upcoming: upcomingData.data.results
        }
    });
};

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name))

    dispatch({
        type: "FETCH_SEARCHED",
        payload:{
            searched: searchGames.data.results
        }
    });
};

export const findPlaying = () => async(dispatch) => {
    const hadesData = await axios.get(hadesURL());
    const animalCrossingData = await axios.get(animalCrossingURL());
    const oriData = await axios.get(oriURL());
    const untitledGooseData = await axios.get(untitledGooseURL());

    dispatch({
        type: "FETCH_PLAYING",
        payload: {
            hades: hadesData.data.results,
            animalCrossing: animalCrossingData.data.results,
            ori: oriData.data.results,
            goose: untitledGooseData.data.results,
        }
    });
};