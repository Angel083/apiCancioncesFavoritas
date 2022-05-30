const { Pool } = require('pg')
const { config } = require( './../config/config')

let URI

if (config.isProd){
  URI = process.env.DB_URI
} else {
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
  console.log(URI);

}
const pool = new Pool({ connectionString: URI })

module.exports = pool
