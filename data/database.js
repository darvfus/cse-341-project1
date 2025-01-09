const dotenv = require(`dotenv`);
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const initDb = (callback) => {
    if (database) {
        console.log('DB is already initialised');
        return callback(null, database);
      }
      MongoClient.connect(process.env.MONGODB_URL)
        .then((client) => {
          database = client;
          callback(null, database);
        })
        .catch((err) => {
          callback(err);
        });
    };

    const getDatabase = () => {
        if (!database) {
          throw 'Database not initialised!';
        }
        return database;
      };
      
      module.exports = {
        initDb,
        getDatabase
      };


