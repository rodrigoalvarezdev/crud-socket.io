const indexCtrl = {};
const {getSocket} = require('../socket');
indexCtrl.getIndex = (req, res)=>{   
    res.render('index');
};





module.exports = indexCtrl;