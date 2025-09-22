// importiamo la connessione al db
const connection = require('../data/db');

// index
const index = (req, res) => {
const sql = "SELECT * FROM movies";

connection.query(sql, (err, results) => {
if (err) return res.status(500).json ({error: `errore nell'esecuzione della query ${err}`});

res.send(results);

});

// show
const show = (req, res) => {
  console.log("Metodo show");
};}





// esportiamo 
module.exports = {
  index,
  show
}