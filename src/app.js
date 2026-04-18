const express = require("express");
const cors = require("cors");
const path = require("path");
const recoveryRoutes = require("./routes/recoveryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// caminho da raiz (onde estão index.html e assets)
const publicPath = path.join(__dirname, "../public");

// arquivos físicos (CSS, JS, Imagens)
app.use(express.static(publicPath));

//endereços das rotas da API
app.use("/api/recovery", recoveryRoutes);


app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    res.sendFile(path.join(publicPath, "index.html"));
  } else {
    next();
  }
});

module.exports = app;