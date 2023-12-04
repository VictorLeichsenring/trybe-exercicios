const express = require('express');
const { futimesSync, read } = require('fs');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

async function readFile() {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch(error) {
    console.error(`Arquivo não pode ser lido: ${error}`);
  }
}
async function addMovie(movieData) {
  try {
    const oldMovies = await readFile();
    const {movie, price} = movieData;
    const newMovie = {
      id: oldMovies[oldMovies.length - 1].id + 1,
      movie,
      price
    };
    const updatedMovies = JSON.stringify([...oldMovies, newMovie]);
    await fs.writeFile(moviesPath, updatedMovies);
  } catch(error) {
    console.log(`Arquivo não pode ser lido: ${error}`);
  }
}

async function updateMovie(id, updatedMovieData) {
  try {
    const movies = await readFile();
    const updateMovie = {id, ...updatedMovieData}
    const updatedMovies = movies.reduce((moviesList, currentMovie)=> {
      if(currentMovie.id == updateMovie.id) return [...moviesList, updateMovie];
      return [...moviesList, currentMovie];
    }, []);

    const updateData = JSON.stringify(updatedMovies);
    try {
      await fs.writeFile(moviesPath, updateData);
      console.log(`Atualizou o movie com o id ${id}`);
    } catch (err) {
      console.log(`Erro na escrita do arquivo:${err}`)
    }
  } catch(error) {
    console.log(`Arquivo não pode ser lido: ${error}`)
  }
}

async function deleteMovie(id) {
  try {
    const oldMovies= await readFile();
    const newMovies = oldMovies.filter((movie) => movie.id !== parseInt(id));
    const updateData = JSON.stringify(newMovies);
    try {
      await fs.writeFile(moviesPath, updateData);
    } catch (err) {
      console.log(`Erro na escrita do arquivo:${err}`)
    }
  } catch(error) {
    console.log(`O arquivo não pode ser deletado: ${error}`)
  }
}

async function searchMovie(query) {
  try {
    const movies = await readFile();
    const movieSearched = movies.filter((movie) => movie.movie.includes(query));
    return movieSearched
  } catch(error) {
    console.log(`Arquivo não pode ser lido: ${error}`);
  }
}

app.get('/movies/:id', async (req,res) => {
  try {
    const movies = await readFile();
    const movie = movies.find(({ id }) => id === Number(req.params.id));
    res.status(200).json(movie);
  } catch(err) {
    res.status(500).send({message: err.message})
  }
});

app.get('/movies', async(req, res) => {
  try {
    const movies = await readFile();
    res.status(200).json(movies);
  } catch(err) {
    res.status(500).send({message: err.message})
  }
});

app.post('/movies', async (req, res) => {
  try{
    await addMovie(req.body);
    res.status(201).json(await readFile())
  } catch(err) {
    res.status(500).send({message: err.message})
  }
});

app.put('/movies/:id', async (req, res) => {
  try{
    const id = parseInt(req.params.id);
    const {movie, price} = req.body;
    await updateMovie(id, {movie, price})
    res.status(200).json(await readFile())
  } catch(error) {
    res.status(500).send({message: error.message})
  }
});

app.delete('/movies/:id', async (req, res) => {
  try{
    const id = parseInt(req.params.id);
    await deleteMovie(id);
    res.status(200).json(await readFile())
  } catch(error) {
    res.status(500).send({message: error.message})
  }
})

app.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (q) {
      const movies = await searchMovie(q)
      return res.status(200).json(movies);
    }
    res.status(200).end();
  } catch(error) {
    res.status(500).send({message: error.message});
  }
})

module.exports = app;