import './Category.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import React, { useEffect, useState } from 'react';
import { addCookie } from '../../utils/CookieUtil';
import { updateCartCount } from '../../utils/CartUtil';

export default function Category() {
  const [bannerImg, setBannerImg] = useState(null);
  const [bannerCat, setBannerCat] = useState(null);
  const [prodList, setProdList] = useState([]);
  const queryParameters = new URLSearchParams(window.location.search);
  const category = queryParameters.get("category");

  useEffect(() => {
    if (category) {
      fetch('https://fakestoreapi.com/products/category/' + category)
        .then(response => response.json())
        .then(data => {
          setBannerImg(data[0].image);
          setBannerCat(data[0].category);
          setProdList(data);
        })
        .catch(error => console.error(error));
    }
  }, [category]);

  const cartClick = (prodId) => { 
    addCookie('venia-cart', prodId); 
    updateCartCount();
  };
  const favClick = (prodId) => { addCookie('venia-fav', prodId); };
  
  const imgStyle = { backgroundImage : 'url("' + bannerImg + '")'} ;
  const prodImgStyle = (src) => ({ backgroundImage : 'url("' + src + '")'});

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="row category-banner grid-col-12 flex">
            <div className="category-banner-desc">
              <h1 className="display-xl font-serif">{bannerCat}</h1>
              <hr />
            </div>
            <div className="category-banner-img" style={imgStyle}></div>
          </div>
          <div className="row product-list">
            <div className="container grid">
              {prodList.map((prod, index) => (
                <div key={prod.id} className="product grid-col-4 grid-s-col-2">
                  <a href={"./product?id=" + prod.id}>
                    <div className="product-img" style={prodImgStyle(prod.image)}></div>
                    <div className="product-title text-head-m">{prod.title}</div>
                    <div className="product-price text-body-m">${prod.price}</div>
                  </a>
                  <div className="product-action text-body-m">
                    <button id="addToCart" onClick={() => cartClick(prod.id)}><i className='cart-icon'></i></button>
                    <button id="addToFav" onClick={() => favClick(prod.id)}><i className='fav-icon'></i></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
