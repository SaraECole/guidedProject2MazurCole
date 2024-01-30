// mongodb client driver
const { MongoClient } = require("mongodb");

// DB Connection URL
var url = "mongodb://127.0.0.1:27017";

// Create client
const client = new MongoClient(url);

// Database and collection variables
const dbName = "swapi";
const collectionFilms = "films";
const collectionCharacters = "characters";
const collectionPlanets = "planets";
const collectionFilmsCharacters = "filmsCharacters";
const collectionFilmsPlanets = "filmsPlanets";

module.exports.call = async function call(operation, parameters, callback) {
  // connect to the db server
  await client.connect();

  // set the database to use
  const db = client.db(dbName);

  switch (operation) {
    case 'findAllPlanets':
      const collection = db.collection(collectionPlanets);
      const planets = await collection.find({}).toArray();
      callback({ planets: planets });
      break;
    default:
      break;
  }
  console.log("call complete: " + operation);
  client.close();
  return "call complete";
};

