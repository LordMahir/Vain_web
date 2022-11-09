import React from 'react';
import './Home.css'

var sabkuch = require('..//assets/sabkuch.png');
var discord = require('..//assets/discord.png');

export default function Home() {
    return (
        <>
        <div className="heading">
                <h1> VAIN - AN APEX LEGENDS</h1>
        </div>
        <div className="heading2">
                <h1> ASSISTANT & TRACKER!</h1>
        </div>
        <div className="para">
                <h2>Vain is a mobile app that lets you track your apex legends stats, view map rotations, leaderboards, challenges, in-game store items, browse wallpapers, news and memes and create a custom apex gaming profile</h2>
        </div>
        <img src={sabkuch} className="sabkuch" />

        </>
    )
  }