const express = require('express');
const router = express.Router();
const dogsController = require('../../controllers/api/dogs');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// BASE URL: /api/dogs
router.get('/', ensureLoggedIn, dogsController.index)
router.post('/', ensureLoggedIn, dogsController.create);
router.get('/:id', ensureLoggedIn, dogsController.detail);
router.delete('/:id',ensureLoggedIn, dogsController.deleteEvent);
router.put('/:id',ensureLoggedIn, dogsController.update)

module.exports = router;