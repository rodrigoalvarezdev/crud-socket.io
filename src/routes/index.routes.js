const {Router} = require('express');

const indexCtrl = require('../controllers/index.controllers');

const router = Router();

router.get('/', indexCtrl.getIndex);





module.exports = router;