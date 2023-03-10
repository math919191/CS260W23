const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName){
    throw Error("Database credentials no configured, set up database")
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const scoreCollection = client.db('simon').collection('score');

function addScore(score){
    scoreCollection.insertOne(score);
}

function getHighScores(){
    const query = {};
    const options = {
        sort : {score: -1},
        limit : 10
    }
    const cursor = scoreCollection.find(query, options);
    return cursor.toArray() 
}
let example = {name : "playerName", score: 10, date: "12/12/12" } 
addScore(example)

module.exports = { addScore, getHighScores };
