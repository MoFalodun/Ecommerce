const express = require('express');
const logger = require('morgan');
require('dotenv').config();
const { productRouter, userRouter, ratingRouter } = require('./routes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(logger('dev'));

app.get('/', (req, res) => res.json({ welcome: 'hello' }));
app.use(productRouter);
app.use(userRouter);
app.use(ratingRouter)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
