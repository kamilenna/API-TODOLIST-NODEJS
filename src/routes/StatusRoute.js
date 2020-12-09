module.exports = function (app) {

    app.route('/statusRoute') 
       .get((req, res) => {
         res.send('Acessando rota de status')		
       })
    }