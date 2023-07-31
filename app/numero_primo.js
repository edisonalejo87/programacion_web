const express = require('express');
const app = express();

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

app.get('/esprimo/:numero', (req, res) => {
  const numero = parseInt(req.params.numero);

  if (isNaN(numero)) {
    return res.status(400).json({ error: 'El parámetro proporcionado no es un número válido.' });
  }

  if (esPrimo(numero)) {
    return res.json({ numero, esPrimo: "Si es número primo" });
  } else {
    return res.json({ numero, esPrimo: "No es número primo" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
