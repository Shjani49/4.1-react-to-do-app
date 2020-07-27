import React from 'react';


class App extends React.Component 
{

  
  constructor ( props )
  {
      super( props );

      this.state = {
          newToDo : "", // Keep track of our new TO-DO
          toDOs : [] // keep track of all the todos.


      };
  }
  addToDo ( event )
  {
    event.preventDefault();
    console.log(" test add tod do");

  }

  render ()
  {
    
    return(
      <>
        <h1>React To-Do App</h1>
        <form onSubmit ={this.addToDo}>
          <label htmlFor = "newToDo">
            Enter a New "To-Do" :
            <input type ="text" name = "newToDo" id = "newToDo" required />
          </label>
          <input type = "submit" value = "Add New To-Do" />
        </form>
        <h2>Current To-Dos:</h2>
        <ul>

        </ul>
    </>
    );
  }

}

export default App;
