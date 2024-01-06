import AppName from "./components/AppName";
import TodoItemsContainer from "./components/TodoItemsContainer";
import WelcomeMsg from "./components/WelcomeMsg";

import TodoItemsContextProvider from "./store/todo-items-store";

//useReducer is a pure function. Pure fuctions only deal with their own arguments. They don't touch anything outside the function.

// A reducer functions takes current state and an action object and returns the new state.

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <TodoItemsContainer></TodoItemsContainer>
        <WelcomeMsg></WelcomeMsg>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
