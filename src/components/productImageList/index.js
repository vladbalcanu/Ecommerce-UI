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
import { selectError, selectIsPending, selectProduct } from '../../store/product/selectors';
import { getProduct } from '../../store/product/thunks';
import { ImageListItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import { setProduct } from '../../store/product';



export default function ProductImageList({imageList}) {

    const [displayOrder, setDisplayOrder] = useState(0);
    const [currentImage, setCurrentImage] = useState("");
   
    function showPreviousPhoto(event) {
        console.log("Moving to previous image");
        setDisplayOrder(displayOrder - 1);
        console.log(displayOrder);
    }
    function showNextPhoto(event) {
        console.log("Moving to next image");
        setDisplayOrder(displayOrder + 1);
        console.log(displayOrder);
    }
    useEffect(() => {
        imageList && imageList.filter(item => item.display_order == displayOrder).map(item => setCurrentImage(item.image.large));
    }
    )
    return (
        <div>
            {imageList && <Card sx={{ maxWidth: 1000, height: 400, backgroundColor: "white", boxShadow: 10, alignItems: "center" }} >
                <div className={styles.imageList}>
                    <IconButton area-label="Go-Back" sx={{ color: "inherit" }} onClick={showPreviousPhoto} size="large">
                        <SkipPreviousIcon></SkipPreviousIcon>
                    </IconButton>
                    <CardMedia
                        component="img"
                        maxWidth="800"
                        height="400"
                        align="bottom"
                        image={currentImage}
                        alt="Whatever"
                    />
                    <div className={styles.nextButton}>
                    <IconButton area-label="Go-Back" sx={{ color: "inherit" }} onClick={showNextPhoto} size="large" alignItems="right">
                        <SkipNextIcon></SkipNextIcon>
                    </IconButton>
                    </div>
                </div>
            </Card>}
        </div>
    );

}