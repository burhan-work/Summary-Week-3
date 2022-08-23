
// let user = "burhan";
// let product = "sepatu";

// method mengucapkan selamat datang kepada user
function sayHi(user) {
    alert("Hallo " + (user));
}
// export{sayHi}

// method mengucapkan terima kasih untuk pembelian
function sayThanks(user, product) {
    alert("Thanks you " + (user) + " for your purchase of " + (product));
}
// export{sayThanks}

export {
    sayHi as hi,
    sayThanks as thanks
}