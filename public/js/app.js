
console.log('we created javascript part')

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const fetch = require("node-fetch");



fetch('http://localhost:3000/weather?address=!').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.longitude)


            // console.log(data.forecast)
        }
    })
})

const weatherform=document.querySelector('form')
const search=document.querySelector('input')

weatherform.addEventListener('submit',(e)=>
{
    e.preventDefault()
    const location=search.value
    console.log(location)
})








// fetch('http://puzzle.mead.io/puzzle').then((response)=>
// {
// response.json().then((data)=>
// {
// console.log(data)
// })
// })