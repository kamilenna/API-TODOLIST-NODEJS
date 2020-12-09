module.exports = function (app) {

    app.route('/atividadeRoute') 
       .get((req, res) => {
         res.send('Acessando rota de atividade')		
       })
    }
    