// server.js
const express = require('express');
const db = require('./DB/dbConnect')
const hospitalRoutes = require('./routes');
const PORT = process.env.PORT || 5000;
const app = express();
const bodyParser = require('body-parser')
const cors = require ('cors')




app.use(bodyParser.json());
app.use(cors());


// Routes
app.use('/hospitals', hospitalRoutes);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
