// controllers/pokeneaController.js
const pokeneas = require('../models/pokeneaModel');

const getRandomPokenea = (req, res) => {
    const randomPokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
    res.json({ id: randomPokenea.id, name: randomPokenea.name, height: randomPokenea.height, ability: randomPokenea.ability, containerId: process.env.CONTAINER_ID });
};

const getPokeneaImageAndPhilosophy = (req, res) => {
    const randomPokenea = pokeneas[Math.floor(Math.random() * pokeneas.length)];
    res.send(`<img src="${randomPokenea.imageUrl}" alt="${randomPokenea.name}"><p>${randomPokenea.philosophy}</p><p>Container ID: ${process.env.CONTAINER_ID}</p>`);
};

module.exports = { getRandomPokenea, getPokeneaImageAndPhilosophy };
