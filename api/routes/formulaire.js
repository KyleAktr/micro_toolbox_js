const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, '..', 'messages.json');

router.post('/', (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Champs manquants" });
  }

  const newMessage = {
    email,
    message,
    date: new Date().toLocaleString('fr-FR', {
        timeZone: 'Europe/Paris',
        hour12: false
      })
  };

  fs.readFile(filePath, 'utf8', (err, data) => {
    let messages = [];

    if (!err && data) {
      try {
        messages = JSON.parse(data);
      } catch (e) {
        return res.status(500).json({ error: "Erreur parsing JSON" });
      }
    }

    messages.push(newMessage);

    fs.writeFile(filePath, JSON.stringify(messages, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Erreur écriture fichier" });
      }

      res.status(200).json({ message: "Message stocké avec succès !" });
    });
  });
});

module.exports = router;
