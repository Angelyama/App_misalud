const express = require("express");
const dotenv = require("dotenv");
const { conexion } = require("./config/db.conection.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

const base_url = `/api/v1`;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get("/api/v1", (req, res) => {
  res.send("Hello World!");
});

// conexion a la bd
conexion();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
