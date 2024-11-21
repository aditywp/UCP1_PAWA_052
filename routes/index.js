const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Menampilkan Data Kolam Renang
router.get('/', (req, res) => {
    db.query('SELECT * FROM kolam_renang', (err, results) => {
        if (err) throw err;
        res.render('index', { kolamRenang: results });
    });
});

// Halaman Tambah Kolam Renang
router.get('/add', (req, res) => {
    res.render('add');
});

// Proses Tambah Data Kolam Renang
router.post('/add', (req, res) => {
    const { nama, lokasi, harga, deskripsi } = req.body;
    db.query('INSERT INTO kolam_renang (nama, lokasi, harga, deskripsi) VALUES (?, ?, ?, ?)', [nama, lokasi, harga, deskripsi], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Halaman Edit Kolam Renang
router.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM kolam_renang WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.render('edit', { kolamRenang: results[0] });
    });
});

// Proses Edit Data Kolam Renang
router.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { nama, lokasi, harga, deskripsi } = req.body;
    db.query('UPDATE kolam_renang SET nama = ?, lokasi = ?, harga = ?, deskripsi = ? WHERE id = ?', [nama, lokasi, harga, deskripsi, id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Hapus Data Kolam Renang
router.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM kolam_renang WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

module.exports = router;
