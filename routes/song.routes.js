const express = require("express")
const router = express.Router()
const SongService = require("./../services/song.service")

const song_Service = new SongService();

router.get("/", async (req, res) => {
  const getAll = await song_Service.getAll()
  res.json(getAll)
})
router.get("/:id", async (req, res) => {
  const getOne = await song_Service.getOne(req.params.id)
  res.json(getOne)
})
router.delete("/:id", async (req, res) => {
  const deleteOne = await song_Service.deleteOne(req.params.id)
  res.json(deleteOne)
})
router.post("/AddSong", async (req, res) => {
  const info = req.body
  const add = await song_Service.addSong(info)
  res.json(add)
})

module.exports = router
