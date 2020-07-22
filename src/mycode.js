

const hbs=require('hbs')
const path=require('path')


const express=require('express')


// console.log(__dirname)
// console.log(__filename)//it will print the directories of files and folder paths

// console.log(path.join(__filename))//it will also do the ssame job of above filename by implementing file path abovr
// console.log(path.join(__dirname,'../..'))//it will decrease the directories by .. command in directory ones

// console.log(path.join(__dirname,'../public'))//we are decreasing the one src path and adding the public path to use it






const app=express()


//main one 1
const publicdirectorypath=path.join(__dirname,'../public')

// app.use(express.static(path.join(__dirname,'../public')))
//or
app.use(express.static(publicdirectorypath))//coming from static directory //printing 






const viewpath=path.join(__dirname,'../templates/views')

//partials are used for the dynamic replication of all pages at one time


const partialspath=path.join(__dirname,'../templates/partials')


app.set('views',viewpath)//these are main for vi

//getting the dynamic template we are using the hbs i.e handle bar setup

// app.set('view engine','hbs')
app.set('view engine', 'hbs');//default egine for running

hbs.registerPartials(partialspath)


app.get('',(req,res)=>
{
res.render('index',
{
    title:'weath',
    name:'andrew sair'
})//we are 'index.hbs here
})




app.get('/about',(req,res)=>
{
res.render('about',
{
    title:'gamble',
    name:'sai satya jaganandh'
})//we are 'index.hbs here
})


app.get('/help',(req,res)=>
{
res.render('help',
{
    help:'www.google.com',
    name:'sai jaganandh',
    title:'saijagannadh'
})//we are 'index.hbs here
})

app.get('/help',(req,res)=>
{
res.render('help',
{
    help:'www.google.com',
    name:'sai jaganandh',
    title:'saijagannadh'
})//we are 'index.hbs here
})

// app.get('*',(req,res)=>//for all invalid type of linkks
// {
// res.send('404 error page cant be found')
// })

app.get('*',(req,res)=>
{
res.render('404',
{
  title:'404',
  name:'sai',
  errormessage:'page not found'
    

})
})

















// app.get('',(req,res)=> //above one is there it dont run 
// {

//     res.send(' hello express')
// })

app.get('/help',(req,res)=>{
    // res.send('help page')
    // res.send('<h1>hi how can i help you</h1>')


    res.send([{
        name:'andrew',
        age:33
    },{name:'sai',age:21}])


})

app.get('/about',(req,res)=>{
    // res.send('what about you')
    //implementing the `json type
    res.send({
        name:'andrew',
        age:33
    })

})


app.get('/weather',(req,res)=>{
    // res.send('what about you')
    //implementing the `json type
    res.send({
        forecast:'humidity',
        location:'america'
    })

})




//open the server active for the running

app.listen(3000,()=>
{
console.log('server is active on port 3000..')
})//it willl get the server active with port 3000 and optional function
