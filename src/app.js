const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const app = express()
const port =process.env.PORT || 3000
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'SAI SATYA JAGANNADH'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'SAI SATYA JAGANNADH'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'SAI SATYA JAGANNADH'
    })
})

app.get('/weather', (req, res) => {

if(!req.query.address)
{
    return res.send({
        error:"we cant locate your location,enter the location"
    })
}
// a=req.query.address

geocode(req.query.address,(error,{latitude,longitude,location}={})=>
{
if(error)
{
    return res.send({error})
}

// forecast(latitude,longitude,(error,forecastdata)=>
// {
//     if(error)
//     {
//         return res.send({error})
//     }
//     res.send({
//         forecast:forecastdata,
//         location,
//         address:req.query.address
//     })
// })


else{
    res.send({
        location,longitude,latitude,
        address:req.query.address

    })
}


})
    


})


app.get('/products', (req, res) => {
if(!req.query.search)
{
    return res.send({
        error:'you must provide the serach type input'
    })
}
    

    console.log(req.query)//we will get the search result in the console
    console.log(req.query.search)//we will get the equal to one key 
     
    res.send({
        products:[]
    })
})




app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'SAI SATYA JAGANNADH',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'SAI SATYA JAGANNADH',
        errorMessage: 'Page not found.'
    })
})

app.listen(port  , () => {
    console.log('Server is up on port..'+port)
})