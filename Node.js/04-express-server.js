const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('dev'));
app.use(cors());


// all (toutes les méthodes HTTP)
// et toutes les URLs qui commencent par /api
app.use('/api', (req, res, next) => {
  // en général use est réservé aux middlewares (plugins)
  // par exemple on pourrait écrire un access log
  console.log(`${req.method} ${req.url}`);
  next();
});

// all (toutes les méthodes HTTP)
app.all('/', (req, res) => {
  res.send('Home');
});

app.get('/hello', (req, res) => {
  // req -> express.Request -> http.IncomingMessage
  // res -> express.Response -> http.ServerResponse
  res.send('Hello World');
});

app.get('/api/hello', (req, res) => {
  // req -> express.Request -> http.IncomingMessage
  // res -> express.Response -> http.ServerResponse
  res.json({ msg: 'Hello World' });
});

app.get('/api/bonjour/:name', (req, res, next) => {

  if (req.params.name === 'Toto') {
    res.locals.errorMsg = 'Toto not found';
    return next();
  }

  if (req.params.name === '123') {
    return next(new Error('Invalid name'));
  }

  // req -> express.Request -> http.IncomingMessage
  // res -> express.Response -> http.ServerResponse
  res.json({ msg: 'Hello ' + req.params.name });
});

// app.post('/api/user', express.json());
// app.post('/api/user', (req, res) => {
//   console.log(req.body);
//   res.json({ msg: 'User created' });
// });

app.post('/api/user', express.json(), (req, res) => {
  console.log(req.body);
  res.json({ msg: 'User created' });
});

app.use((req, res, next) => {
  res.status(404).json({msg: res.locals.errorMsg ?? 'Not Found'});
});

app.use((err, req, res, next) => {
  res.status(500).json({msg: err.message ?? 'Error'});
});

// app.listen(serverHttpDeNode);
app.listen(8080, () => {
  console.log('Server started on http://localhost:8080');
});
