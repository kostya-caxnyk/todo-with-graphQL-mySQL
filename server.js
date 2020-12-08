const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const sequelize = require('./utils/database');
const resolver = require('./graphql/resolver');
const schema = require('./graphql/schema');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());

app.use(
  graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true,
  }),
);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

async function start() {
  try {
    sequelize.sync();
    app.listen(PORT, () => {
      console.log('server is running on port ' + PORT);
    });
  } catch (e) {
    console.log(e);
  }
}
start();
