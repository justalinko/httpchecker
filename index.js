const express = require('express')
const app = express();
const urlStatusCode = require('url-status-code');


app.set('views','./views');
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/' , (req,res) => {
    res.render('index');
});

app.get('/check/:website', async (req,res) => {
    const url = 'https://'+req.params.website;
    
    try{
        const status = await urlStatusCode(url);
        res.json(status);
    
    }catch(err)
    {
        res.json(err);
    }
});





app.listen(8080, ()=> console.log('App started '));
