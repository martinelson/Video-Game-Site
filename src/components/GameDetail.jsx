import React from 'react';
import { useHistory } from 'react-router-dom';
//styles and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//redux
import { useSelector } from 'react-redux';
//image resize
import {smallImage} from '../util';
//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

//platform image function
const getPlatform = (platform) => {
    switch(platform){
        case "PlayStation 4":
            return playstation;
        case "Xbox One":
            return xbox;
        case "PC":
            return steam;
        case "Nintendo Switch":
            return nintendo;
        case "iOS":
            return apple;
        default:
            return gamepad;
    }
}

//get stars
const getStars = (rating) => {
    const stars = [];
    const starRating = Math.floor(rating);
    for(let i = 1; i<=5; i++) {
        if (i <=starRating){
            stars.push(<img alt="star" key={i} src={starFull}></img>)
        } else{
            stars.push(<img alt="star" key={i} src={starEmpty}></img>)
        }
    }
    return stars;
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    &::-webkit-scrollbar{
            width: 0.5rem;
        }
    &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
    &::-webkit-scrollbar-track{
            background: white;
        }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }
    @media (max-width: 550px) {
            padding: 1rem;
            img{
                width: 100%;
            }
        }

`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 1rem;
        height: 1rem;
        display: inline;
    }

    @media (max-width: 550px) {
            flex-direction: column;
        }


`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    img{
        margin-left: 3rem;
    }

    @media (max-width: 550px) {
            img{
                width: 90%;
                margin: 2rem auto;
            }
            flex-direction: column;
        }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0;
    @media (max-width: 550px) {
            p{
                font-size: 12px;
            }
        }
`;


export default function GameDetail({pathId}) {
    const history = useHistory();
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains("shadow")){
            document.body.style.overflow = 'auto';
            if(history.location.pathname === `/playing/${pathId}`){
                history.push('/playing');
            } else{
                history.push('/');
            }
        }
    }
    const {screen, game, isLoading} = useSelector(state => state.detail)
    return (
        <>
        {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
            <Detail layoutId={pathId}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                        <p>Rating: {game.rating}</p>
                        {getStars(game.rating)}
                    </div>

                        <Info>
                            <Platforms>
                                {game.platforms.map(platform => (
                                    <img key={platform.platform.id} src={getPlatform(platform.platform.name)} alt={platform.platform.name}></img>
                                ))}
                            </Platforms>
                        </Info>
                </Stats>
                <Media>
                    <motion.img layoutId={`image ${pathId}`}src={smallImage(game.background_image, 1280)} alt="image"/>
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map(screen=>(
                        <img src={smallImage(screen.image, 1280)} key={screen.id} alt="game"/>
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
    )
}
