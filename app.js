// importo express
const express = require('express');

//middlewares
const imagePathMiddleware = require('./middlewares/imagePathMiddleware');

const notFound = require('./middlewares/notFound');

const errorsHandler = require('./middlewares/errorsHandler')

// istanza dell'app
const app = express();

// definisco il numero di porta su cui deve girare l'app
const port = process.env.PORT || 3000;

// importiamo il router
const movieRouter = require("./routers/movieRouter");

app.use(express.static('public'));

app.use(imagePathMiddleware);

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