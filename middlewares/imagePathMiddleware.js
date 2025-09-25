const setImagePath = (req, res, next) => {
req.setImagePath = `${req.protocol}://${req.get('host')}/imgs/movies/`;
next();

};

module.exports = setImagePath;