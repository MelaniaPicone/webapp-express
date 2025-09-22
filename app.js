// importo express e creo l'istanza dell'app
const express = require('express');
const app = express();

// definisco il numero di porta su cui deve girare l'app
const port = process.env.PORT || 3000;

// importiamo il router
const movieRouter = require("./routers/movieRouter");

app.use(express.static('public'));

// definisco la rotta base
app.get("/", (req, res) => {
  res.send("Rotta base del mio blog")
});

// rotta per i film
app.use("/api/movie", movieRouter);

// dico al server di restare in ascolto sulla porta 3000
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
});