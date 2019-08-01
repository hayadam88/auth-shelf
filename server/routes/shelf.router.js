const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log(req.user);
    const userId = req.user.id;
    const sqlText = `SELECT * FROM item WHERE user_id=$1;`;
    pool.query(sqlText, [userId])
        .then(response => {
            res.send(response.rows);
        })
        .catch(error => {
            console.log('error getting items for user', error);
        })
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {

});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const idToDelete = req.params.id;
    const sqlText = `DELETE FROM item WHERE user_id=$1 AND id=$2;`;
    pool.query(sqlText, [req.user.id, idToDelete])
        .then(response => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('error deleting item', error);
            res.sendStatus(500);
        })
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;