import express = require("express");
import winston = require("winston");

const app: express.Application = express();
const port: number = getPort();

app.get('/', function (_req, res) {
  res.send('Hello World');
})

app.listen(port, () => {
    winston.info(`Listening at http://localhost:${port}/`);
});

function getPort(): number {
    return Number(process.env.PORT) || 3000;
}

export default app;