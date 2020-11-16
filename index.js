const express = require('express')
const path = require('path')
const { env } = require('process')
const app = express()

app.get('/flags/:country', (req, res) => {
    var options = {
        root: path.join(__dirname, 'flags'),
    }
   res.sendFile(`${req.params.country}.png`,options)
})


app.listen(3000 || env.port , () => {
    console.log('Servidor rodando!')
})
