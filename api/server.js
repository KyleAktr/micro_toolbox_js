const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

const messageRoute = require('./routes/formulaire');
app.use('/api/formulaire', messageRoute);

app.listen(port, () => {
  console.log(`Serveur - API en écoute sur http://localhost:${port}`);
});
