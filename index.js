const express=require('express')
const app=express();
const cors=require('cors');
const port=process.env.PORT || 9000;

const catagories=require('./data/category.json');
const news=require('./data/news.json')
app.use(cors())

app.get('/',(req,res)=>{
    res.send('News api running')
});

app.get('/categories',(req,res)=>{
    res.send(catagories)
})
app.get('/category/:id',(req,res)=>{
    const id=req.params.id;
    if(id==='08'){
        res.send(news)
    }
    else{
        const categoryNews=news.filter(n=>n.categoty_id===id);
        res.send(categoryNews);
    }
})

app.get('/news/:id',(req,res)=>{
    const id=req.params.id;
    const selectedNews=news.find(n=>n._id===id);
    res.send(selectedNews);
})

app.listen(port,()=>{
    console.log('daily news server runninng ',port)
})