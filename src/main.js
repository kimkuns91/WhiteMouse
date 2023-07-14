// @ts-check

require('dotenv').config()

const app = require('./app');
const { chat } = require('./chat');

const { PORT } = require('./common')
const mongo = require('./mongo');


mongo.connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening at ${PORT}`);
    }) 
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  });

chat()
