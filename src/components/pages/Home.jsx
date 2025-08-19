import React from 'react';
import styles from './Home.module.css';
import GifHome from '../GifHome';
import gifHome from '../../assets/gifHome.gif'

function Home() {
    return (
        <div className={styles.gifContainer}>
            <img src={gifHome} className={styles.gifImage} />
        </div>
    );
}

export default Home;