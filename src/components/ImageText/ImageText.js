// ImageText.js
import React from 'react';
import './ImageText.css';
import bannerImg from '../../assets/Product Image.png';


export default function ImageText() {
    const imgStyle = { backgroundImage : 'url("' + bannerImg + '")'} ;

    return (
        <div className="row image-text flex">
          <div className="image-text-desc">
              <h2 className="display-l font-serif">Take off in the new<br />Signature Legging</h2>
              <h3 className="text-head-l">Lorem Ipsum Dolor Tempor</h3>
              <p>
                <span className="text-body-s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</span>
              </p>
              <p className="image-text-cta">
                <button className="secondary text-body-s" href="">Shop Collection</button> 
                <button className="primary text-body-s" href="">Shop Now</button>
              </p>
              <hr />
          </div>
          <div className="image-text-img" style={imgStyle}></div>
        </div>
    );
}