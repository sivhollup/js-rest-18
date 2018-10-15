const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const tvShowRouter = require('./tvShow/tvShowRouter');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

const port = 3000;

app.get('/', (request, response) => response.send('Hello World'));

app.use('/tvshow', tvShowRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); 
});
