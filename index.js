const express = require('express');
const AppRouter = require('./src/routes/index.routes');
const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'))
AppRouter(app);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
