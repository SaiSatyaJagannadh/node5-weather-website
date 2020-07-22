
// console.log('we created javascript part')

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// const fetch = require("node-fetch");



// fetch('/weather?address=!').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.longitude)


//             // console.log(data.forecast)
//         }
//     })
// })

// const weatherform=document.querySelector('form')
// const search=document.querySelector('input')

// weatherform.addEventListener('submit',(e)=>
// {
//     e.preventDefault()
//     const location=search.value
//     console.log(location)
// })







console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                // messageTwo.textContent = data.forecast
            }
        })
    })
})












// fetch('http://puzzle.mead.io/puzzle').then((response)=>
// {
// response.json().then((data)=>
// {
// console.log(data)
// })
// })