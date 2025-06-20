const express = require('express')
const mysql = require('mysql2')
const app = express()
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const port = process.env.port || 3000

app.use(cors())
app.use(express.json());

const SECRET = 'test123';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'vinted'
})

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err)
        return
    }
    console.log('Base de données connectée:', db.config.database)
})

app.get('/', (req, res) => {
  res.send('L\'api est en ligne')
})

app.post('/register', async (req, res) => {
  const { nom, email, mot_de_passe } = req.body;
  const hash = await bcrypt.hash(mot_de_passe, 10);

  db.query(
    'INSERT INTO utilisateurs (nom, email, mot_de_passe) VALUES (?, ?, ?)',
    [nom, email, hash],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'Erreur inscription' });
      res.json({ message: 'Utilisateur inscrit' });
    }
  );
});

app.post('/login', (req, res) => {
  const { email, mot_de_passe } = req.body;

  db.query('SELECT * FROM utilisateurs WHERE email = ?', [email], async (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ message: 'Email invalide' });

    const utilisateur = results[0];
    const match = await bcrypt.compare(mot_de_passe, utilisateur.mot_de_passe);

    if (!match) return res.status(401).json({ message: 'Mot de passe incorrect' });

    const token = jwt.sign({ id: utilisateur.id, nom: utilisateur.nom, email }, SECRET, { expiresIn: '24h' });

    res.json({ token, utilisateur: { id: utilisateur.id, nom: utilisateur.nom, email } });
  });
});

app.get('/api/produits', (req, res)=>{
    db.query('SELECT * FROM produit', (err, results) => {
        if (err) {
            console.error('Erreur de récupération des produits :', err);
            return res.status(500).json({ error: 'Erreur de récupération' });
        }
        res.json(results);
    });
})

app.listen(port, () => {
    console.log("Serveur en ligne")
})