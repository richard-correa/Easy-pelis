const MoviesModels = require("../models/movies");

exports.GetIndexController = (req, res, next) => {
  MoviesModels.GetALL(function (movies) {
    res.render("index", {
      indexActive: true,
      pageTitle: " admin gestor",
      mov: movies,
      adminActive: true,
      hasMovies: movies.length > 0,
    });
  });
};
exports.GetUser = (req, res, next) => {
  MoviesModels.GetALL(function (movie) {
    res.render("usuario", {
      pageTitle: " Easy pelis",
      mov: movie,
      inicioActive: true,
      hasMovies: movie.length > 0,
      userActive: true,
    });
  });
};
exports.GetFavorito = (req, res, next) => {
  res.render("favoritos", {
    pageTitle: " Peliculas favoritas",
    favorActive: true,
    userActive: true,
  });
};
exports.GetLogin = (req, res, next) => {
  res.render("login", {
    pageTitle: " Iniciar seccion",
  });
};
exports.GetTickets = (req, res, next) => {
  res.render("tickets", {
    pageTitle: " Compra",
    userActive: true,
  });
};
