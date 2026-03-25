const express = require("express");
const cors = require("cors");

const recoveryRoutes = require("./routes/recoveryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/recovery", recoveryRoutes);

module.exports = app;