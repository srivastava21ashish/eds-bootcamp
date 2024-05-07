import $ from "jquery";
import { getCookie } from './CookieUtil';

export function updateCartCount() {
    let cartProdList = getCookie('venia-cart').toString();
    let count = cartProdList ?  cartProdList.split(',').length : 0;
    $('.cart-counter').html(count);
    if (count > 0) {
        $('.cart-counter').removeClass('hide');
    } else {
        $('.cart-counter').addClass('hide');
    }
}