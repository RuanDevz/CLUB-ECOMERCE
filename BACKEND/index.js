const express = require('express');
const db = require('./models'); 
const cors = require('cors');
const { Pool } = require('pg'); // Import Pool from pg
require('dotenv').config();

const app = express();

const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories')

app.use(express.json());
app.use(cors());

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL, 
});

app.use('/products', productsRouter);
app.use('/categories', categoriesRouter)

db.sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        return db.sequelize.sync();
    })
    .then(() => {
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}...`);
        });
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });
