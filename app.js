require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/mongoConfig'); 
const routes = require('./routes/routes.js');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 
app.use('/api', routes); 
app.use("/test", (req,res) => {
  res.send("server is working fine")
})

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});