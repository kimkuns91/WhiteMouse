// @ts-check

require('dotenv').config()

const app = require('./app');
const server = require('./socket');
// const { chat } = require('./chat');

const { PORT } = require('./common')
const { SOCKET_PORT } = require('./common')
const mongo = require('./mongo');


mongo.connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening at ${PORT}`);
    }) 
    server.listen(SOCKET_PORT, () => {
      console.log(`SOCKET_PORT running on ${SOCKET_PORT}`);
    });
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  });

// chat()
