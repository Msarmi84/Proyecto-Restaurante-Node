const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Pablo3010',
    database: 'sushi'
});

connection.connect(
    function ( error ){
        if(error){
            throw error;
        }else{
            console.log('Conexion base de datos shusi')
        }
    }
);

module.exports = connection;