const express = require('express');
const router = express.Router();
const mac =  require('../controllers/mac');
router.get('/', mac.index);


router.get('/index', (req, res) => {
    res.render('index', { activePage: 'index' });
});


router.get('/about', (req, res) => {
    res.render('about', { activePage: 'about' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { activePage: 'contact' });
});

router.get('/services', (req, res) => {
    res.render('services', { activePage: 'services' });
});

router.get('/educational', (req, res) => {
    res.render('educational', { activePage: 'educational' });
});
router.get('/address', (req, res) => {
    res.render('address', { activePage: 'address' });
});
router.get('/favorite', (req, res) => {
    res.render('favorite', { activePage: 'favorite' });
});






module.exports = router;

