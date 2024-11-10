const  homeView  = require('../views/home');

const home = ( req,res) => {
    res.send(homeView);
}

module.exports = { home };