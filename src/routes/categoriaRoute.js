module.exports = function (app) {

    app.route('/categoriaRoute') 
       .get((req, res) => {
         res.send('Acessando rota de categoria')		
       })
    }
    