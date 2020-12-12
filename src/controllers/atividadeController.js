const Atividade = require('../models').Atividade
const Status = require('../models').Status
const Lista = require('../models').Lista
const AtividadeUsuario = require('../models').AtividadeUsuario
const Usuario = require('../models').Usuario

exports.listAll = (req, res) => {
  Atividade.findAll()
    .then(atividade => { res.send(atividade) } )
    .catch(error => { res.send('Error') })  
}

exports.listOne = (req, res) => {
  Atividade.findAll({
    where: { id:req.params.id},
      include:
        [ 
          { model: Status },
          { model: Lista },
          { model: AtividadeUsuario,
            include:
              [
                { model: Usuario }
              ]
          }
        ]
  })
  .then(atividade => { res.send(atividade) })
  .catch(error => { res.send(error) })
}

exports.createOne = (req, res) => {
  console.log(Atividade)
  const {descricao, dataPrevista, dataExecucao, idLista, idStatus} = req.body
    Atividade.create({descricao, dataPrevista, dataExecucao, idLista, idStatus})
    .then(atividade => { res.send(atividade) })
    .catch(error => { res.send(error) })
}

exports.updateOne = (req, res) => {
  const {descricao, dataPrevista, dataExecucao, idLista, idStatus} = req.body
  Atividade.update({descricao, dataPrevista, dataExecucao, idLista, idStatus}, 
                   {where: { id:req.params.id}})
    .then(atividade => { res.send(atividade) })
    .catch(error => { res.send(error) })
} 

exports.deleteOne = (req, res) => {
  Atividade.destroy({where: { id:req.params.id}}).then(atividade => {
      res.json({
       message: "Atividade deletado com sucesso",
       data: atividade
      })
    }).catch(error => {
      res.send(error)      
  })
}