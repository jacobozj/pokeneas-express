// index.js
require('dotenv').config(); // Cargar variables de entorno desde .env

const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Cargar el puerto desde .env o usar 3000 por defecto
const pokeneaRoutes = require('./src/routes/pokeneaRoutes');

app.use(pokeneaRoutes);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
