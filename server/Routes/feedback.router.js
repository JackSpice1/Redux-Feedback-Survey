const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');



// GET Route 
router.get('/', (req, res)=>{
    console.log('feedback route GET hit');
    let queryString = `SELECT * from feedback`;
    pool.query(queryString)
    .then(results =>{
        console.log(results.rows)
        res.send(results.rows); 
    }).catch((error)=>{
        console.log('Error in feedback GET route', error);
        res.sendStatus(500);
    })
})

// POST Route
router.post('/', (req, res) => {
    console.log('In feedback router, req.body:', req.body);
    const setFeeling = req.body.feeling;
    const setUnderstanding = req.body.understanding;
    const setSupport = req.body.support;
    const setComments = req.body.comments;
    const queryString = `INSERT INTO "feedback"
        (feeling, understanding, support, comments)
        VALUES ($1, $2, $3, $4);`;
        pool.query(queryString,
            [setFeeling, setUnderstanding,
            setSupport, setComments])
        .then( (response) => {
            res.sendStatus(201);
        })
        .catch( (error) => {
            console.log(`Error in feedback POST router`);
            res.sendStatus(500);
        });
});


module.exports = router;


// PUT Route


// DELETE Route 