let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Article = require('../models/Article.js');



/* GET ALL Articles */
router.get('/', (req, res, next) => {  
  Article.find((err, articles) => {
    if (err) return next(err);
    res.json(articles);
  });
});

/* GET SINGLE Article BY ID */
router.get('/:id', (req, res, next) => {
  Article.findById(req.params.id, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Article */
router.post('/', (req, res, next) => {
  Article.create(req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
