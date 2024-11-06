let sq = require("sequelize");

// Initializing a new Sequelize instance and setting up the database configuration
let sequelize = new sq.Sequelize({
  dialect: "sqlite",  // Specifies the database type as SQLite
  storage: "./database.sqlite",  // Specifies the path to the SQLite database file
});

module.exports = { 
  DataTypes: sq.DataTypes,  // Allows access to Sequelize's data types (e.g., STRING, INTEGER)
  sequelize  // Exports the initialized Sequelize instance for use in other parts of the application
};