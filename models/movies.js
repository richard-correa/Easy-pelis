const fs = require("fs");
const path = require("path");
const dataPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "movies.json"
);
const GetALLFromFiles = function (cb) {
  fs.readFile(dataPath, function (error, data) {
    if (error) {
      cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
};

module.exports = class movies {
  constructor(id, name, description, status, categories, imgUrl) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.categories = categories;
    this.imgurl = imgUrl;
  }

  save() {
    GetALLFromFiles((movies) => {
      if (this.id) {
        const editMovies = movies.findIndex((mov) => mov.id === this.id);

        movies[editMovies] = this;

        fs.writeFile(dataPath, JSON.stringify(movies), function (error) {
          console.log(error);
        });
      } else {
        this.id = Math.random().toString();
        movies.push(this);
        fs.writeFile(dataPath, JSON.stringify(movies), function (error) {
          console.log(error);
        });
      }
    });
  }
  static GetALL(cb) {
    GetALLFromFiles(cb);
  }

  static GetById(id, cb) {
    GetALLFromFiles((movies) => {
      const movie = movies.find((m) => m.id === id);
      cb(movie);
    });
  }

  static Delete(id) {
    GetALLFromFiles((movies) => {
      const movie = movies.find((m) => m.id === id);
      const NewMovieList = movies.filter((mov) => mov.id !== id);
      fs.writeFile(dataPath, JSON.stringify(NewMovieList), function (error) {
        console.log(error);
      });
    });
  }
};
