const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
}
const mysql = require('mysql')
const conection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Wesley Willians')`
conection.query(sql)
conection.end()

app.get('/', (req, resp) => {
    resp.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})