import './Product.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import React, { useEffect, useState } from 'react';
import { addCookie } from '../../utils/CookieUtil';
import { updateCartCount } from '../../utils/CartUtil';

export default function Product() {
    const [prodImg, setProdImg] = useState(null);
    const [prodTitle, setProdTitle] = useState(null);
    const [prodPrice, setProdPrice] = useState(null);
    const [prodRate, setProdRate] = useState(null);
    const [prodRateCount, setProdRateCount] = useState(null);
    const [prodDesc, setProdDesc] = useState(null);

    const queryParameters = new URLSearchParams(window.location.search);
    const prodId = queryParameters.get("id");

    useEffect(() => {
        if (prodId) {
            fetch('https://fakestoreapi.com/products/' + prodId)
            .then(response => response.json())
            .then(data => {
                setProdImg(data.image);
                setProdTitle(data.title);
                setProdPrice(data.price);
                setProdRate(data.rating.rate);
                setProdRateCount(data.rating.count);
                setProdDesc(data.description);
            })
            .catch(error => console.error(error));
        }
    }, [prodId]);

    const cartClick = (prodId) => { 
        addCookie('venia-cart', prodId); 
        updateCartCount();
      };

    return (
      <>
        <Header />
        <main>
          <div className="container">
            <div className="row product">
                <div className="product-details flex">
                    <div className="product-img"><img src={prodImg} alt={prodTitle} /></div>
                    <div className="product-desc">
                        <div className="display-l font-serif">{prodTitle}</div>
                        <div className="text-body-l price">${prodPrice}</div>
                        <div className="text-body-s rating">{prodRate} ({prodRateCount})</div>
                        <div className="text-body-m desc"><span>{prodDesc}</span> <a href="#longdesc">Read more</a></div>
                        <hr />
                        <button className="primary" onClick={() => cartClick(prodId)}>Add to Cart</button>
                    </div>
                </div>
                <div id="longdesc" className="row product-longdesc">
                    <div className="display-l font-serif align-s-center">{prodTitle}</div>
                    <div className="text-body-l align-s-center">Description</div>
                    <div className="text-body-m">{prodDesc}</div>
                    <hr />
                </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }