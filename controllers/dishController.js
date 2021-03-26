const connection = require('../config/db');


class dishController {
    //dsd dish accedemos a todos los platos
    seeAllDish(req, res) {
        let sql = `SELECT * FROM dish`;
        connection.query(sql, (error, results) => {
            if (error) throw error;
            res.render('dish', { results })
        })
    }
    //guarda un nuevo dish
    saveDish(req, res) {
        const { name, description, chef_id} = req.body;
        let image = req.file.filename;
        let sql = `INSERT INTO dish (name,description,chef_id, image) VALUES ( '${name}', '${description}',${chef_id} ,'${image}')`;
        connection.query(sql, (error, result) => {
            if (error) throw error;
            res.redirect ('/#anclaAllDishIndex')
        })
    }
    //editamos dish
    editDish(req, res) {
        let dish_id = req.params.dish_id
        console.log(req.params);
        let sql= `SELECT * FROM dish WHERE dish_id = ${dish_id}`;
        connection.query(sql, (error, result) => {
            if (error) throw error;
            res.render ('editFormDish',{result})
        })
    }
    //borramos dish
    deleteDish(req, res) {
        let dish_id= req.params.dish_id
        console.log(req.params);
        let sql = `DELETE FROM dish WHERE dish_id = ${dish_id}`
        connection.query(sql, (error, result) => {
            if (error) throw error;
            res.redirect ('/')
            })
    }
    //actualizamos dish
    updateDish(req, res) {
        let dish_id = req.params.dish_id;
        const { name, description} = req.body
        let sql=`UPDATE dish SET name='${name}', description='${description}' WHERE dish_id = ${dish_id}`
        connection.query(sql,(error,result)=>{
            if(error)throw error;
            res.redirect ('/dish')
            })
    }

    seeAllChef(req, res) {
        let sql= `SELECT * FROM chef`;
        connection.query(sql, (error, resultChef) => {
            if (error) throw error;
        res.render('formSpeciality',{resultChef})
        })
    }
}

module.exports = new dishController();