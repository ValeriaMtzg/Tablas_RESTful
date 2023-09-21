const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint GET para sumar n1 + n2
app.get('/results/:n1/:n2', (req, res) => {
  const { n1, n2 } = req.params;
  const result = parseFloat(n1) + parseFloat(n2);
  res.json({ result });
});

// Endpoint POST para multiplicar n1 * n2
app.post('/results/:n1/:n2', (req, res) => {
  const { n1, n2 } = req.params;
  const result = parseFloat(n1) * parseFloat(n2);
  res.json({ result });
});

// Endpoint PUT para dividir n1 / n2
app.put('/results/:n1/:n2', (req, res) => {
  const { n1, n2 } = req.params;
  if (parseFloat(n2) === 0) {
    res.status(400).json({ error: 'No se puede dividir por cero' });
  } else {
    const result = parseFloat(n1) / parseFloat(n2);
    res.json({ result });
  }
});

// Endpoint PATCH para potencia n1 ^ n2
app.patch('/results/:n1/:n2', (req, res) => {
  const { n1, n2 } = req.params;
  const result = Math.pow(parseFloat(n1), parseFloat(n2));
  res.json({ result });
});

// Endpoint DELETE para restar n1 - n2
app.delete('/results/:n1/:n2', (req, res) => {
  const { n1, n2 } = req.params;
  const result = parseFloat(n1) - parseFloat(n2);
  res.json({ result });
});

//Inicializando servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});