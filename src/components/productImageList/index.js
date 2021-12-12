import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import styles from './imageList.module.css';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectProduct } from '../../store/product/selectors';
import { getProduct } from '../../store/product/thunks';



export default function ProductImageList({ image }) {
    const [currentImage,setCurrentImage]=useState("");
    const [imageIndex,setImageIndex]=useState("1");
    const dispatch = useDispatch();
    const product = useSelector(selectProduct);

    useEffect(()=>{
        dispatch(getProduct("5"));
    },[])



    function showPreviousPhoto(event){
        console.log("Moving to previous image");
        setImageIndex(parseInt(imageIndex)+1);
        setCurrentImage("");
        console.log(imageIndex);
    }
    function showNextPhoto(event){
        console.log("moving to next image");
        setImageIndex(parseInt(imageIndex)-1);
        console.log(imageIndex);
    }

    return (
        <Card sx={{ maxWidth: 800 }}>
            <div className={styles.imageList}>
                <IconButton area-label="Go-Back" sx={{nr:15}} onClick={showPreviousPhoto} size="large">
                    <SkipPreviousIcon></SkipPreviousIcon>
                </IconButton>

                <CardMedia
                    component="img"
                    height="400"
                    width="600"
                    image={image}
                    alt="Whatever"
                />
                 <IconButton area-label="Go-Back" sx={{nr:15}} onClick={showNextPhoto} size="large">
                    <SkipNextIcon></SkipNextIcon>
                </IconButton>
            </div>
        </Card>

    );

}