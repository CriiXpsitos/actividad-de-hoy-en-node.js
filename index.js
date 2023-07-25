const express = require("express");
const cors = require("cors");
const { parse } = require("path");
const app = express();
const port = process.env.port || 4040 

app.use(cors());
app.use(express.json());

const papeleria = [ 
    {id: 1, marca: "Norma", producto: "Colores", DNI: "1111123126", stock: false},
    {id:2, marca: "Nata", producto: "Borradores", DNI: "11102679822", stock: true},
    {id:3, marca: "jeff", producto: "Regla", DNI: "1110232445", stock: true}
];

app.get("/", (req, res) => {
    res.send("Bienvenidos al inventarios de nuestra papeleria");
});

app.get("/api/papeleria", (req, res) => {
    res.send(papeleria);
});

app.get("/api/papeleria/:id", (req, res) => {
    const papeles = papeleria.find((c) => c.id === parseInt(req.params.id));
    if (!papeles)
    return res
    .status(404)
    .send("No se encontro lo que usted solicita en la base de datos de nuestro inventario");
else res.send(papeles);
})

app.post("/api/papeleria", (req, res) => {
    const papeles = {
        id: papeleria.length + 1,
        marca: req.body.marca,
        producto: req.body.producto, 
        DNI: req.body.DNI,
        stock: req.body.stock === true,
    };
    papeleria.push(papeles);
    res.send(papeles);
});

app.put("/api/papeleria/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { marca, producto, DNI, stock } = req.body;

    const papeleria = papeleria.find((papeleria) => papeleria.id === id);

    if (!papeleria) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    papeleria.marca = marca !== undefined ? marca : carro.marca;
    papeleria.producto = producto !== undefined ?producto : carro.producto;
    papeleria.DNI = DNI !== undefined ? parseInt(DNI) : carro.DNI;
    papeleria.stock = stock !== undefined ? stock === true : papeleria.stock;

    res.json(papeleria);
});
 

app.delete("/api/papeleria/:id", (req, res) =>{
    const papeles = papeleria.find((d) => d.id === parseInt(req.params.id));
    if (!papeles)
    return res
    .status(404)
    .send("Producto no encontrado");
else res.send(papeles);

const index = papeleria.indexOf(papeles);
papeleria.splice(index, 1);
res.send(papeles)
}); 

app.listen(port, () => console.log (`escuchando el el puerto ${port}....`));

