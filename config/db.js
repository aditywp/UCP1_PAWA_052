const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // sesuaikan dengan username phpmyadmin
    password: '', // sesuaikan dengan password phpmyadmin
    database: 'wisata_kolam_renang'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

module.exports = db;
