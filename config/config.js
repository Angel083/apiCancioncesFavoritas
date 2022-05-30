require("dotenv").config()

const config   = {
  env         : process.env.NODE_ENV || 'dev',
  isProd      : process.env.NODE_ENV === 'production',
  port        : process.env.PORT || 3001,
  dbUser      : process.env.DB_USER,
  dbPassword  : process.env.DB_PASSWORD,
  dbName      : process.env.DB_NAME,
  dbHost      : process.env.DB_HOST,
  dbPort      : process.env.DB_PORT,
  dbUri       : process.env.DB_URI
}

module.exports = { config }
