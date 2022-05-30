const pool  = require("./../libs/postgres.pool")

class SongsService {
  constructor() {
    this.pool = pool;
    this.pool.on("error", (err) => console.log(err))
  }

  async getAll() {
    try {
      const query = "SELECT * FROM cancion"
      const rta = await this.pool.query(query)
      return rta.rows
    } catch (error) {
      console.log(error);

    }

  }
}

module.exports = SongsService
