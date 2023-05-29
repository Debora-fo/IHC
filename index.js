const express = require('express')

const app = express()
const PORTA = 3000

app.use(express.static('public'))

app.get('/', function(req, res){
    res.send('<h1>Home</h1>')
})

app.get('/formulario', (req, res) => {
    res.sendFile(__dirname + "/html/index.html")
})

app.get('/sobre', (req, res) => {
    res.send('<h1>Sobre</h1>')
})

app.get('/:nome', (req, res) => {
    res.send(`<h1>${req.params.nome}</h1>`)
})

app.listen(PORTA, () => {
    console.log("Servidor rodando")
})