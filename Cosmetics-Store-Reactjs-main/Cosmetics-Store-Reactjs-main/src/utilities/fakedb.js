// use localStorage as your db for now

const addToDB = (id) => {
    const items = getDB();
    let shopping_cart;
    if (!items) {
        shopping_cart = [];
        const pd = {};
        pd[id] = 1;
        shopping_cart.push(pd);
    }
    else {
        shopping_cart = JSON.parse(items);
        let update = 0;
        for (const cart of shopping_cart) {
            if (cart[id]) {
                cart[id] += 1;
                update += 1;
            }
        }
        if (update === 0) {
            const pd = {};
            pd[id] = 1;
            shopping_cart.push(pd);
        }
    }
    updateDB(shopping_cart);
}

const getDB = () => localStorage.getItem('shopping-cart-array');
const updateDB = (cart) => {
    window.location.reload();
    return localStorage.setItem('shopping-cart-array', JSON.stringify(cart));
}
const removeDB = (id) => {
    const items = getDB();
    const shopping_cart = JSON.parse(items);
    try {
        const remaining = shopping_cart.filter(item => parseInt(Object.keys(item)) !== id);
        console.log(remaining);
        localStorage.setItem('shopping-cart-array', JSON.stringify(remaining));
    }
    catch {

    }
    window.location.reload();
}

const showDB = (id) => {
    const items = getDB();
    if (items) {
        const shopping_cart = JSON.parse(items);
        const selected = shopping_cart.find(cart => cart[id]);
        console.log(selected);
        // console.log(selected[id]);
        try {
            return 'Added to Cart: ' + selected[id];
        }
        catch {
            return 'Not Added To Cart';
        }

    }
}

export { addToDB, removeDB, showDB };