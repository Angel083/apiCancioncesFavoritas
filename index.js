const express = require("express")
const app = express()
const port = 3001;
const routerApi = require("./routes");
app.use(express.json())

routerApi(app)

app.get("/", (req, res) => {
  res.send("Servidor en funcionamiento")
})

app.listen(port, () => {
  console.log(`Servidor en el puerto ${port}`);
  console.log(process.env.PORT);
})
