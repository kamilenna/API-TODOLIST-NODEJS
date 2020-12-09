const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded( { extended:true }))

app.use(bodyParser.json())

const padraoRoute   = require('./src/routes/padraoRoute.js')
const usuarioRoute   = require('./src/routes/usuarioRoute.js')
const statusRoute    = require('./src/routes/statusRoute.js')
const categoriaRoute = require('./src/routes/categoriaRoute.js')
const listaRoute     = require('./src/routes/listaRoute.js')
const atividadeRoute = require('./src/routes/atividadeRoute.js')

padraoRoute(app)
usuarioRoute(app)
statusRoute(app)
categoriaRoute(app)
listaRoute(app)
atividadeRoute(app)


const port = process.env.PORT || 3000

app.listen(port)       

console.log('Servidor funcionando na porta', port)
