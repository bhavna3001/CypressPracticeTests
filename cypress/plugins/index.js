// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

//cucumber dependency

const cucumber = require('cypress-cucumber-preprocessor').default
var mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password :  process.env.DB_PASS,
  port: 3306,
  database : 'mugic'
});

connection.connect();



module.exports = ( on ) => {
    on('file:preprocessor', cucumber());
    on( "task", {
        query (sql) {
          return new Promise((resolve, reject) => {
            connection.query(sql, (error, results, fields) => {
              resolve(results);
            });
          });
        }
    });
}
