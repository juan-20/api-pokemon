const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors");
const app        = express();

// porta que esta hospedado
const PORTA = 3333;

// objeto:
let pokes = [
  {
    "id": 0,
    "nome": "Bulbasauro",
    "imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
  },
  {
    "id": 1,
    "nome": "Ivysauro",
    "imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png"
  },
  {
    "id": 2,
    "nome": "Venassauro",
    "imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png"
  },
  {
    "id": 3,
    "nome": "Charmander",
    "imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"
  },
  {
    "id": 4,
    "nome": "Charmeleon",
    "imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png"
  },
  {
    "id": 5,
    "nome": "Charizard",
    "imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",

  },
  {
    "id": 6,
    "nome": "Squirtle",
    "imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"
  },
  {
    "id": 7,
    "nome": "Wartortle",
    "imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"
  },
  {
    "id": 8,
    "nome": "Blastoise",
    "imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"
  },
  {
    "id": 9,
    "nome": "Zapdos",
    "imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/145.png"
  },
  {
    "id": 10,
    "nome": "Dragonites",
    "imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png"
  },
  {
    "id": 11,
    "nome": "Snorlax",
    "imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/143.png"
  },
  {
    "id": 12,
    "nome": "Arcanine",
    "imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/059.png"
  },
  {
    "id": 13,
    "nome": "Gyrados",
    "imagem": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/130.png"
  }
];

// transforma para json
app.use(bodyParser.json());
app.use(cors());

// routes para onde vai ficar a info
app.get("/pokes", (req, resposta) => {
    resposta.send(pokes);
    console.log(pokes);
});

// avalia se a conexao foi feita com sucesso
app.post("/pokes", (req, res) => {
    const poke = req.body;
    poke.id = pokes.length;
    pokes.push(poke);
    res.sendStatus(201);
    
});

// filtra os pokemons pela id que eles tem
app.put("/pokes/:id", (req, res) => {
    const { id } = req.params;
    const { nome, imagem } = req.body;
    pokes[id] = { id, nome, imagem };
    res.send(pokes[id]);
});

// status de não encontrado
app.get("/item/:id", (req, res) => {
    const id = req.params.id;

    // busca item do array por id
    const item = items.find(pam => pam.id == id);
    
    if(item) {
        res.send(item);
        console.log(pokes);
    } else {
        res.sendStatus(404);
    }
});

// liga o server
app.listen(PORTA, () => {
    console.log(`Atividade rolando lá na ${PORTA} tá ligado`);
    console.log(pokes);
});

