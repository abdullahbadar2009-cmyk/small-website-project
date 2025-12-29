const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname))

app.get('/home', (req, res) => {
  res.sendFile(__dirname+"/index.html")
})
app.get('/app',(req,res)=>{
    res.sendFile(__dirname+"/app.html")
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+"/contact.html")
})

app.post('/form',(req,res)=>{
  console.log(req.body)
  res.redirect('/contact.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
