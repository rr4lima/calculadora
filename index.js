const express = require('express');
const app = express();
const PORT = 3000;

app.get('/soma/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.send(`O resultado da soma é: ${a + b}`);
});

app.get('/subtracao/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.send(`O resultado da subtração é: ${a - b}`);
});

app.get('/divisao/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);

  if (b == 0 ) {
  res.send('Não pode dividir por zero!'); 

  }else{
 res.send(`O resultado da divisão é: ${a / b}`);

}


});

app.get('/multip/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.send(`O resultado da multiplicação é: ${a * b}`);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
