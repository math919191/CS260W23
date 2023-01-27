const express = require('express');
const app = express();

app.get('/*', (req, res) => {
  res.send({ url: req.originalUrl, url2: "hola!!"  });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});