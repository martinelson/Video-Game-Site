import React from 'react';
//styles and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {popIn} from '../animation';
//redux
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction';
//media
import {smallImage} from '../util';

const StyledReview = styled(motion.div)`
    @media (max-width: 900px) {
        img{
            max-width: 90%;
            margin: 1rem auto;
            padding: 0;
        }
    }

`

export default function ReviewComponent({name, released, image, id}) {
    const stringPathId = id.toString();
    //Load Details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {   
        document.body.style.overflow='hidden';
        dispatch(loadDetail(id))
    }
    return (
        <StyledReview layoutId={stringPathId} onClick={loadDetailHandler} variants={popIn} initial='hidden' animate='show'>
            <motion.h2 layoutId={`title ${stringPathId}`}>{name}</motion.h2>
            <p>{released}</p>
            <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image,640)} alt={name}/>
        </StyledReview>
    )
}
