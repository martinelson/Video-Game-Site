import React from 'react';
import { Link } from 'react-router-dom';
//styles and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {popIn} from '../animation';
//redux
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction';
//media
import {smallImage} from '../util';

const GameStyle = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
    @media (max-width: 550px) {
            width: 80%;
            margin: 2rem auto;
        }
`;

export default function Game({name, released, image, id}) {
    const stringPathId = id.toString();
    //Load Details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow='hidden';
        dispatch(loadDetail(id))
    }
    return (
        <GameStyle layoutId={stringPathId} onClick={loadDetailHandler} variants={popIn} initial='hidden' animate='show'>
            <Link to={`/game/${id}`}>
            <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
            <p>{released}</p>
            <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image,640)} alt={name}/>
            </Link>
        </GameStyle>
    )
}
