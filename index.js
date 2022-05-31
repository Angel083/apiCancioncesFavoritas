const express = require("express")
const cors = require("cors")
const app = express()
const port = 3001;
const routerApi = require("./routes");
app.use(express.json())
app.use(cors())


routerApi(app)

app.get("/", (req, res) => {
  res.send("Servidor en funcionamiento")
})

app.listen(port, () => {
  console.log(`Servidor en el puerto ${port}`);
})
