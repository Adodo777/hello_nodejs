const express = require('express');
const app = express();
const connectToDB = require('./api/config/database');
const logMiddlewares = require('./api/middlewares/logs.middlewares');
const errorMiddleware = require('./api/middlewares/error.middleware');

connectToDB();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(logMiddlewares);
app.use(errorMiddleware);

app.use('/api/customers', require('./api/routes/customer.route'));
app.use('/api/products', require('./api/routes/product.route'));
app.use('/api/orders', require('./api/routes/order.route'));



app.listen(3000, () => {
    console.log('Serveur is running on port 3000')
})

