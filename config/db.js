const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Pablo3010',
    database: 'restaurant'
});

connection.connect(
    function ( error ){
        if(error){
            throw error;
        }else{
            console.log('Conexion base de datos restaurant')
        }
    }
);

module.exports = connection;