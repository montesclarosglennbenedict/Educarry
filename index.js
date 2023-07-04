const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const viewsPath = path.join(__dirname, 'src/views');
const routePath = path.join(__dirname, 'src/routes');

app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'src/public')));

// Include routes dynamically
fs.readdirSync(routePath).forEach(folder => {
  const routeFile = path.resolve(routePath, folder, 'index.js');
  if (fs.existsSync(routeFile)) {
    const route = require(routeFile);
    if (folder === 'index') {
      app.use('/', route); // Use root path ("/") for the index route
    } else {
      app.use(`/${folder}`, route); // Use folder name for other routes
    }
  }
});

// Handle the root path ("/")
const rootRouteFile = path.join(routePath, 'index.js');
if (fs.existsSync(rootRouteFile)) {
  const rootRoute = require(rootRouteFile);
  app.use('/', rootRoute);
}

// Error handler middleware
function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).send('Internal Server Error');
}

app.use(errorHandler);

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

