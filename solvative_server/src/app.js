const express = require('express');
const cors = require('cors');
const placeRoute=require('./router/placeRoute')
const AppServer = () => {
    const app = express();
    app.use(cors())
    const port = process.env.PORT
    app.use('/api/places', placeRoute);
    app.listen(port, () => {
        console.log(`Server running on ${port}`);
    });
    return app;
};
module.exports = AppServer;
