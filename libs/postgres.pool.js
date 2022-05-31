const { Pool } = require('pg')
const { config } = require( './../config/config')

let URI

// if (config.isProd){
//   URI = process.env.DB_URI
// } else {
//   const USER = encodeURIComponent(config.dbUser);
//   const PASSWORD = encodeURIComponent(config.dbPassword);
//   URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
//   console.log(URI);

// }
URI = "postgres://cbmhtajypyarby:17d460c08c4e0c28d84a004b6c37b04530479ceedeebd813594df7c5d2e70ced@ec2-3-234-131-8.compute-1.amazonaws.com:5432/d2ek5cbos7b5rt"
const pool = new Pool({
  user: "cbmhtajypyarby",
  password: "17d460c08c4e0c28d84a004b6c37b04530479ceedeebd813594df7c5d2e70ced",
  database: "d2ek5cbos7b5rt",
  port: 5432,
  host: "ec2-3-234-131-8.compute-1.amazonaws.com",
  ssl: {
    rejectUnauthorized: false,
  },
  dialect: 'postgres',
  dialectOptions: {
    "ssl": {"require":true }
  }
})

module.exports = pool
