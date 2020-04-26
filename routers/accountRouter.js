const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.json(await db.select('*').from('accounts'));
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        res.json(await db.table('accounts').where('id', req.params.id));
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const payload = {
            name: req.body.name,
            budget: req.body.budget
        };
        const account = await db.table('accounts').insert(payload);
        res.json(await db.table('accounts').where('id', account[0]));
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const payload = {
            name: req.body.name,
            budget: req.body.budget
        };
        // await db.table('accounts').where('id', req.params.id).update(payload); // returns 1 (count of rows updated)
        // res.json(await db.table('accounts').where('id', req.params.id)); // returns updated account
        res.json(await db.table('accounts').where('id', req.params.id).update(payload));
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        res.json(await db.table('accounts').where('id', req.params.id).del());
    } catch (err) {
        next(err);
    }
});

module.exports = router;