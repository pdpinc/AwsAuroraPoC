var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '',//insert amazon endpoint here (it will end in amazon.aws:PORT)
    user: '',//insert user here
    password: '',//insert password here
    port: '',//take the port off the end of the endpoint and place it here
    database: ''//specify which DB you are using here
});

connection.connect(function (err) {
    if (err) {
        console.log('Error connecting to mysql DB');
        return;
    }
    console.log('Connection established with mysql DB');
});

router.get('/people', getPeople);
router.get('/person/:id', getPerson);

router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getPeople(req, res, next) {
    res.status(200).send(data.people);

    //mysql driver

    //write to test table
    connection.query('INSERT INTO test (name) VALUES ("new name");', function (err, rows) {
        if (err) {
            throw err;
        }
    });
    //read from test table
    connection.query('SELECT * FROM test', function (err, rows) {
        if (err) {
            throw err;
        }

        console.log('Data received from Db:\n');
        console.log(rows);
    });

    connection.end();

}

function getPerson(req, res, next) {
    var id = +req.params.id;
    var person = data.people.filter(function (p) {
        return p.id === id;
    })[0];

    if (person) {
        res.status(200).send(person);
    } else {
        four0four.send404(req, res, 'person ' + id + ' not found');
    }
}

function testRoute(req, res, next) {

    console.log('I ran');
}

