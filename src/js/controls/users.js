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

users.get('/user', (req, res) => {
    connection.query(sqlScripts.getAllUsers, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: 'Error on server. Try later!',
            });
        }
        res.send(results)
    })
})
    .post('/user', (req, res) => {
        res.statusCode = 400;
        res.end('Cannot POST on /user/. Specify ID of user in link');
    })
    .put('/user', (req, res) => {
        res.statusCode = 400;
        res.end('Cannot PUT on /user/. Specify ID of user in link');
    })
    .delete('/user', (req, res) => {
        res.statusCode = 400;
        res.end('Cannot DELETE on /user/. Specify ID of user in link');
    })
    .get('/user/:id', (req, res) => {
        const id = req.params.id
        connection.query(sqlScripts.getUserByID, id, (err, [results]) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error on server. Try later!',
                });
            }
            if (!results) {
                return res.status(404).json({
                    message: 'No user found with this id. Check id.',
                });
            }
            res.send(results)
        })
    })
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
    .put('/user/:id', (req, res) => {
        const data = req.body
        const id = req.params.id
        const sqlStatement = connection.format(sqlScripts.updateUserInfo, [data, id]);
        connection.execute(sqlStatement, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: 'Server error!',
                });
            }
            res.send(result);
        });
    })
    .delete('/user/:id', (req, res, next) => {
        const id = req.params.id
        connection.query(sqlScripts.deleteUser, id, (err, results) => {
            if (err) return next(err)
            res.send(results)
        })
    })
module.exports = users;