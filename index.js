let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let cors = require('cors') //8000
let teams = require('./data.js')

let hostname = 'localhost'
let port = 3001

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/api/teams', (req,res) => {
  if(!teams){
    res.status(404).json({ message: "No Teams Found Homie"})
  }
  res.json(teams)
  
})

app.get('/api/teams/:id', (req,res) => {
  let reqId = req.params.id
  let team = teams.filter(team => {
  return team.id ==reqId
  })
  if(!team){
    res.status(404).json({message: 'Aint No Playoff Teams Bihh'})
  }

  res.json(team[0])

})
app.post('/api/teams/',(req,res) => {
  let team ={
    id: teams.length + 1,
    location: req.body.location,
    teamName: req.body.teamName,
    quarterback: req.body.quarterback 
  }
  teams.push(team)

  res.json(team)
})


app.put('/api/teams/:id' ,(req,res) => {
  let reqId = req.params.id

  let team = teams.filter(teams => {
    return contact.id === reqId

  })[0]

  let index = teams.indexOf(team)
  let keys = Object.keys(req.body)

  keys.forEachKey(key => {
    team[key] = req.body[key]

  })


  teams[index] = team

  res.json(teams[index])
})

app.listen(port, hostname, () => {
  console.log(`Running on http://${hostname}:${port}`)

})




