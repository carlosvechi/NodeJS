import Express from 'Express';
const app = Express();

// com app.get estamos apontando a rota, ou seja, indicando o HTTP para receber o conteúdo da 6 linha
app.get('/', (req, res) => 
res.send("<h3>Rotas no Express</h3><p>Rota '/' ")
);

app.listen(3000, () => 
console.log('Servidor iniciado na porta 3000')
);

app.get('/sobre', (req, res) => 
res.send("<h3>Vamos aprender a utilizar Rotas com Express</h3>")
);

app.get('/users/:name', (req, res) => //recebe o parâmetro name
res.send('Usuário:' + req.params.name) //Exibe o parâmetro name
);

var carros = ['Fiesta', 'Saveiro'];

app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
});