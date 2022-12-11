import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const CircleTimerCount = () => {
    return (
        <div >
            <CountdownCircleTimer
                size={50}
                strokeWidth={6}
                isPlaying
                duration={15}
                colors={['#19b27b', '#eff701', '#ff9900', '#a30026']}
                colorsTime={[ 15, 10, 5, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    );
};

export default CircleTimerCount;
