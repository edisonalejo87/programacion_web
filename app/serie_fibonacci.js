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


app.get('/fibo/:n', (req, res) => {
  const n= parseInt(req.params.n);
//   const n = 10; 
  const fibSeries = fibonacciSeries(n);
  
  res.send(`
    <html>
      <head>
        <title>Serie Fibonacci</title>
      </head>
      <body>
        <h1>Serie Fibonacci</h1>
        <p>Los numeros son: ${n}</p>
        <p>Series: ${fibSeries.join(', ')}</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

