const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const connectDb = require("./config/connectDb");

// CONFIG dotenv file
dotenv.config();

// database call
connectDb();

// rest object
const app = express();

// middleware

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
// USER routes
app.use("/api/v1/users", require("./routes/userRoute"));

// TRANSACTION routes
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

//Static Files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// port
const PORT = 8080 || process.env.PORT;

// listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
