const connection = require('../config/db');
const sha1 = require('sha1');

class indexController {    
    //pinta en el index.js todos los Dishes y Chefs
    seeAllChef(req, res) {
        let sql = `SELECT * FROM chef`;
        let sql2 = `SELECT * FROM dish`;
        connection.query(sql, (error, resultChef) => {
            if (error) throw error;
            connection.query(sql2, (error, resultDish) => {
            res.render('index', { resultChef,resultDish })
            })
        })
    }
    //guarda un nuevo chef
    saveChef(req,res) {
        const { name, last_name, email, description, phone_number} = req.body
        let password = req.body.password;
        let passSha1 = sha1(password);
        let image = req.file.filename;
        let sql = `INSERT INTO chef (name,last_name,email,password, description, phone_number,image) VALUES ( '${name}', '${last_name}','${email}','${passSha1}','${description}','${phone_number}', '${image}')`;
        connection.query(sql, (error, result) => {
            if (error) throw error;
            res.redirect('/#allChefs')   
        })
    }
    //dsd la home te permite acceder a un chef y ver sus platos
    seeOneChef(req, res) {
        let chef_id = req.params.chef_id
        let sql = `SELECT * FROM chef WHERE chef_id = ${chef_id}`;
        let sqlDish = `SELECT * FROM dish WHERE chef_id = ${chef_id}`;
        connection.query(sql, (error, resultUser) => {
            if (error) throw error;
            connection.query(sqlDish, (error, resultDish) => {
                if (error) throw error;
                res.render('oneChef', { resultUser,resultDish })
            })
        })
    }
    //borra chef
    deleteChef(req, res) {
        let chef_id= req.params.chef_id
        let sql = `DELETE FROM chef WHERE chef_id = ${chef_id}`
        connection.query(sql, (error, result) => {
            if (error) throw error;
            res.redirect ('/')
        })
    }
    //formulario sube especialidades
    viewForm(req, res) {
        res.render('form')
    }
    //formulario login
    login(req,res){
        let email= req.body.email
        let password= req.body.password
        let pass= sha1(password)
        console.log(pass)
        let sql=`SELECT * from chef WHERE email= '${email}' AND password='${pass}'`;

        connection.query(sql, (error, result) => {
            if (error) throw error;
            console.log(result)
            if(!result[0]){
                res.send('no existe el usuario')
            }
            res.send('si exite el usuario')
        })
    }
}    
module.exports = new indexController();