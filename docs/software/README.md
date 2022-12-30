# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:
## SQL-скрипт для створення та початкового наповнення бази даних
```sql
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` TEXT NOT NULL,
  `name` TEXT NOT NULL,
  `password` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`source`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`source` ;

CREATE TABLE IF NOT EXISTS `mydb`.`source` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(45) NOT NULL,
  `key` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`scraper`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`scraper` ;

CREATE TABLE IF NOT EXISTS `mydb`.`scraper` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`task` ;

CREATE TABLE IF NOT EXISTS `mydb`.`task` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `state` TEXT NOT NULL,
  `schedule` TEXT NOT NULL,
  `source_id` INT NOT NULL,
  `scraper_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_task_source1_idx` (`source_id` ASC) VISIBLE,
  INDEX `fk_task_scraper1_idx` (`scraper_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_source1`
    FOREIGN KEY (`source_id`)
    REFERENCES `mydb`.`source` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_task_scraper1`
    FOREIGN KEY (`scraper_id`)
    REFERENCES `mydb`.`scraper` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` TEXT NOT NULL,
  `name` TEXT NOT NULL,
  `password` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`access` ;

CREATE TABLE IF NOT EXISTS `mydb`.`access` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `task_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_access_task1_idx` (`task_id` ASC) VISIBLE,
  INDEX `fk_access_role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_access_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_access_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `mydb`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`scrapeInstance`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`scrapeInstance` ;

CREATE TABLE IF NOT EXISTS `mydb`.`scrapeInstance` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` TEXT NOT NULL,
  `flag` VARCHAR(45) NOT NULL,
  `scraper_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_scrapeInstance_scraper1_idx` (`scraper_id` ASC) VISIBLE,
  CONSTRAINT `fk_scrapeInstance_scraper1`
    FOREIGN KEY (`scraper_id`)
    REFERENCES `mydb`.`scraper` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`result`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`result` ;

CREATE TABLE IF NOT EXISTS `mydb`.`result` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `task_id` INT NOT NULL,
  `scrapeInstance_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_result_task1_idx` (`task_id` ASC) VISIBLE,
  INDEX `fk_result_scrapeInstance1_idx` (`scrapeInstance_id` ASC) VISIBLE,
  CONSTRAINT `fk_result_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `mydb`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_result_scrapeInstance1`
    FOREIGN KEY (`scrapeInstance_id`)
    REFERENCES `mydb`.`scrapeInstance` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`message`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`message` ;

CREATE TABLE IF NOT EXISTS `mydb`.`message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` TEXT NOT NULL,
  `result_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_message_result1_idx` (`result_id` ASC) VISIBLE,
  CONSTRAINT `fk_message_result1`
    FOREIGN KEY (`result_id`)
    REFERENCES `mydb`.`result` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`metadata`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`metadata` ;

CREATE TABLE IF NOT EXISTS `mydb`.`metadata` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `key` INT NOT NULL,
  `value` TEXT NOT NULL,
  `message_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_metadata_message1_idx` (`message_id` ASC) VISIBLE,
  CONSTRAINT `fk_metadata_message1`
    FOREIGN KEY (`message_id`)
    REFERENCES `mydb`.`message` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`source`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`source` (`id`, `url`, `key`) VALUES (DEFAULT, 'https://tsn.ua', 231);
INSERT INTO `mydb`.`source` (`id`, `url`, `key`) VALUES (DEFAULT, 'https://radio.nv.ua', 34);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`role` (`id`, `name`, `description`) VALUES (DEFAULT, 'user', 'User');
INSERT INTO `mydb`.`role` (`id`, `name`, `description`) VALUES (DEFAULT, 'admin', 'Administrator');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`user` (`id`, `login`, `name`, `password`) VALUES (DEFAULT, 'artem12333', 'Artem', 'qwertui');
INSERT INTO `mydb`.`user` (`id`, `login`, `name`, `password`) VALUES (DEFAULT, 'omega', 'Omega', 'onion86');

COMMIT;
```

- RESTfull сервіс для управління даними

## Кореневий файл серверу
```js  
const express = require('express');
const bodyParser = require('body-parser');
const users = require('./controls/users');
const sources = require('./controls/sources')
const connection = require('./database/connect');

const port = 8080;
const host = 'localhost';
const app = express();
connection.connect();


app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/db', users, sources);

app.listen(8080, () => {
    console.log(`Service starts on http://${host}:${port}`);
});
```

## Файл підключення до бази даних

```js  
const mysql = require('mysql2');

const connectionUrl = 'mysql://root:root@localhost:3307/mydb'

const connection = mysql.createConnection({
    uri: connectionUrl
});

module.exports = connection;
```

## Файл контролерів, які оброблюють запити для user
```js
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
```

## Файл контролерів, які оброблюють запити для source
```js
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
```

