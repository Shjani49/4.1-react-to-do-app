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
    console.log( "test add todo!" );

  }

  updateItem ( key, value )
  { // We never re-assign the contents of this.state.
    // this.state is ONLY USED FOR READING VALUES, NOT writing.
    // when we need to update anything in state, we need to use this.setState()
    // 
    this.setState ( {[key] : value} );
  }

  render ()
  {
    
    return(
      <>
        <h1>React To-Do App</h1>
        <form onSubmit ={this.addToDo}>
          <label htmlFor = "newToDo">
            Enter a New "To-Do" :
            <input 
            type ="text" 
            name = "newToDo" 
            id = "newToDo" 
            required  
            value = {this.state.newToDo} 
            onChange ={event => this.updateItem( 'newToDo', event.target.value )}/>
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
