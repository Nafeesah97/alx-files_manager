const express = require('express');
const routes = require('./routes/index')
app = express();

const port = process.env.PORT || 5000;

app.use('/', routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
