const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth.middleware');
const taskController = require('../controllers/task.controller');

// Todas estas rutas requieren token
router.use(auth);

router.get('/', taskController.getMine);
router.post('/', taskController.create);
router.patch('/:id', taskController.update);
router.delete('/:id', taskController.remove);

module.exports = router;
