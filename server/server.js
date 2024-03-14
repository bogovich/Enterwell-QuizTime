import jsonServer from 'json-server';
import path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
import bodyParser from 'body-parser';

server.use(middlewares);
server.use(bodyParser.json());

const handleQuestions = (req, res, next) => {
  const questions = req.body.questions;
  const newQuestions = questions.filter(question => !question.id);
  const existingQuestions = questions.filter(question => question.id);

  newQuestions.forEach(question => {
    const newId = router.db.get('questions').insert(question).value().id;
    question.id = newId;
  });

  req.body.questions = [...newQuestions, ...existingQuestions];
  next();
};

server.post('/quizzes', handleQuestions);
server.put('/quizzes/:id', handleQuestions);

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});