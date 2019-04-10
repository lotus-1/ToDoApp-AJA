var test = require('tape');
var logic = require('./logic');

var testTodos = [
  {
    id: logic.generateId(),
   description: "Finish Todo App",
   done: false
 },
 {
   id: logic.generateId(),
   description:"Do my homework",
   done: false
 }
];

var newTodoTest = {
  id: logic.generateId(),
  description: "Practice TDD",
  done: false
};

test('Testing tape', function(t) {
  t.equal(1, 1, 'Tape is working!');
  t.end();
});

test('Leaves the original array unchanged', function(t) {
  var actual = testTodos === logic.addTodo(testTodos, newTodoTest);
  var expected = false;
  t.equal(actual, expected, 'Return array is a copy of original array');
  t.end();
});

test('Testing addTodo', function(t) {
  var actual = logic.addTodo(testTodos, newTodoTest);
  var expected = [
    {
      id: 1,
     description: "Finish Todo App",
     done: false
   },
   {
     id: 2,
     description:"Do my homework",
     done: false
   },
   {
     id: 3,
     description:"Practice TDD",
     done: false
   }
 ];
  t.deepEqual(actual, expected, 'New todo has been added to the todo array');
  t.end();
});
var testTodosArr = [
  {
    id: 1,
   description: "Finish Todo App",
   done: false
 },
 {
   id: 2,
   description:"Do my homework",
   done: false
 },
 {
   id: 3,
   description: "Practice TDD",
   done: false
 }
];
test('Leaves the input argument unchanged', function(t) {
  var actual = testTodos === logic.deleteTodo(testTodos, newTodoTest);
  var expected = false;
  t.equal(actual, expected, 'Return array is a copy of original array');
  t.end();
});
test('Testing deleteTodo', function(t){
  var actual = logic.deleteTodo(testTodosArr, 3);
  var expected = [
    {
      id: 1,
     description: "Finish Todo App",
     done: false
   },
   {
     id: 2,
     description:"Do my homework",
     done: false
   }
 ];
  t.deepEqual(actual, expected, 'Todo has been removed from the todo array');
  t.end();
});
var markTodoId = [
  {
    id: 1,
   description: "Finish Todo App",
   done: false
 },
 {
   id: 2,
   description:"Do my homework",
   done: false
 },
 {
  id: 3,
  description: "Practice TDD",
  done: false
}
];
test('Leaves the original markTodo array unchanged', function(t) {
  var actual = testTodos === logic.markTodo(testTodos, newTodoTest);
  var expected = false;
  t.equal(actual, expected, 'Return array is a copy of original markTodo array');
  t.end();
});
test('Testing markTodo', function(t) {
  var actual = logic.markTodo(testTodosArr, 1);
  var expected = [{
    id: 1,
   description: "Finish Todo App",
   done: true
 },
 {
   id: 2,
   description:"Do my homework",
   done: false
 },
 {
  id: 3,
  description: "Practice TDD",
  done: false
}];
  t.deepEqual(actual, expected, 'Return a markTodo');
  t.end();
});
