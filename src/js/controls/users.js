const {Router} = require('express');
const connection = require('../database/connect');

const users = Router();

const sqlScripts = {
    getAllUsers: 'SELECT * FROM user',
    getUserByID: `SELECT * FROM user WHERE id = ?`,
    createUser: `INSERT INTO user SET id = ?, ?`,
    updateUserInfo: `UPDATE user SET ? WHERE id = ?`,
    deleteUser: `DELETE FROM user WHERE id = ?`,
};


/**
 * Повертає всіх користувачів
 * та інформацію про них
 */

users.get('/user', (req, res) => {
    connection.query(sqlScripts.getAllUsers, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Error on server. Try later!',
            });
        }
        res.send(result)
    })
})
    .post('/user', (req, res) => {
        return res.status(403).json({
            message: 'Cannot POST on /user/. Specify Id of user you want to add in link.',
        });
    })
    .put('/user', (req, res) => {
        return res.status(403).json({
            message: 'Cannot PUT on /user/. Specify Id of user you want to change info of in link.',
        });
    })
    .delete('/user', (req, res) => {
        return res.status(403).json({
            message: 'Cannot DELETE on /user/. Specify Id of user you want to delete info in link.',
        });
    })


    /**
     * Повертає користувача за введеним
     * в адресну строку
     * ідентифікаційним номером
     */

    .get('/user/:id', (req, res) => {
        const id = req.params.id
        connection.query(sqlScripts.getUserByID, id, (err, [result]) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error on server. Try later!',
                });
            }
            if (!result) {
                return res.status(404).json({
                    message: 'No user found with this id. Check id.',
                });
            }
            res.send(result)
        })
    })


    /**
     * Створює нового користувача
     */

    .post('/user/:id', (req, res) => {
        const {login, name, password} = req.body;
        if (!(login && name && password)) {
            res.status(400).json({
                message: 'All fields must have value. Check again!',
            });
            return;
        }
        const id = req.params.id
        connection.query(sqlScripts.createUser, [id, {login, name, password}], (err) => {
            if (err) {
                return res.status(500).json({
                    message: 'Server error!',
                });
            }
            res.send(`User with ID: ${id} was created`)
        })
    })


    /**
     * Оновлює інформацію про вибраного користувача
     */

    .put('/user/:id', (req, res) => {
        const data = req.body
        const id = req.params.id
        const sqlStatement = connection.format(sqlScripts.updateUserInfo, [data, id]);
        connection.execute(sqlStatement, (err, result) => {
            if (err || !result.affectedRows) {
                return res.status(500).json({
                    message: 'Error on server or wrong id. Try later or use check id!',
                });
            }
            res.send(result);
        });
    })


    /**
     * Видаляє вибраного користувача
     */

    .delete('/user/:id', (req, res) => {
        const id = req.params.id
        connection.query(sqlScripts.deleteUser, id, (err, result) => {
            if (err || !result.affectedRows) {
                return res.status(500).json({
                    message: 'Error on server or wrong id. Try later or use check id!',
                });
            }
            res.send(`User with ID:${id} was deleted`)
        })
    })
module.exports = users;