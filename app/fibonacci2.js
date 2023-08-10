const express = require('express');
const app = express();
const port = 3000; 

function fibonacciSeries(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var series = [0, 1];
    for (var i = 2; i < n; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
    return series;
  }
}

function sumOfArray(arr) {
  return arr.reduce((sum, value) => sum + value, 0);
}

app.get('/fibonacci/:n', (req, res) => {
  const n = parseInt(req.params.n, 10);
  if (isNaN(n) || n <= 0) {
    return res.status(400).json({ error: 'Número ingresado no es correcto' });
  }
  
  const Series = fibonacciSeries(n);
  const sum = sumOfArray(Series);
  
  res.json({ n, Series, sum });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});