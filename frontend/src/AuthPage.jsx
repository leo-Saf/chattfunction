// Importing the `axios` library for making HTTP requests
import axios from 'axios'

// Defining a new component named `AuthPage`
const AuthPage = (props) => {
    // Function to handle form submission
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];

      // Making a POST request to the `authenticate` endpoint
      axios.post(
        'http://localhost:3001/authenticate',  // URL for the endpoint
        {username: value}                      // Data to be sent in the request body

        )
        .then(r => props.onAuth({ ...r.data, secret: value}))   // On successful response, calling the `onAuth` callback passed as a prop
        .catch(e => console.log('error', e))   // On error, logging the error to the console
    };
    
    // Rendering the authentication form
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  // Exporting the `AuthPage` component so that it can be used in other parts of the application
  export default AuthPage;