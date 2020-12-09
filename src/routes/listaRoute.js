module.exports = function (app) {

    app.route('/listaRoute') 
       .get((req, res) => {
         res.send('Acessando rota de lista')		
       })
    }
    