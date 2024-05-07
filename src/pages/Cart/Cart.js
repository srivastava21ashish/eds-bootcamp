import './Cart.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import React, { useEffect, useState } from 'react';
import { getCookie, removeCookie } from '../../utils/CookieUtil';

export default function Cart() {
    const [prod, setProd] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const cartProdList = getCookie('venia-cart').toString();
    const cartProdArr = cartProdList ?  cartProdList.split(',') : [];
    const prodArrObj = [];
    

    cartProdArr.forEach(id => {
      let dup = false;
      prodArrObj.forEach(item => { 
          if (item.id === id) {
            item.quantity += 1;
            dup = true;
          }
      });
      if (!dup) {
        prodArrObj.push({id: id, quantity: 1});
      } 
    }); 

    useEffect(() => {
      const fetchProd = (prodObj) =>
        fetch('https://fakestoreapi.com/products/' + prodObj.id)
        .then(response => response.json())
        .then(data => { 
          data.quantity = prodObj.quantity;
          setProd(prevProd => ([ ...prevProd, data]));
          setSubtotal(prevSub => prevSub + data.price * data.quantity);
        })
        .catch(error => console.error(error));

      prodArrObj.forEach(prodObj => {
        fetchProd(prodObj);
      });
      // eslint-disable-next-line 
    }, []);

    const removeClick = (prodId) => { 
      removeCookie('venia-cart', prodId); 
      window.location.reload(false);
    };
    
    return (
      <>
        <Header />
        <main>
          <div className="container shopping-bag">
            <div className="row">
              <h1 className="display-xl">Your Shopping Bag</h1>
              <hr />
            </div>
            <div className="row cart flex">
              <div className="cart-list">
                {prod.map((prod, index) => (
                  <div key={index} className="container grid">
                    <div className="cart-item-img grid-col-2 grid-s-col-1 grid-s-row-3"><img src={prod.image} alt={prod.title}/></div>
                    <div className="grid-col-4 grid-s-col-2">
                      <span className="text-head-m">{prod.title}</span><br/>
                      <span className="text-body-m">{prod.price}</span>
                    </div>
                    <div className="grid-col-3 grid-s-col-2"><input type="text" id="quantity" value={prod.quantity} readOnly></input></div>
                    <div className="grid-col-3 grid-s-col-2">
                      <button id="removeFromCart" onClick={() => removeClick(prod.id)}>
                        <i className="bin-icon"></i>Remove Item
                      </button>
                    </div>
                  </div>
                ))
              }</div>
              <div className="cart-summary">
                <div className="header text-head-l">Price Summary</div>
                <table className="text-body-m">
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td className="align-right">${subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Estimated Tax</td>
                      <td className="align-right">${(subtotal * 0.11).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Estimated Shipping</td>
                      <td className="align-right">FREE</td>
                    </tr>
                    <tr className="text-head-m">
                      <td>Estimated Total</td>
                      <td className="align-right">${(subtotal * 1.11).toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }