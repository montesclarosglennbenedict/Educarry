const express = require('express');
const path = require('path'); 
const app = express();

// Set 'views' directory and template engine
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// Include the routes
const indexRouter = require('./src/routes/index');
app.use('/', indexRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
