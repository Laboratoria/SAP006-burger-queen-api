const express = require('express');
const app = express();

// req = requisição, res = resposta, next= chama outro metodo
app.use('teste', (req, res, next) => {
    res.status(200).send({
        mensagem: 'OK, Deu certo!'
    });
})

// const express = require('express');
// const cors = require('cors');
// const routes = require('./server/routes/index');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use('/', routes);

// app.get('*', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
