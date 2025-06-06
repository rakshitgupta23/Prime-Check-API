const express = require("express");
const app = express();
const PORT = 3000;

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

app.get("/is-prime", (req, res) => {
  const number = parseInt(req.query.number);
  if (isNaN(number)) {
    return res.status(400).json({ error: "Invalid number parameter." });
  }

  const result = isPrime(number);
  res.json({ number, isPrime: result });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
