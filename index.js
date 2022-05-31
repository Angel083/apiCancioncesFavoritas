const express = require("express")
const cors = require("cors")
const app = express()
// const port = process.env.PORT;
const routerApi = require("./routes");
app.use(express.json())
app.use(cors())


routerApi(app)

app.get("/", (req, res) => {
  res.send("Servidor en funcionamiento")
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor en el puerto ${process.env.PORT}`);
})
