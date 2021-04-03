const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    // Find all orders and return them
    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/feedback', error);
        res.sendStatus(500);  
    });
})

router.post('/', async (req, res) => {
    
    try{
    const client = await pool.connect();
    console.log(req.body);
    
    const feeling = req.body.feeling;
    const understanding = req.body.understanding;
    const support = req.body.support;
    const comments = req.body.comments;

    console.log(feeling, understanding, support, comments);
    
        let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`
        await client.query(sqlText, [feeling, understanding, support, comments] );
        res.sendStatus(201);
    }
    catch (error){
        console.log(error);
        
    }
})

module.exports = router;