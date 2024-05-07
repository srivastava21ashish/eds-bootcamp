// LocationBanner.js
import React from 'react';
import './LocationBanner.css';
import bannerImg from '../../assets/Group 172788.png';


export default function ImageText() {
    const imgStyle = { backgroundImage : 'url("' + bannerImg + '")'} ;

    return (
      <div className="row location-banner flex">
        <div className="location-banner-img" style={imgStyle}></div>
        <div className="location-banner-desc">
          <h2 className="display-l font-serif">Conquer your next adventure</h2>
          <h3 className="text-head-l">Lorem Ipsum Dolor Tempor</h3>
          <button className="marketing text-body-s" href="./category?category=electronics">Shop Devices</button>
        </div>
      </div>
    );
}