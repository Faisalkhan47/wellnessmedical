const mongoose = require('mongoose');

const dbUrl="mongodb://localhost:27017/hospitallist"

mongoose.connect(dbUrl).then(()=>{console.log('Db connected')},
()=>{Console.log('Db connection error')})