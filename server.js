const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const Item = mongoose.model('Item', ItemSchema);

app.use(bodyParser.json());

let items = [
    {
    id:"0",
    data:"This is sample data0",
    },
    {
        
    id:"1",
    data:"This is sample data1",
    }
];
app.get('/api', async (req, res) => {
    res.json(items);
});

app.post('/api', async (req, res) => {
    // const newItem = new Item(req.body);
    console.log(req.body);
    items.push(req.body);
    // items.append(req.body.data);
    res.json({ message: 'Item added successfully' });
});

app.delete('/api/:id', async (req, res) => {
    for(let i=0; i<items.length; i++){
        if(items[i].id == req.params.id){
            items.splice(i, 1);
        }
    }
    res.json({ message: 'Item deleted successfully' });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
