const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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

app.post('api/', async (req, res) => {
    // const newItem = new Item(req.body);
    items.push(req.body.data);
    // items.append(req.body.data);
    res.json({ message: 'Item added successfully' });
});

app.delete('/api/:id', async (req, res) => {
    for(let item in items){
        if(item.id == id)
        {
            items.remove(item);
        }
    }
    res.json({ message: 'Item deleted successfully' });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
