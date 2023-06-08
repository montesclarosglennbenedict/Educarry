const express = require('express');
const path = require('path');
const app = express();

// Set 'views' directory and template engine
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('src/public'));

// ...

// Include the routes
const indexRouter = require('./src/routes/index');
app.use('/', indexRouter);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
