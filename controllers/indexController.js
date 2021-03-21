const connection = require('../config/db');

//clase (objeto) que va contener funciones con la funcionalidad del backend
class indexController {

    //index
    //localhost:3000/

    
    //crear funcion para pintar en el index.js todos los usuarios
    seeAllDish(req, res) {
        let sql = `SELECT * FROM dish`;
        connection.query(sql, (error, results) => {
            if (error) throw error;
            res.render('index', { results })
        })
    }
         //guardar el usuario
    saveDish(req,res) {
        const { name, ingredients, email } = req.body
        let image = req.file.filename;
        let sql = `INSERT INTO dish (name,ingredients,email,image) VALUES ( '${name}', '${ingredients}','${email}','${image}')`;
        connection.query(sql, (error, results) => {
            if (error) throw error;
            res.redirect('/users')   
        })
    }

    

}

module.exports = new indexController();