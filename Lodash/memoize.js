const { memoize } = require('lodash');

let todos = [{
  id: 1,
  completed: false,
  title: 'ABC'
}, {
  id: 2,
  completed: true,
  title: 'DEF'
}, {
  id: 3,
  completed: false,
  title: 'GHI'
}];

const todosCompleted = memoize(function todosCompleted(todos) {
  console.log('call todosCompleted');
  return todos.filter((t) => t.completed);
});

// Memoize est utilisé par les pipes par défaut (mieux vaut un pipe qu'un appel de fonction dans un template angular)
// sauf si la fonction ou le pipe n'est pas pure

// Fonction Pure :
// - prédictive : appelée avec les mêmes paramètres elle retourne toujours le même résultat
// ex de fonction prédictive sum(1, 2) === 3
// ex de fonction non-prédictice Date.now() ou Math.random()
// - elle n'a de side effect (ne stocke dans localStorage, pas de requete ajax, pas de console.log)
// - elle ne modifie ses paramètres d'entrés


console.log(todosCompleted(todos));
console.log(todosCompleted(todos));

const newTodos = [...todos, {id: 4, completed: true, title: 'JKL'}];
// todos.push({id: 4, completed: true, title: 'JKL'});
console.log(todosCompleted(newTodos));
console.log(todosCompleted(newTodos));

console.log(todosCompleted(todos));
console.log(todosCompleted(todos));