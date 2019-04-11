// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    // { id: -3, description: 'first todo' },
    // { id: -2, description: 'second todo' },
    // { id: -1, description: 'third todo' },
  ]; // this is our initial todoList


  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    // var toDoTask = document.getElementsByName("description")[0].value;
    // var ul = document.getElementById("id");
    var todoNode = document.createElement('li');
    //todoNode.textcontent = toDoTask;
// todoNode.appendChild(document.createTextNode(toDoTask));
// ul.appendChild(todoNode);
//document.getElementsByName("description0")[0].value = "";
//todoNode.onclick = removeItem;
  //  console.log("This is the ul: ", ul);
    console.log("This is the todoNode: ", todoNode);
//console.log("this is the toDoTask: ", toDoTask);
    // you will need to use addEventListener
      var addNode = document.createElement('span');
      var newNode = document.createTextNode(todo.description);
      addNode.appendChild(newNode);
      todoNode.appendChild(addNode);

  // var checkBox = document.createElement("input");
  // checkBox.setAttribute("type", "checkBox");
  // checkBox.type="checkbox";
  // checkBox.checked = false;
  // todoNode.appendChild(checkBox);
  // checkBox.checked = false;
  // console.log("This is checkBox: ", checkBox);


    //   var textnode = document.getElementsByClassName("box")[0].value;
    //   document.getElementById("todo-container").innerHTML = textnode;
    //   console.log("This is the textnode: ", textnode);
    //   var node = document.createTextNode(textnode);
    // //  addNode.appendChild(node);
    // //  todoNode.appendChild(textnode);
    //   console.log("This is our node: ", node);
    //
    //   //var result = todoFunctions.addTodo(state, todo.description);
    //   //update(result);
    //   //todoNode.appendChild(textnode);
    //   //document.container.appendChild(todoNode);
    //   //return result;
    // console.log("This is the addTodoForm function: ", addTodoForm);
    // //todoNode.appendChild(text);
    // // add span holding description
    //
    // this adds the delete button
      var deleteButtonNode = document.createElement('button');
      var deleteText = document.createTextNode("Delete");
      deleteButtonNode.style.height = "50px";
      deleteButtonNode.style.width = "100px";
      deleteButtonNode.style.fontSize = "20px";
      deleteButtonNode.appendChild(deleteText);
      deleteButtonNode.addEventListener('click', function(event) {
        var newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      });
      todoNode.appendChild(deleteButtonNode);

    // add markTodo button
      var markButtonNode = document.createElement('button');
      var markText = document.createTextNode("Mark");
      markButtonNode.style.height = "50px";
      markButtonNode.style.width = "100px";
      markButtonNode.style.fontSize = "20px";
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
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?

 // event.target ....

      // hint: todoFunctions.addTodo


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
