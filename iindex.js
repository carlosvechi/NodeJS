import express from "express";
import ejs from "ejs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import bodyParser from "body-parser";


const app = express();
const port = 80;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static('express'));
app.use('/public', express.static(join(__dirname, 'public')));
app.set('views', join(__dirname, '/views'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


// esses códigos garantem que consigamos capturar as informações digitadas no corpo do documento, além de conseguirmos realizar a conversão de string para objeto e etc.
app.use( bodyParser.json() );     
app.use(bodyParser.urlencoded({   
    extended: true
}));

let tasks = ['Passear com o dog', 'Ir ao mercado', 'Comprar pão'];

app.get('/', (req, res) => {
    res.render('index', {tasksList: tasks});
});

app.post('/', (req, res) => {
    tasks.push(req.body.task); //'task' é o nome dado ao name dentro do input do tipo texto, então, é bom certificar-se de ser o mesmo nome de ambos.
    res.render('index', {tasksList: tasks});
});

// remove o item do array na posição do ID
app.get('/deletar/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    if (id >= 0 && id < tasks.length) {
        tasks.splice(id, 1);

    }
    res.redirect('/');
// Redireciona de volta para a rota principal '/'
});

app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:5000');
});
