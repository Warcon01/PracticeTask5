const express = require('express');
const app = express();
app.use(express.static('public'));

let visitCount = 0;

app.get('/', (req, res) => {
  visitCount++;
  const timestamp = new Date().toLocaleString();
  const userAgent = req.get('User-Agent');
  
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" href="/style.css">
      <title>Enhanced Hello World</title>
    </head>
    <body>
      <div class="container">
        <h1>Hello World!</h1>
        
        <div class="info-box">
          <h2>Server Time</h2>
          <p>${timestamp}</p>
        </div>

        <div class="info-box">
          <h2>Visitor Count</h2>
          <p>${visitCount}</p>
        </div>

        <div class="info-box">
          <h2>Your Browser</h2>
          <p>${userAgent}</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));