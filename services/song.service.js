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
  async getOne(id) {
    try {
      const query = `SELECT * FROM cancion where id=${id}`
      const rta = await this.pool.query(query)
      return rta.rows
    } catch (error) {
      return error;
    }
  }
  async deleteOne(id) {
    try {
      const query = `DELETE FROM cancion where id=${id}`
      const rta = await this.pool.query(query)
      return rta.rows
    } catch (error) {
      console.log(error);
    }
  }
  async addSong(body) {
    try {
      const query = `INSERT INTO cancion (titulo, grupo, anio, genero) VALUES ('${body.titulo}','${body.grupo}',${body.anio},'${body.genero}')`
      const rta = await this.pool.query(query)
      return rta.rows

    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = SongsService
