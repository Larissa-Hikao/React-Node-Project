const express = require('express');
const router = express.Router();

const itemController = require('../controllers/itemController');

// router.get('/editar/:itemId', itemController.getEditarItem);
// router.post('/editar/:itemId', itemController.postEditarItem);
// router.post('/excluir/:itemId', itemController.postExcluirItem);
router.post('/novo', itemController.postNovoItem);
router.get('/novo', itemController.getNovoItem);
router.get('/', itemController.getItens);

module.exports = router;