// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    
  ]; // this is our initial todoList
  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    console.log("This is the todoNode: ", todoNode);
      var addNode = document.createElement('span');
      var newNode = document.createTextNode(todo.description);
      addNode.appendChild(newNode);
      todoNode.appendChild(addNode);
    // add span holding description
    // this adds the delete button
      var deleteButtonNode = document.createElement('button');
      var deleteText = document.createTextNode("Delete");
        deleteButtonNode.appendChild(deleteText);
      deleteButtonNode.addEventListener('click', function(event) {
        var newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      });
      todoNode.appendChild(deleteButtonNode);
    // add markTodo button
      var markButtonNode = document.createElement('button');
      var markText = document.createTextNode("Mark");
      markButtonNode.appendChild(markText);
      markButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
      });
      if (todo.done) {
      var markLine = todo.description.strike();
      addNode.innerHTML = markLine;
          }
       todoNode.appendChild(markButtonNode);
    // add classes for css
    return todoNode;
  };
  // bind create todo form
      if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      var description = event.target.firstElementChild.value; // event.target ....

      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, { description: description }); // ?? change this!
       console.log(newState);
        update(newState);
    });
  }
  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };
  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });
    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };
  if (container) renderState(state);
})();
