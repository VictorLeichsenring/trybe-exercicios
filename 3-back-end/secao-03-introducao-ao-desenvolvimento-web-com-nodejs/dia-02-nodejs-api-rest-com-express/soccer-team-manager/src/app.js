const express = require('express');

const app = express();
// const port = 3000;
app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

// //Query String
// app.get('/search', (req, res) => {
//   const {name, age} = req.query;
//   console.log(name)
//   console.log(age);
//  res.status(200).send('Search done!');
// });

// // Parâmetros de rota
// app.post('/people/:id/:name', (req, res) => {
//   console.log(req.params.id);
//   console.log(req.params.name);
//   res.status(200).send('People ok!!');
// });

// // Corpo da requisição
// app.post('/tasks', (req, res) => {
//   console.log('Got body:', req.body);
//   res.status(200).send('Tasks ok!!');
// });

// app.listen(port, () => {
//   console.log(`Aplicação em execução na porta ${port}`);
// });
app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});



app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    return res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

app.get('/teams/:id', (req, res) => {
  const teamSearch = teams.find((team) => team.id === parseInt(req.params.id))
  res.status(200).json(teamSearch)
})

module.exports = app;