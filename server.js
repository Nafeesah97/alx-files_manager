const express = require('express');
import route from './routes';
const app = express();

const port = process.env.PORT || 5000;

route(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
