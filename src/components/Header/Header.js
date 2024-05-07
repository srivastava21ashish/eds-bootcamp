// Header.js
import React, { useEffect } from "react";
import './Header.css';
import $ from "jquery";
import logo from '../../assets/VeniaLogo-n77.svg';
import { updateCartCount } from '../../utils/CartUtil';

export default function Header() {
  useEffect(() => {
    $("button.nav-m-menu").unbind('click').on('click', function(){
      $(this).next().toggleClass('show');
      $(this).next().find('.container').toggleClass('hide');
      $('body').toggleClass('no-scroll');
    });
    
    $(".m-menu button.m-menu-close").unbind('click').on('click', function(){
      $(this).parents('.m-menu').toggleClass('show');
      $(this).parents('.m-menu').find('.container').toggleClass('hide');
      $('body').toggleClass('no-scroll');
    });

    updateCartCount();
  });

  return (
    <header>
      <div className="container grid">
        <div className="grid-s-col-1 grid-v-center hide show-m">
          <button className="nav-m-menu"></button>
          <div className="m-menu">
            <div className="container hide flex flex-column">
                <div className="m-header flex flex-space flex-center">
                    <button type="button" className="m-menu-back hide"></button>
                    <div className="text-head-m">Shop Categories</div>
                    <button type="button" className="m-menu-close open"></button>
                </div>
                <div className="row">
                  <ul>
                    <li><a href="./">Home</a></li> 
                    <li><a href="./category?category=women's%20clothing">Women</a></li> 
                    <li><a href="./category?category=men's%20clothing">Men</a></li> 
                    <li><a href="./category?category=electronics">Electronics</a></li> 
                    <li><a href="./category?category=jewelery">Jewellery</a></li> 
                  </ul>
                </div>
                <div className="m-bottom flex flex-space flex-center text-body-m">
                  <div className="icon-user">Account</div>
                  <a href="./">Sign In</a>
              </div>
            </div>
        </div>
        </div>
        <div className="grid-col-3 grid-s-col-1 grid-v-center align-center">
          <a href="index.html" className="logo">
            <img src={logo} alt="Venia" />
          </a>
        </div>
        <nav className="grid-col-6 grid-s-col-1 flex flex-center hide-m">
          <ul className="pd-lr-10">
            <li><a href="./">Home</a></li>
            <li><a href="./category?category=women's%20clothing">Women</a></li>
            <li><a href="./category?category=men's%20clothing">Men</a></li>
            <li><a href="./category?category=electronics">Electronics</a></li>
            <li><a href="./category?category=jewelery">Jewellery</a></li>
          </ul>
        </nav>
        <nav className="grid-col-3 grid-s-col-1 flex flex-center flex-s-right">
          <ul>
            <li><a href="./" className="icon-search"><span className="hide-l">Search</span></a></li>
            <li className="hide-m">
              {/* eslint-disable-next-line */}
              <a className="icon-user"><span className="hide-l">Sign in</span></a>
              <div className="submenu-signin">
                <div className="container">
                  <div className="text-head-l row">Sign in to your Account</div>
                  <form>
                    <div className="row">
                      <label htmlFor="email">Email:</label><br/>
                      <input type="email" id="email" name="email" />
                    </div>
                    <div className="row">
                      <label htmlFor="password">Password:</label><br/>
                      <input type="password" id="password" name="password" />
                    </div>
                    <div className="row">
                      <a href="./" className="text-link">Forgot Password?</a>
                    </div>
                    <div className="row align-center">
                    <button className="primary text-body-s mr-b-10">Sign in</button>
                    <hr />
                    <button className="secondary text-body-s mr-t-10">Create account</button>
                  </div>
                  </form>
                </div>
              </div>
            </li>
            {/* eslint-disable-next-line */}
            <li><a href="./cart" className="icon-shoppingbag"><span className="cart-counter text-head-s hide">0</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}