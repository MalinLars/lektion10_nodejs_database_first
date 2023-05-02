/*
To start a new project
npm init -y
npm install better sqlite3
*/

//1. Import the database driver
const databaseDriver = require('better-sqlite3');

//2. Connect to the database
const db = databaseDriver ('bands.sqlite3');

//3. Send our first query
let statement = db.prepare('SELECT * FROM bands');

//4. Execute statement, receive results
let results = statement.all()

//5. check the results
console.log(results);

//6. Using parameters
let statement2 = db.prepare(`
SELECT * FROM bands WHERE genre = ?
`);

let results2 = statement2.all('Metal');

//console.log(results2[0]);

//7. using named parameters
let statement3 = db.prepare(`
SELECT * FROM bands WHERE genre = :genre
`);

let result3 = statement3.all({
    genre: 'Rock'
});

//console.log(result3[0]);

let table = 'bands';
//Insert something into the database
let insertStatement = db.prepare(`
INSERT INTO ${table} (name, genre) VALUES (:name, :genre)
`);

let resultOfInsert = insertStatement.run({
    name: 'Bathory',
    genre: 'Metal'
});


console.log(resultOfInsert);
