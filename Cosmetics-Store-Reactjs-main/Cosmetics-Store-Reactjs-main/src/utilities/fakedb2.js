// use localStorage as your db for now

const addToDB = (id) => {
    const exists = getDB();
    console.log(exists);
    let shopping_cart;
    if (!exists) {
        shopping_cart = {};
        shopping_cart[id] = 1;
    }
    else {
        shopping_cart = JSON.parse(exists);
        if (shopping_cart[id]) { // if same id exists
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }
        else {
            shopping_cart[id] = 1;
        }
    }
    updateDB(shopping_cart);
}

const getDB = () => localStorage.getItem('shopping-cart');

const updateDB = (cart) => {
    window.location.reload();
    const cartStringified = JSON.stringify(cart);
    return localStorage.setItem('shopping-cart', cartStringified);
}

const removeDB = (id) => {
    const exists = getDB();
    if (exists) {
        const shopping_cart = JSON.parse(exists)
        delete shopping_cart[id];
        updateDB(shopping_cart)
    }
}

//----------------------------------

const showDB = (id) => {
    const exists = getDB();
    if (exists) {
        const shopping_cart = JSON.parse(exists);
        return shopping_cart[id];
    }
}
showDB();

export { addToDB, removeDB, showDB };