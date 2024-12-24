require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/mongoConfig'); 
const routes = require('./routes/routes.js');
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 5000;
fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => console.log("Server IP:", data.ip))
  .catch(err => console.error("Failed to fetch IP:", err));
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