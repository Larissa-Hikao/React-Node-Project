
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const itensRouter = require('../routes/itensRouter')


const app = express();


app.set('view engine', 'ejs');
app.set('views', 'view');

app.use(morgan('dev'));

app.use('/item',itensRouter)


app.get('/', (req, res, next) => {
  res.render('item/item', {
    titulo: 'Cadastrar novo Item'
  });
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000);