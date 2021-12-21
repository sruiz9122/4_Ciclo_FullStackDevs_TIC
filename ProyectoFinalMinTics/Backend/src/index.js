const  express  = require ('express');
const { graphqlHTTP }  = require ("express-graphql");
const userShema = require("./shemas/userShema");
const proyectShema = require("./shemas/projectShema");
var cors = require('cors')

require('./database');

const app = express();

app.use('/User',graphqlHTTP({
    schema: userShema,
    graphiql: true,    
}));

app.use('/Project',graphqlHTTP({
    schema: proyectShema,
    graphiql: true,    
}));

app.listen(3000, () => console.log("Server in port 3000"))
app.use(cors())