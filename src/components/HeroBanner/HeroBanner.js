// HeroBanner.js
import React from 'react';
import './HeroBanner.css';
import bannerImg from '../../assets/venia-hero.jpg';
import tileImg1 from '../../assets/women.jpg';
import tileImg2 from '../../assets/men.jpg';
import tileImg3 from '../../assets/jewellery.jpg';
import tileImg4 from '../../assets/electronics.jpg';


export default function HeroBanner() {
    const tileStyle1 = { backgroundImage : 'url("' + tileImg1 + '")'} ;
    const tileStyle2 = { backgroundImage : 'url("' + tileImg2 + '")'} ;
    const tileStyle3 = { backgroundImage : 'url("' + tileImg3 + '")'} ;
    const tileStyle4 = { backgroundImage : 'url("' + tileImg4 + '")'} ;

    return (
        <div className="row hero-banner">
          <img src={bannerImg} alt="Hero Banner" />
          <div className="hero-caption">
            <span className="header display-l">Shop the new Signature Collection</span>
            <span className="text-body-s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet accumsan dignissim. Fusce gravida felis ac ipsum luctus, sed scelerisque diam gravida.</span>
            <button className="primary text-body-s">Shop Now</button>
          </div>
          <div className="container banner-tiles grid">
            <a className="banner-tile grid-col-3" style={tileStyle1} href="./category?category=women's%20clothing">
              <div className="banner-tile-text">
                <h2 className="font-serif">Women</h2>
                <p className="text-body-s">Lorem ipsum dolor sit amet</p>
              </div>
            </a>
            <a className="banner-tile grid-col-3" style={tileStyle2} href="./category?category=men's%20clothing">
              <div className="banner-tile-text">
                <h2 className="font-serif">Men</h2>
                <p className="text-body-s">Lorem ipsum dolor sit</p>
              </div>
            </a>
            <a className="banner-tile grid-col-3" style={tileStyle3} href="./category?category=jewelery">
              <div className="banner-tile-text">
                <h2 className="font-serif">Jewellery</h2>
                <p className="text-body-s">Lorem ipsum dolor sit</p>
              </div>
            </a>
            <a className="banner-tile grid-col-3" style={tileStyle4} href="./category?category=electronics">
              <div className="banner-tile-text">
                <h2 className="font-serif">Electronics</h2>
                <p className="text-body-s">Lorem ipsum dolor sit</p>
              </div>
            </a>
          </div>
        </div>
    );
}