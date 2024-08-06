// Carregando o express
const express = require('express');
// Instanciando o express e carregando a biblioteca do express dentro do 'const app'
const app = express();

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