// Importing the required modules
const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

// Creating an instance of the Express application
const app = express();

// Adding middleware to parse incoming JSON requests and enable CORS
app.use(express.json());
app.use(cors({ origin: true }));

// Handling POST requests to the '/authenticate' endpoint
app.post("/authenticate", async (req, res) => {
  // Extracting the 'username' field from the request body
  const { username } = req.body;

  try {
    // Sending a PUT request to the ChatEngine API to create or authenticate a user
    const r = await axios.put (
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "57b189f9-0b7f-4115-ba04-c8bfd02f58bd" }}
        )
        // If the request is successful, sending the response from the ChatEngine API to the client
        return res.status(r.status).json(r.data)
  } catch (e) {
        // If an error occurs, sending the error response from the ChatEngine API to the client
        return res.status(e.response.status).json(e.response.data)
  }
});

// Starting the Express application and listening for incoming requests on port 3001
app.listen(3001);