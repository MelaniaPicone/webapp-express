// importiamo la connessione al db
const connection = require('../data/db');

// index
const index = (req, res) => {
  // creo la query
const sql = "SELECT * FROM movies";

// eseguo la query
connection.query(sql, (err, results) => {
if (err) return res.status(500).json ({error: `errore nell'esecuzione della query ${err}`});

res.send(results);

});

// show
const show = (req, res) => {
// recupero id parametro
const {id} = req.params;

// creo la query film
const sqlMovie = "SELECT * FROM movies WHERE id = ?";

// query recensioni
const sqlReviews = "SELECT * FROM reviews WHERE movie_id = ?";

// eseguo la query
connection.query(sqlMovie, [id], (err, resultMovie) => {
if (err) return res.status(500).json ({error: `errore nell'esecuzione della query: ${err}`});

if (resultMovie.length === 0 || resultMovie[0].id === null) return res.status(404).json({error: `film non trovato`});


// eseguo la query delle reviews
connection.query(sqlReviews, [id], (err,resultReviwes) => {
if (err) return res.status(500).json ({error: `errore nell'esecuzione della query: ${err}`});


// nuovo oggetto contenente i dati del film e l'array delle recensioni
const moviesWhithReviews = {
  ...resultMovie[0],
  reviews: resultReviwes
}

res.send(moviesWhithReviews);


});

  res.send(resultMovie[0]);

});

}};





// esportiamo 
module.exports = {
  index,
  show
};