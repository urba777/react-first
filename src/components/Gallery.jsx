import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import API from '../shared/picsumphotos'; //is cia paimamas json'u URL

const Gallery = ({ photoListState, handleAscending, handleRandom, handleDescending, userErrorState }) => {

    
 
    return (
        <>
            <Carousel showThumbs={false} >
                {photoListState.map(image =>
                    <div >
                        <img src={image.download_url} />
                        <p className="legend">{image.author}</p>
                    </div>
                )}
            </Carousel>
            <p style={{ color: 'red' }}>{userErrorState}</p>
            <div className="inlineBox">
                <button className={'myButton'} onClick={handleAscending}>ASC</button>
                <button className={'myButton'} onClick={handleDescending}>DESC</button>
                <button className={'myButton'} onClick={handleRandom}>RANDOM</button>
            </div>


        </>

    )
}

export default Gallery;