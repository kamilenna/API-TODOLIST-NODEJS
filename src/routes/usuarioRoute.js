module.exports = function (app) {

    const usuarioController = require('../controllers/usuarioController')

    app.route('/usuarioRoute') 
       .get(usuarioController.listAll)
       .post(usuarioController.createOne)
    }