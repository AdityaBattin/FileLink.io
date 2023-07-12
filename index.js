const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000

const connectDB = require("./database/db")
app.use(cors());
app.use(express.json());
connectDB();

app.use('/api/upload', require('./routes/upoladFiles'))
app.use('/download', require('./routes/downloadFiles'))
app.use('/files/download', require('./routes/download'))

app.listen(PORT,() => {
    console.log(`Server is Running on port ${PORT}...🌟`)
})