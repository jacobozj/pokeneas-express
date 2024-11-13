// index.js
require('dotenv').config(); // Cargar variables de entorno desde .env

const express = require('express');
const app = express();
const port = 80;
const pokeneaRoutes = require('./src/routes/pokeneaRoutes');

app.use(pokeneaRoutes);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
