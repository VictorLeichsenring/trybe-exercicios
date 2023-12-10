module.exports = (req, res, next) => {
  const { difficulty } = req.body.difficulty;
  const levels = ['Fácil', 'Médio', 'Difícil'];
  if(!levels.includes(difficulty)) {
    return res.status(400).json(
      { "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" },
    );
  }
  next();
};