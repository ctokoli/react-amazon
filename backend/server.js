import express from 'express';
import data from './data.js';


const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/api/product/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if(product){
        res.send(product);
        //console.log(product);

    } else {
        res.status(404).send({message: 'product not find'});
    }
});

app.get('/',  (req, res) => {
    res.send('Server is Ready');
});

const port = process.env.PORT || 5001

app.listen(port, () => {
    console.log(`server at http at http://localhost:${port}`);
});

