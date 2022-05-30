const express = require("express")

const songsRouter = require("./song.routes")

function routerApi(app) {
  const routerMain = express.Router()
  app.use("/api/v1",routerMain)
  routerMain.use("/songs", songsRouter)

}

module.exports = routerApi
