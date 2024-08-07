// Carregando o express
const express = require('express');
// Instanciando o express e carregando a biblioteca do express dentro do 'const app'
const app = express();

app.use(express.json());

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90},
    {title: "Counter-Strike Global Offensive", studio: "Valve", price: 0},
    {title: "Red Dead Redemption 2", studio: "Rockstar Games", price: 120},
    {title: "Mobile Legends", studio: "Moonton", price: 0},
    {title: "God of War", studio: "Santa Monica", price: 73},
    {title:"Roblox", studio: "Roblox Corporation", price: 0 }
]

app.listen(3080, () => {
    console.log("Servidor rodando!");
})

app.get("/", (req, res) => {
    res.json(games);
})

app.post("/novogame", (req, res) => {
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);
    // pegamos essas informações e salvarmos dentro do array de games que criamos \/
    let newGame = { title, studio, price };
    // esse comando irá mandar essas informações para dentro do array de games
    games.push(newGame);

    res.send("OK");
});

// sempre que recebermos ou enviarmos informações, usaremos a rota "POST".
app.put("/novogame/:index", (req, res) =>{
    const { index } = req.params;

    // Ele busca do corpo da requisição os parâmetros chamados 'title, studio price'
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = { title, studio, price};

    return res.json(games);
});

//  o nome index nesse quesito significa que pretendo passar um parâmetro no formato de índice de um arrayok? 
//Basicamente passando a posição do game no array de games que eu
//pretendo deletar.

app.delete("/:index", (req, res) =>{
    const { index } = req.params;
    games.splice(index, 1); // o método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos
    return res.json({ message: "O jogo foi deletado"});
})

