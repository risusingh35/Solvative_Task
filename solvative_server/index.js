require('dotenv').config();
const AppServer = require('./src/app');
const StartServer = () => {
    AppServer();
};
StartServer();