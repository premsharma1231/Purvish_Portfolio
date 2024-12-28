const connectToMongo = require('./db');
const express = require('express');
connectToMongo();
const app = express();
const port = 3000;

// If you wants to use the middleware as like body you have to apply the below code
app.use(express.json()); 


// respond with "hello world" when a GET request is made to the homepage
// Available Routes...
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

// app.get('/', (req, res) => {
//   res.send('hello world')
// })

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
})
