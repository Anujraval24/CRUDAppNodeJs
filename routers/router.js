const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');


module.exports = router;

router.get('/:id', controller.getData);
router.post('/post', controller.postData);
router.put('/:id/put', controller.putData);
router.delete('/:id/delete', controller.deleteData);