const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",

    logging: false,

    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

/*
|--------------------------------------------------------------------------
| Connect Database
|--------------------------------------------------------------------------
*/

const connectDB = async () => {
  try {
    await sequelize.authenticate();

    console.log(
      "✅ PostgreSQL Connected Successfully"
    );
  } catch (error) {
    console.error(
      "❌ PostgreSQL Connection Failed:",
      error.message
    );

    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Sync Database
|--------------------------------------------------------------------------
*/

const syncDatabase = async () => {
  try {
    await sequelize.sync({
      alter: true,
    });

    console.log(
      "✅ Database Synced Successfully"
    );
  } catch (error) {
    console.error(
      "❌ Database Sync Failed:",
      error.message
    );

    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Exports
|--------------------------------------------------------------------------
*/

module.exports = {
  sequelize,
  connectDB,
  syncDatabase,
};