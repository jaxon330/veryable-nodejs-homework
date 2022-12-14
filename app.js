const express = require('express' );
const { seed } = require('./db');
const { businessesRouter } = require('./routes');
const { operatorsRouter } = require('./routes');
const { opsRouter } = require('./routes')
const { scheduleRouter } = require('./routes')



const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use( express.json() )
app.use( '/operators', operatorsRouter );
app.use( '/businesses', businessesRouter);
app.use( '/ops', opsRouter);
app.use( '/operators', scheduleRouter )

app.listen( PORT, () => {

  console.log(`App listening at http://localhost:${PORT}`);
  seed();

} );