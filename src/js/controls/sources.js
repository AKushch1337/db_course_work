const {Router} = require('express');
const connection = require('../database/connect');

const sources = Router();

const sqlScripts = {
    getAllSources: 'SELECT * FROM source',
    getSourceByID: `SELECT * FROM source WHERE id = ?`,
    createSource: `INSERT INTO source SET id = ?, ?`,
    updateSourceInfo: `UPDATE source SET ? WHERE id = ?`,
    deleteSource: `DELETE FROM source WHERE id = ?`,
};


    /**
     * Повертає всі джерела
     */

sources.get('/source', (req, res) => {
    connection.query(sqlScripts.getAllSources, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Error on server. Try later!',
            });
        }
        res.send(result)
    })
})
    .post('/source', (req, res) => {
        return res.status(403).json({
            message: 'Cannot POST on /source/. Specify Id of source you want to create in link.',
        });
    })
    .put('/source', (req, res) => {
        return res.status(403).json({
            message: 'Cannot PUT on /source/. Specify Id of source you want to change info of in link.',
        });
    })
    .delete('/source', (req, res) => {
        return res.status(403).json({
            message: 'Cannot DELETE on /source/. Specify Id of source you want to delete in link.',
        });
    })


    /**
     * Повертає джерело за введеним
     * в адресну строку
     * ідентифікаційним номером
     */

    .get('/source/:id', (req, res) => {
        const id = req.params.id
        connection.query(sqlScripts.getSourceByID, id, (err, [result]) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error on server. Try later!',
                });
            }
            if (!result) {
                return res.status(404).json({
                    message: 'No source found with this id. Check id.',
                });
            }
            res.send(result)
        })
    })


    /**
     * Створює нове джерело
     */

    .post('/source/:id', (req, res) => {
        const {url, key} = req.body;
        if (!(url && key)) {
            res.status(400).json({
                message: 'All fields must have value. Check again!',
            });
            return;
        }
        const id = req.params.id
        connection.query(sqlScripts.createSource, [id, {url, key}], (err) => {
            if (err) {
                return res.status(500).json({
                    message: 'Server error!',
                });
            }
            res.send(`Source with ID: ${id} was created`)
        })
    })


    /**
     * Оновлює інформацію про вибране джерело
     */

    .put('/source/:id', (req, res) => {
        const data = req.body
        const id = req.params.id
        const sqlStatement = connection.format(sqlScripts.updateSourceInfo, [data, id]);
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
     * Видаляє вибране джерело
     */

    .delete('/source/:id', (req, res) => {
        const id = req.params.id
        connection.query(sqlScripts.deleteSource, id, (err, result) => {
            if (err || !result.affectedRows) {
                return res.status(500).json({
                    message: 'Error on server or wrong id. Try later or use check id!',
                });
            }
            res.send(`User with ID:${id} was deleted`)
        })
    })

module.exports = sources;