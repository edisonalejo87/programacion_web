const express = require('express');
const app = express();
const port = 3000; // You can change the port if needed

function calculateSine(x, n) {
  let result = 0;
  
  for (let i = 0; i < n; i++) {
    const term = (Math.pow(-1, i) * Math.pow(x, 2 * i + 1)) / factorial(2 * i + 1);
    result += term;
  }
  
  return result;
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

app.get('/sine/:x/:n', (req, res) => {
  const x = parseFloat(req.params.x);
  const n = parseInt(req.params.n, 10);

  if (isNaN(x) || isNaN(n) || n <= 0) {
    return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
  }
  
  const sineValue = calculateSine(x, n);
  
  res.json({ x, n, sineValue });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});