import express from "express";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const app = express();
const port = 3000;
let listItems = [];


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(bodyParser.urlencoded({ extended: true }));

// Configura la carpeta 'views' para las plantillas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configura la carpeta 'public' para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));



app.get("/", (req, res) => {
    res.render('index.ejs');
});

app.post("/submit", (req, res) => {
    const numLetters = req.body["fName"];
    listItems.push(numLetters);
    res.render("index.ejs", {numLetters: numLetters, listItems: listItems});

});

/*app.delete("/delete",(req, res)=>{

});*/


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
