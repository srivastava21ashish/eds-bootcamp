import Cookies from "universal-cookie";

export function addCookie(key, value) {
    if (key && value) {
        var cookie = new Cookies();
        let items = cookie.get(key) ? [cookie.get(key)] : [];
        items.push(value);
        cookie.set(key, items.join(','), { maxAge: 60 * 60 * 24 * 365, path: '/' });
    }
}

export function getCookie(key) {
    if (key) {
        var cookie = new Cookies();
        let items = cookie.get(key) ? [cookie.get(key)] : [];
        return items;
    }
}

export function removeCookie(key, value) {
    if (key && value) {
        var cookie = new Cookies();
        var cookieStr = cookie.get(key).toString();
        var items = cookieStr ? (cookieStr.indexOf(',') > 0 ? cookieStr.split(',') : [cookieStr]) : [];
        while (items.indexOf(value.toString()) > -1) {
            var index = items.indexOf(value.toString());
            items.splice(index, 1);
        }

        /*var index = items.indexOf(value.toString());
        if (index !== -1) {
            items.splice(index, 1);
        }*/
        cookie.set(key, items.toString(), { maxAge: 60 * 60 * 24 * 365, path: '/' });
    }
}

export default addCookie('','');