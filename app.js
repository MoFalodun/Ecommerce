const express = require('express');
const logger = require('morgan');
const { productRouter, userRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(logger('dev'));

app.get('/', (req, res) => res.json({ welcome: 'hello' }));
app.use(productRouter);
app.use(userRouter);

app.listen(8080, () => {
  console.log(`Example app listening at http://localhost:${8080}`);
});
