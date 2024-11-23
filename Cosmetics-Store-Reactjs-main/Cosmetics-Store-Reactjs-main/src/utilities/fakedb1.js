// use localStorage as your db for now

const addToDB = id => {
    const exists = localStorage.getItem(id);
    console.log(exists);
    if (!exists) {
        localStorage.setItem(id, 1);
    }
    else {
        const newCount = parseInt(exists) + 1;
        localStorage.setItem(id, newCount);
    }
}

export { addToDB };