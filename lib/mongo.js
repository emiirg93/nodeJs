const {MongoClient,ObjetId} = require('mongodb');
const {config} = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.DB_HOST}:${config.port}/${DB_NAME}?retryWrites=true&w=majority`;