const express = require('express')
const bodyParser = require('body-parser')
const port = 3000;
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const db = require('better-sqlite3')('./db.db');

app.get('/students', (req, res) => {
    const GET = db.prepare('SELECT * FROM Students').all();
    res.send(GET)
})

app.post('/students', (req, res) => {
    const POST = db.prepare('INSERT INTO Students VALUES (?, ?, ?)');
    POST.run(req.body.id, req.body.name, req.body.phone);
    res.send('Sendt')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})