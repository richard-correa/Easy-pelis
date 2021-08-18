const MoviesModels = require("../models/movies");

exports.GetAddMovie = (req, res, next) => {
  res.render("add", {
    addActive: true,
    pageTitle: "Add movie",
    EditMode: false,
    adminActive: true,
  });
};

exports.PostAddMovie = (req, res, next) => {
  const name = req.body.name;
  const imgurl = req.body.imgurl;
  const Description = req.body.Description;
  const status = req.body.status;
  const categories = req.body.categories;
  const movie = new MoviesModels(
    null,
    name,
    Description,
    status,
    categories,
    imgurl
  );
  movie.save();
  res.redirect("/index");
};

exports.GetEditMovie = (req, res, next) => {
  const movieId = req.params.movieId;
  const edit = req.query.edit;
  if (!edit) {
    return res.redirect("/index");
  }
  MoviesModels.GetById(movieId, (movie) => {
    res.render("add", {
      pageTitle: "Edit movie",
      EditMode: edit,
      movie: movie,
      adminActive: true,
    });
  });
};

exports.PostEditMovie = (req, res, next) => {
  const id = req.body.movieId;
  const name = req.body.name;
  const imgurl = req.body.imgurl;
  const Description = req.body.Description;
  const status = req.body.status;
  const categories = req.body.categories;
  const movie = new MoviesModels(
    id,
    name,
    Description,
    status,
    categories,
    imgurl
  );
  movie.save();
  res.redirect("/index");
};
exports.PostDeleteMovie = (req, res, next) => {
  const id = req.body.movieId;

  MoviesModels.Delete(id);
  res.redirect("/index");
};
