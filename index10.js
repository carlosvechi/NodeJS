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
