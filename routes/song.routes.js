const express = require("express")
const router = express.Router()
const SongService = require("./../services/song.service")

const song_Service = new SongService();

router.get("/", async (req, res) => {
  const getAll = await song_Service.getAll()
  res.json(getAll)
})

module.exports = router
