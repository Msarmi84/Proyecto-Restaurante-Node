const connection = require('../config/db');

//clase (objeto) que va contener funciones con la funcionalidad del backend
class userController {

    //crear funcion para pintar en dishes todos los usuarios
    selectAllDishes(req, res) {
        let sql = `SELECT * FROM dish`;
        connection.query(sql, (error, results) => {
            if (error) throw error;
            res.render('users', { results })
        })
    }

        //selecciona un usuario en concreto de la tabla user y lo envia a la vista oneUser
    seeOneUser(req, res) {
        let id_dish= req.params.id_dish
        let sql = `SELECT * FROM dish WHERE id_dish = ${id_dish}`;
        connection.query(sql, (err, result) => {
            if (err) throw err;
            res.render('oneDish', { result })
        })
    }

        //guardar el usuario
    saveDish(req,res) {
        const { name, ingredients, email } = req.body
        let image = req.file.filename;
        let sql = `INSERT INTO dish (name,ingredients,email,image) VALUES ( '${name}', '${ingredients}','${email}','${image}')`;
    
        connection.query(sql, (error, result) => {
        if (error) throw error;
        res.redirect('/users')
        })
    }
    
    deleteDish(req, res) {
        let id_dish= req.params.id_dish
        console.log(req.params);
        let sql = `DELETE FROM dish WHERE id_dish = ${id_dish}`
        connection.query(sql, (error, result) => {
            if (error) throw error;
            res.redirect ('/users')
            })
    }
    
    editDish(req, res) {
        let id_dish = req.params.id_dish
        console.log(req.params);
        let sql= `SELECT * FROM dish WHERE id_dish = ${id_dish}`;
        connection.query(sql, (error, result) => {
            if (error) throw error;
            res.render ('editForm',{result})
        })
    }
    
    updateDish(req, res) {
    let id_dish = req.params.id_dish;
    const { name, ingredients, email } = req.body
    let sql=`UPDATE dish SET name='${name}', ingredients='${ingredients}', email='${email}' WHERE id_dish = ${id_dish}`
    connection.query(sql,(error,result)=>{
        if(error)throw error;
        res.redirect('/users')
        })
    }
    
    



}

module.exports = new userController();