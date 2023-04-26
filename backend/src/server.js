const app = require('./app');
require('dotenv').config();
const port = process.env.PORT;
const morgan = require('morgan')

app.use(morgan('dev'));





app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
