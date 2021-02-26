import React from 'react';

import classes from './Header.module.css';
import videoSource from '../../assets/videos/video.mp4'

const BackgroundVideo = () => {
    //const videoSource = "https://www.w3schools.com/tags/movie.mp4"
    //const videoSource = '../../assets/videos/video.mp4'
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1>ZION'S CODERS</h1>
                    <p>web development agency</p>
                    <button type="button" className="btn btn-outline-dark">View the course</button>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo