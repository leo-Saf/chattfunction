// Importing the `useState` hook from the `react` library
import { useState } from "react";


import "./App.css";

// Importing the `AuthPage` and `ChatsPage` components
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

// Defining a new component named `App`
function App() {
   // Initializing a new state variable named `user`
  const [user, setUser] = useState(undefined);

  // If `user` is undefined, render the `AuthPage` component
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } 
  // If `user` is defined, render the `ChatsPage` component
  else {
    return <ChatsPage user={user} />;
  }
}

// Exporting the `App` component so that it can be used in other parts of the application
export default App;